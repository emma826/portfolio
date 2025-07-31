'use client'

import { useState, useEffect } from 'react';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

import { UploadIcon } from 'lucide-react';

import { edit_admin_blog_description } from '@/server_actions/blog_actions';

export default function BlogDescriptionEdit({ blog_details }) {

    const [title, setTitle] = useState(blog_details.title || '');
    const [meta_description, setDescription] = useState(blog_details.meta_description || '');
    const [image, setImage] = useState(blog_details.featured_image || '');
    const [newImage, setNewImage] = useState(null);
    const [tags, setTags] = useState(blog_details.tags || []);
    const [category, setCategory] = useState(blog_details.category || '');
    const [status, setStatus] = useState(blog_details.status || 'draft');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    async function submit_details() {
        setLoading(true);

        if (!title || !meta_description) {
            setError('Title and Meta Description are required.');
            setLoading(false);
            return;
        }

        const {success, error} = await edit_admin_blog_description(title, meta_description, newImage, blog_details.id);
        
        if (success) {
            setSuccess('Blog description updated successfully.');
            setError('');
        }
        else {
            setError(error || 'Failed to update blog description.');
            setSuccess('');
        }
    }

    return (
        <div>

            <div className="mb-2">
                <Input className="py-5" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-2">
                <Textarea
                    className={`resize-none h-32`}
                    value={meta_description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Meta Description"
                />
            </div>
            {(image === 'none' || !image) && (
                <div className='mb-2 border rounded-md overflow-hidden'>
                    {newImage ? (
                        <img
                            src={URL.createObjectURL(newImage)}
                            alt="Uploaded"
                            className="w-full h-auto object-cover"
                        />
                    ) : (
                        <label className="flex flex-col justify-center items-center py-10 space-x-2 cursor-pointer">
                            <UploadIcon className="w-6 h-6" />
                            <span className="text-gray-500">Upload Image</span>
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={e => {
                                    if (e.target.files && e.target.files[0]) {
                                        setNewImage(e.target.files[0]);
                                    }
                                }}
                            />
                        </label>
                    )}
                </div>
            )}

            {(image && !image == "none") && (
                <div className="mb-2 rounded-md overflow-hidden">
                    <img src={`${process.env.NEXT_PUBLIC_STORAGE_SERVER}/featured_img/${image}`} alt="Current" className="w-full h-auto object-cover" />
                </div>
            )}

            <Button onClick={submit_details} disabled={loading} className={`w-full mx-auto max-w-72 py-3 mt-4 bg-green-800 hover:bg-green-700`}>Submit</Button>
        </div >
    );
}