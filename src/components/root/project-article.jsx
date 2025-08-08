export default function ProjectArticle({ projectDetails }) {
    const renderBlock = (block) => {
        switch (block.type) {
            case "header":
                const header_tag = block.data.level
                if(header_tag == 2) {
                    return <h2 key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
                }
                if(header_tag == 3) {
                    return <h3 key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
                }
                if(header_tag == 4) {
                    return <h4 key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
                }
            case "paragraph":
                return <p key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
            case "list":
                return (
                    <ul key={block.id}>
                        {block.data.items.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>
                );
            // Add more cases for other block types as needed
            default:
                return null;
        }
    };

    return (
        <div className="mt-8 prose dark:prose-invert">
            {projectDetails.body?.blocks?.map(renderBlock) || (
                <p>No content available to display.</p>
            )}
            <div className="flex flex-col space-y-4 mt-6">
                {projectDetails.github && (
                    <a
                        href={projectDetails.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline dark:text-green-400 block py-2"
                    >
                        View on GitHub
                    </a>
                )}
                {projectDetails.live_demo && (
                    <a
                        href={projectDetails.live_demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline dark:text-green-400 block py-2"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    )
}