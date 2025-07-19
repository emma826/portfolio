import { query } from "@/dbh";
import { redirect } from "next/navigation";

async function get_blog_details(blog_url) {

    try {
        const queryText = "SELECT * FROM portfolio_blogs WHERE url = $1";
        const values = [blog_url];
        const { rows } = await query(queryText, values);
        if (rows.length === 0) {
            return null; // Blog not found
        }
        return rows[0]; // Return the first blog found
    }
    catch (error) {
        return null
    }
}

export async function generateMetadata({ params }) {
    const { blog_url } = await params;
    if (!blog_url) {
        return { title: "Blog Not Found" };
    }

    const blogDetails = await get_blog_details(blog_url);
    if (!blogDetails) {
        return { title: "Blog Not Found" };
    }

    return {
        title: blogDetails.title,
        description: blogDetails.meta_description,
        openGraph: {
            title: blogDetails.title,
            description: blogDetails.meta_description,
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_STORAGE_SERVER}/featured_img/${blogDetails.featured_image}`,
                    width: 800,
                    height: 600,
                },
            ],
        },
    };
}

export default async function Blog_urlPage({ params }) {
    const { blog_url } = await params;

    if (!blog_url) {
        return redirect("/blog");
    }

    const blogDetails = await get_blog_details(blog_url);
    if (!blogDetails) {
        return redirect("/blog");
    }

    return (
        <main className="flex-auto">
            <div className="sm:px-8 mt-16">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="xl:relative">
                                <div className="mx-auto max-w-2xl">
                                    <article>
                                        <header className="flex flex-col">
                                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                                                {blogDetails.title}
                                            </h1>

                                            <img src={`${process.env.NEXT_PUBLIC_STORAGE_SERVER}/featured_img/${blogDetails.featured_image}`} width={400} height={400} alt={blogDetails.title} />

                                            <time dateTime={blogDetails.created_at} className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
                                                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                                <span className="ml-3"> {new Date(blogDetails.created_at).toLocaleDateString("en-GB")} </span>
                                            </time>
                                        </header>

                                        <div className="mt-8 prose dark:prose-invert" data-mdx-content="true">
                                            {blogDetails.body}
                                        </div>
                                        
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}