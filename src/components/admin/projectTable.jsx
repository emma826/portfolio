'use client'

import { Input } from "../ui/input"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import {
    Table, TableBody, TableHead, TableHeader, TableCell, TableRow
} from "@/components/ui/table"
import {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog"
import { Textarea } from "../ui/textarea"

import { add_projects, get_projects, delete_project } from "@/server_actions/project_actions"

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
        if (!name || !description || !github) {
            setError("All fields are required.");
            setUploading(false);

            setTimeout(() => {
                setError("");
            }, 3000);
            return;
        }

        if (!liveDemo) {
            setLiveDemo("#");
        }

        const addProjects = add_projects(name, description, featureImage, github, liveDemo);

        if (!addProjects.success) {
            setError(add_projects.message || "Failed to add project.");
            setUploading(false);

            setTimeout(() => {
                setError("");
            }, 3000);

            return;
        }
        setProjects(prev => [...prev, {
            id: addProjects.id,
            title: name,
            description,
            github,
            liveDemo,
            feature_image: addProjects.project.feature_image
        }]);
    }

    useEffect(() => {

        const fetchProjects = async () => {
            const response = await get_projects();
            if (response.success) {
                setProjects(response.projects);
            } else {
                setError(response.message || "Failed to fetch projects.");
            }
        };

        fetchProjects();

    }, [])

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
                                    <Input type={`text`} id="project_name" placeholder="Project Name" value={name} onChange={(e) => {setName(e.target.value)}} />
                                </div>

                                <div className="grid w-full max-w-sm items-center gap-3 mb-3">
                                    <label htmlFor="project_description">Project Description</label>
                                    <Textarea id="project_description" placeholder="Project Description" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>

                                <div className="grid w-full max-w-sm items-center gap-3 mb-3">
                                    <label htmlFor="github_link">Github Link</label>
                                    <Input type={`text`} id="github_link" placeholder="Github Link" value={github} onChange={(e) => setGithub(e.target.value)} />
                                </div>

                                <div className="grid w-full max-w-sm items-center gap-3 mb-3">
                                    <label htmlFor="live_demo_link">Live Demo Link</label>
                                    <Input type={`text`} id="live_demo_link" placeholder="Live Demo Link" value={liveDemo} onChange={(e) => setLiveDemo(e.target.value)} />
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
                                <TableCell>{project.name}</TableCell>
                                <TableCell>
                                    {/* <button className="text-green-700 underline mr-2" onClick={() => handleEdit(project)}>Edit</button> */}
                                    <button className="text-red-700 underline" onClick={async () => await delete_project(project.id)}>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}