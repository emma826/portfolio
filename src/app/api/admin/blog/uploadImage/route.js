import { NextResponse } from "next/server";

export async function POST(request) {
    const formData = await request.formData();
    formData.append("category", "media")
    const file = formData.get('file');
    let url;

    if (!file || typeof file.arrayBuffer !== 'function') {
        return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 })
    }

    // Ensure STORAGE_SERVER is a valid URL
    let storageServer = process.env.STORAGE_SERVER;
    if (storageServer && !/^https?:\/\//.test(storageServer)) {
        const protocol = process.env.NODE_ENV === "production" ? "https://" : "http://";
        storageServer = `${protocol}${storageServer}`;
    }

    try {
        let uploadResponse = await fetch(storageServer, {
            method: "POST",
            body: formData,
        });
        if (!uploadResponse.ok) {
        }

        const uploadResult = await uploadResponse.json();

        if (uploadResult.success == true) {
            console.log(uploadResult)
            url = `${storageServer}/media/${uploadResult.fileName}`;
            return NextResponse.json({ success: true, url }, { status: 200 })
        }
        else {
            return NextResponse.json({ success: false, message: "Failed to upload image." }, { status: 500 })
        }
    } catch (error) {
        console.error(error)
        return NextResponse.json({ success: false, message: "Image upload failed." }, { status: 500 })
    }
}