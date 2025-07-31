'use client'

import { useState } from 'react'

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

import { UploadIcon } from 'lucide-react';

import { update_project } from '@/server_actions/project_actions';

export default function ProjectDescriptionEdit({ project }) {

    const [name, setName] = useState(project.name || '');
    const [description, setDescription] = useState(project.description || '');
    const [image, setImage] = useState(project.feature_image || '');
    const [newImage, setNewImage] = useState(null);
    const [github, setGithub] = useState(project.github || '');
    const [live_demo, setLiveDemo] = useState(project.live_demo || '');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    async function submitDetails() {
        setLoading(true);

        if (!name || !description) {
            setError('Name and Description are required.');
            setLoading(false);
            return;
        }
        const { success, error } = await update_project(name, description, newImage, github, live_demo, project.id);
        if (success) {
            setSuccess('Project details updated successfully.');
            setError('');
        } else {
            setError(error || 'Failed to update project details.');
            setSuccess('');
        }
        setLoading(false);
    }

    return (
        <>
            <div className="space-y-4">
                {error && <div className="text-red-500">{error}</div>}
                {success && <div className="text-green-500">{success}</div>}

                <div className="mb-2">
                    <Input className="py-5" type="text" placeholder="Project Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-2">
                    <Textarea
                        className="resize-none h-32"
                        placeholder="Project Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                {/* Show upload input if image is "none" or a string */}
                {(image === 'none' || typeof image === 'string') && (
                    <div className="mb-2 border rounded-md overflow-hidden">
                        {newImage ? (
                            <>
                                <img
                                    src={URL.createObjectURL(newImage)}
                                    alt="Uploaded"
                                    className="w-full h-auto object-cover"
                                />
                                <Button
                                    variant="destructive"
                                    className="mt-2"
                                    onClick={() => setNewImage(null)}
                                    type="button"
                                >
                                    Remove Uploaded Image
                                </Button>
                            </>
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
                {image && image !== 'none' && (
                    <Button
                        variant="destructive"
                        className="mb-2"
                        onClick={() => {
                            setImage('none');
                            setNewImage(null);
                        }}
                        type="button"
                    >
                        Remove Current Image
                    </Button>
                )}

                <Input
                    type="text"
                    placeholder="GitHub URL"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                />

                <Input
                    type="text"
                    placeholder="Live Demo URL"
                    value={live_demo}
                    onChange={(e) => setLiveDemo(e.target.value)}
                />

                <Button onClick={submitDetails} disabled={loading}>
                    {loading ? 'Updating...' : 'Update Project'}
                </Button>
            </div>
        </>
    )
}