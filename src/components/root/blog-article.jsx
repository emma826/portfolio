export default function BlogArticle({ blog_body }) {
    const renderBlock = (block) => {
        switch (block.type) {
            case "header":
                const header_tag = block.data.level
                if (header_tag == 2) {
                    return <h2 key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
                }
                if (header_tag == 3) {
                    return <h3 key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
                }
                if (header_tag == 4) {
                    return <h4 key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
                }
            case "paragraph":
                return <p key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
            case "list":
                console.log("list block", block);
                if (block.data.style === "unordered") {
                    return (
                        <ul key={block.id}>
                            {block.data.items.map((item, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </ul>
                    );
                }
                if (block.data.style === "ordered") {
                    return (
                        <ol key={block.id}>
                            {block.data.items.map((item, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </ol>
                    );

                }

            default:
                return null;
        }
    };

    return (
        <div className="mt-8 prose dark:prose-invert">
            {blog_body?.blocks?.map(renderBlock) || (
                <p>No content available to display.</p>
            )}
        </div>
    );
}