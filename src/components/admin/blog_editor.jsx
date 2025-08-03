'use client'

import React, { useRef, useEffect, useState } from 'react'

export default function BlogEditor({ blog_id, body }) {
    const editorInstance = useRef(null)
    const fileInputRef = useRef(null)
    const [editorData, setEditorData] = useState(body ? JSON.parse(body) : null) // Parse body if it's a JSON string

    useEffect(() => {
        let EditorJS
        let Header, ImageTool, List, Embed, Marker, LinkTool, CodeTool, Table, Paragraph, Checklist, Warning, RawTool

        // Dynamically import EditorJS and its tools to ensure they are only loaded on the client side
        import('@editorjs/editorjs').then((module) => {
            EditorJS = module.default
            return Promise.all([
                import('@editorjs/header'),
                import('@editorjs/image'),
                import('@editorjs/list'),
                import('@editorjs/embed'),
                import('@editorjs/marker'),
                import('@editorjs/link'),
                import('@editorjs/code'),
                import('@editorjs/table'),
                import('@editorjs/paragraph'),
                import('@editorjs/checklist'),
                import('@editorjs/warning'),
                import('@editorjs/raw'),
            ])
        }).then((modules) => {
            [Header, ImageTool, List, Embed, Marker, LinkTool, CodeTool, Table, Paragraph, Checklist, Warning, RawTool] = modules.map((mod) => mod.default)

            if (!editorInstance.current) {
                editorInstance.current = new EditorJS({
                    holder: 'editorjs',
                    tools: {
                        header: {
                            class: Header,
                            inlineToolbar: true,
                            config: {
                                placeholder: 'Enter a header',
                            },
                        },
                        list: {
                            class: List,
                            inlineToolbar: true,
                        },
                        image: {
                            class: ImageTool,
                            config: {
                                uploader: {
                                    uploadByFile: async (file) => {
                                        const formData = new FormData()
                                        formData.append('file', file)

                                        try {
                                            const res = await fetch('/api/admin/blog/uploadImage', {
                                                method: 'POST',
                                                body: formData,
                                            })
                                            const { url, success, message } = await res.json()

                                            if (!success) {
                                                throw new Error(message || 'Image upload failed')
                                            }

                                            return { success: 1, file: { url } }
                                        } catch (error) {
                                            console.error('Image upload error:', error)
                                            return { success: 0 }
                                        }
                                    },
                                },
                            },
                        },
                        embed: Embed,
                        marker: Marker,
                        linkTool: {
                            class: LinkTool,
                            config: {
                                endpoint: '/api/admin/blog/fetchUrl', // Replace with your endpoint
                            },
                        },
                        code: CodeTool,
                        table: {
                            class: Table,
                            inlineToolbar: true,
                        },
                        paragraph: {
                            class: Paragraph,
                            inlineToolbar: true,
                        },
                        checklist: Checklist,
                        warning: {
                            class: Warning,
                            config: {
                                titlePlaceholder: 'Warning title',
                                messagePlaceholder: 'Warning message',
                            },
                        },
                        raw: RawTool,
                    },
                    data: editorData, // Load initial content into the editor
                    placeholder: 'Start writing your blog...',
                    autofocus: true,
                    onReady: () => {
                        console.log('Editor.js is ready to work!')
                    },
                    onChange: async () => {
                        const content = await editorInstance.current.save()
                        setEditorData(content)
                    },
                })
            }
        })

        return () => {
            if (editorInstance.current) {
                editorInstance.current.isReady
                    .then(() => {
                        editorInstance.current.destroy()
                        editorInstance.current = null
                    })
                    .catch((error) => console.error('Error destroying Editor.js instance:', error))
            }
        }
    }, []) // Empty dependency array ensures this runs only once

    const handlePublish = async () => {
        try {
            const content = await editorInstance.current.save()
            const res = await fetch('/api/admin/blog/publish', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ blog_id, content }),
            })
            const result = await res.json()
            if (result.success) {
                alert('Blog published successfully!')
            } else {
                alert(result.message || 'Failed to publish blog')
            }
        } catch (error) {
            console.error('Publish error:', error)
            alert('Failed to publish blog')
        }
    }

    return (
        <div>
            <style>{`
                .no-outline:focus {
                    outline: none !important;
                    box-shadow: none !important;
                }
                .no-outline *:focus {
                    outline: none !important;
                    box-shadow: none !important;
                }
                #editorjs {
                    min-height: 400px;
                    border: 1px solid #ccc;
                    padding: 10px;
                    border-radius: 8px;
                    padding-left: 40px;
                }
            `}</style>
            <div className="flex justify-end items-center mb-4">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={handlePublish}
                >
                    Publish Blog
                </button>
            </div>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                ref={fileInputRef}
            />
            <div id="editorjs"></div>
        </div>
    )
}