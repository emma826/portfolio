'use client'

import { SearchIcon, Plus } from "lucide-react"

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

import Link from "next/link"

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

    const submit_projects = async () => {
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

        const addProjects = await add_projects(name, description, featureImage, github, liveDemo);

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
            <div className="py-5 px-3 flex justify-between gap-2">
                <div className="flex-auto">
                    <div className="rounded-sm border w-80 border-gray-200 bg-white flex justify-between dark:border-gray-800 overflow-hidden dark:bg-white/[0.03]">
                        <Input type="text" style={{ outline: "none", border: "none" }} placeholder="Search..." className="border-none flex-auto rounded-none focus:ring-0" />
                        <SearchIcon className="block w-10 mt-1.5 cursor-pointer align-middle text-gray-500" />
                    </div>
                </div>
                <div>
                    <Dialog>
                        <DialogTrigger className="bg-green-800 cursor-pointer rounded-md py-2 px-2">
                            <Plus className="w-5 h-5 mx-auto text-white" />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>New Project</DialogTitle>
                            </DialogHeader>

                            <div className="py-3 max-h-[70vh] overflow-y-auto px-1">

                                {error && <p className="text-red-600 text-center my-2">{error}</p>}
                                {success && <p className="text-green-600 text-center my-2">{success}</p>}

                                <div className="grid w-full items-center gap-3 mb-3">
                                    <label htmlFor="project_name">Project Name</label>
                                    <Input type={`text`} id="project_name" placeholder="Project Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                                </div>

                                <div className="grid w-full items-center gap-3 mb-3">
                                    <label htmlFor="project_description">Project Description</label>
                                    <Textarea id="project_description" placeholder="Project Description" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>

                                <div className="grid w-full items-center gap-3 mb-3">
                                    <label htmlFor="github_link">Github Link</label>
                                    <Input type={`text`} id="github_link" placeholder="Github Link" value={github} onChange={(e) => setGithub(e.target.value)} />
                                </div>

                                <div className="grid w-full items-center gap-3 mb-3">
                                    <label htmlFor="live_demo_link">Live Demo Link</label>
                                    <Input type={`text`} id="live_demo_link" placeholder="Live Demo Link" value={liveDemo} onChange={(e) => setLiveDemo(e.target.value)} />
                                </div>

                                <div className="grid w-full items-center gap-3 mb-3">
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

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 max-w-5xl mx-auto">
                <Table>
                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                        <TableRow>
                            <TableHead className="w-[30px]">S/N</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.map((project, index) => (
                            <TableRow key={project.id}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell className={`text-blue-900 dark:text-blue-200 whitespace-normal break-words`}>
                                    <Link href={`projects/${project.id}`}>{project.name || ""}</Link>
                                </TableCell>
                                <TableCell className="break-words whitespace-normal">{project.description || ""}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </div>
        </>
    )
}