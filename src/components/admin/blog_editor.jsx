'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import { Button } from "@/components/ui/button"
import React, { useRef } from 'react'

export default function BlogEditor({ blog_id }) {
    const fileInputRef = useRef(null)
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
        ],
        content: '',
        autofocus: true,
        immediatelyRender: false
    })

    // Toolbar actions
    const setBold = () => editor?.chain().focus().toggleBold().run()
    const setItalic = () => editor?.chain().focus().toggleItalic().run()
    const setHeading2 = () => editor?.chain().focus().toggleHeading({ level: 2 }).run()
    const setHeading3 = () => editor?.chain().focus().toggleHeading({ level: 3 }).run()
    const addImage = () => fileInputRef.current.click()

    // Image upload handler
    const handleImageUpload = async (event) => {
        const file = event.target.files[0]
        if (!file) return

        const formData = new FormData()
        formData.append('file', file)

        // Replace with your actual upload endpoint

        try {
            const res = await fetch('/api/admin/blog/uploadImage', {
                method: 'POST',
                body: formData,
            })

            const {url, error, success} = await res.json()

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
            <div className='flex gap-1 mb-4 flex-wrap'>
                <Button onClick={setBold} type="button"><b>B</b></Button>
                <Button onClick={setItalic} type="button"><i>I</i></Button>
                <Button onClick={setHeading2} type="button">H2</Button>
                <Button onClick={setHeading3} type="button">H3</Button>
                <Button onClick={addImage} type="button">Image</Button>
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                />
                <Button onClick={handlePublish} type="button" color="primary">Publish</Button>
            </div>
            <EditorContent editor={editor} />
        </div>
    )
}