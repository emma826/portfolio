'use client'

import { Input } from "../ui/input"
import { useState } from "react"
import { Button } from "../ui/button"
import {
    Table, TableBody, TableHead, TableHeader, TableCell, TableRow
} from "@/components/ui/table"
import {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog"

import add_projects from "@/server_actions/project_actions"

export default function ProjectTable() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("");
    const [featureImage, setFeatureImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [github, setGithub] = useState("");
    const [liveDemo, setLiveDemo] = useState("");
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [projects, setProjects] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFeatureImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const submit_projects = () => {
        setUploading(true);
        setError("");
        setSuccess("");

        // Validate inputs
        if (!name || !description || !featureImage || !github) {
            setError("All fields are required.");
            setUploading(false);
            return;
        }

        if(!liveDemo) {
            setLiveDemo("#");
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('github', github);
        formData.append('liveDemo', liveDemo);
        formData.append('featureImage', featureImage);

        const add_projects = add_projects(name, description, featureImage, github, liveDemo);

        if(!add_projects.success) {
            setError(add_projects.message || "Failed to add project.");
            setUploading(false);
            return;
        }
        setProjects(prev => [...prev, {
            id: add_projects.id,
            title: name,
            description,
            github,
            liveDemo,
            feature_image: add_projects.project.feature_image
        }]);
    }

    return (
        <>
            <div className="flex justify-between">
                <div>
                    <Input type={`text`} placeholder="Search ..." />
                </div>
                <div>
                    <Dialog>
                        <DialogTrigger className="mt-2">
                            <span className="bg-green-700 hover:bg-green-700 text-white rounded-lg px-4 py-2 cursor-pointer">
                                Add
                            </span>
                        </DialogTrigger>

                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>New Project</DialogTitle>
                            </DialogHeader>

                            <div className="py-3 max-h-[70vh] overflow-y-auto">

                                {error && <p className="text-red-600 text-center my-2">{error}</p>}
                                {success && <p className="text-green-600 text-center my-2">{success}</p>}

                                <div className="grid w-full max-w-sm items-center gap-3 mb-3">
                                    <label htmlFor="project_name">Project Name</label>
                                    <Input type={`text`} id="project_name" placeholder="Project Name" />
                                </div>

                                <div className="grid w-full max-w-sm items-center gap-3 mb-3">
                                    <label htmlFor="project_description">Project Description</label>
                                    <Input type={`text`} id="project_description" placeholder="Project Description" />
                                </div>

                                <div className="grid w-full max-w-sm items-center gap-3 mb-3">
                                    <label htmlFor="github_link">Github Link</label>
                                    <Input type={`text`} id="github_link" placeholder="Github Link" />
                                </div>

                                <div className="grid w-full max-w-sm items-center gap-3 mb-3">
                                    <label htmlFor="live_demo_link">Live Demo Link</label>
                                    <Input type={`text`} id="live_demo_link" placeholder="Live Demo Link" />
                                </div>

                                <div className="grid w-full max-w-sm items-center gap-3 mb-3">
                                    <label htmlFor="feature_image">Feature Image</label>
                                    <Input type="file" id="feature_image" accept="image/*" onChange={handleImageChange} />
                                    {imagePreview && (
                                        <img src={imagePreview} alt="Preview" className="mt-2 h-60 w-full object-cover rounded-lg" />
                                    )}
                                </div>
                            </div>
                            <DialogFooter>
                                <Button disabled={uploading} type="button" onClick={submit_projects} className="bg-green-800 hover:bg-green-700 text-white">
                                    {uploading ? "Uploading..." : "Upload Project"}
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className="max-w-4xl w-full mx-auto">
                <h2 className="text-xl font-bold mb-2 mt-8">Project List</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.map((project, index) => (
                            <TableRow key={index} className={`w-full`}>
                                <TableCell>{project.title}</TableCell>
                                <TableCell>
                                    <button className="text-green-700 underline mr-2" onClick={() => handleEdit(project)}>Edit</button>
                                    <button className="text-red-700 underline" onClick={() => handleDelete(project.id)}>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}