'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import { TableKit } from '@tiptap/extension-table'
import React, { useRef } from 'react'

import BlogPanel from './blog_panel'

export default function BlogEditor({ blog_id, body }) {
    const fileInputRef = useRef(null)
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            // Gapcursor,
            TableKit.configure({
                resizable: true,
            }),
        ],
        content: body || '',
        autofocus: true,
        immediatelyRender: false
    })

    // Image upload handler
    const handleImageUpload = async (event) => {
        const file = event.target.files[0]
        if (!file) return

        const formData = new FormData()
        formData.append('file', file)

        try {
            const res = await fetch('/api/admin/blog/uploadImage', {
                method: 'POST',
                body: formData,
            })

            const { url, error, success } = await res.json()

            if (!success) {
                throw new Error(error || 'Image upload failed')
            }

            editor.chain().focus().setImage({ src: url }).run()
            return
        }
        catch (error) {
            console.error('Image upload error:', error)
            alert('Image upload failed')
            return
        }
    }

    // Publish handler
    const handlePublish = async () => {
        if (!editor) return;
        const content = editor.getHTML();
        try {
            const res = await fetch('/api/admin/blog/publish', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ blog_id, content }),
            });
            const result = await res.json();
            if (result.success) {
                alert('Blog published successfully!');
            } else {
                alert(result.message || 'Failed to publish blog');
            }
        } catch (error) {
            console.error('Publish error:', error);
            alert('Failed to publish blog');
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
            `}</style>
            <BlogPanel
                editor={editor}
                onImageUploadClick={() => fileInputRef.current.click()}
                onPublish={handlePublish}
            />
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleImageUpload}
            />
            <EditorContent
                editor={editor}
                className="border p-4 rounded-xl no-outline min-h-96"
                style={{ outline: 'none', boxShadow: 'none' }}
            />
        </div>
    )
}