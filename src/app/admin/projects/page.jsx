import { Card } from "@/components/ui/card"

import ProjectTable from "@/components/admin/projectTable";

export default function AdminProjectPage() {
    
    


    // useEffect(() => {
    //     // Replace with your API call
    //     async function fetchProjects() {
    //         // const res = await fetch('/api/projects');
    //         // const data = await res.json();
    //         // setProjects(data.projects);
    //         // Mocked data:
    //         setProjects([
    //             {
    //                 id: 1,
    //                 title: "Sight Line Classifier",
    //                 description: "A yolov8 object detection system trained on custom street imagery.",
    //                 github: "https://github.com/example/sightline",
    //                 liveDemo: "https://demo.com/sightline",
    //                 image: "demo.jpg"
    //             }
    //         ]);
    //     }
    //     fetchProjects();
    // }, []);

    // // Handle form submit (add or edit)
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError("");
    //     setSuccess("");
    //     if ((!featureImage && !editingId) || !title || !description) {
    //         setError("Please fill all required fields and select an image.");
    //         return;
    //     }
    //     setUploading(true);
    //     try {
    //         let imageFileName = null;
    //         if (featureImage) {
    //             // 1. Upload image to PHP server
    //             const formData = new FormData();
    //             formData.append('file', featureImage);
    //             formData.append('category', 'projects');
    //             const res = await fetch('http://localhost/index.php', {
    //                 method: 'POST',
    //                 body: formData
    //             });
    //             const data = await res.json();
    //             if (!data.success) throw new Error(data.message || 'Image upload failed');
    //             imageFileName = data.fileName;
    //         }
    //         if (editingId) {
    //             // Update project (mocked)
    //             setProjects(prev => prev.map(p => p.id === editingId ? {
    //                 ...p,
    //                 title,
    //                 description,
    //                 github,
    //                 liveDemo,
    //                 image: imageFileName || p.image
    //             } : p));
    //             setSuccess('Project updated!');
    //         } else {
    //             // Add new project (mocked)
    //             setProjects(prev => [
    //                 ...prev,
    //                 {
    //                     id: Date.now(),
    //                     title,
    //                     description,
    //                     github,
    //                     liveDemo,
    //                     image: imageFileName
    //                 }
    //             ]);
    //             setSuccess('Project uploaded!');
    //         }
    //         setFeatureImage(null);
    //         setImagePreview(null);
    //         setTitle("");
    //         setDescription("");
    //         setGithub("");
    //         setLiveDemo("");
    //         setEditingId(null);
    //     } catch (err) {
    //         setError(err.message);
    //     } finally {
    //         setUploading(false);
    //     }
    // };

    // // Handle edit
    // const handleEdit = (project) => {
    //     setEditingId(project.id);
    //     setTitle(project.title);
    //     setDescription(project.description);
    //     setGithub(project.github || "");
    //     setLiveDemo(project.liveDemo || "");
    //     setImagePreview(project.image ? `/projects/${project.image}` : null);
    //     setFeatureImage(null);
    //     setError("");
    //     setSuccess("");
    // };

    // // Handle delete
    // const handleDelete = (id) => {
    //     if (window.confirm('Are you sure you want to delete this project?')) {
    //         setProjects(prev => prev.filter(p => p.id !== id));
    //         // Optionally, reset form if editing the deleted project
    //         if (editingId === id) {
    //             setEditingId(null);
    //             setTitle("");
    //             setDescription("");
    //             setGithub("");
    //             setLiveDemo("");
    //             setFeatureImage(null);
    //             setImagePreview(null);
    //         }
    //     }
    // };

    return (
        <>
            <h1 className="my-3 text-green-800 text-3xl lg:text-4xl font-bold text-center">Projects</h1>
            <Card className="max-w-xl mx-auto p-6 mb-8">
                <ProjectTable />
            </Card>
        </>
    )
}