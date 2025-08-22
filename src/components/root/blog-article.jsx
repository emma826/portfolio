import { Table, TableHead, TableHeader, TableBody, TableCell, TableRow } from "../ui/table";

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
                if (block.data.style === "unordered") {
                    return (
                        <ul key={block.id}>
                            {block.data.items.map((item, index) => (
                                <li className="list-disc " key={index} dangerouslySetInnerHTML={{ __html: item.content }} />
                            ))}
                        </ul>
                    );
                }
                if (block.data.style === "ordered") {
                    return (
                        <ol key={block.id}>
                            {block.data.items.map((item, index) => (
                                <li className="list-decimal" key={index} dangerouslySetInnerHTML={{ __html: item.content }} />
                            ))}
                        </ol>
                    );
                }
            case 'image':
                return (
                    <div key={block.id} className="flex justify-center">
                        <img
                            src={block.data.file.url}
                            alt={block.data.caption || ''}
                            className="max-w-full h-auto"
                        />
                        {block.data.caption && (
                            <p className="text-center mt-2">{block.data.caption}</p>
                        )}
                    </div>
                );
            case 'table':
                const table_data = block.data.content || [];

                if (table_data[0]) {
                    return (
                        <Table key={block.id} className="mb-4 mt-2 border-collapse">
                            <TableHeader className={`border-b border-gray-100 dark:border-white/[0.05]`}>
                                <TableRow className={"bg-muted"}>
                                    {table_data[0].map((header, index) => (
                                        <TableHead key={index} className="text-left font-medium border">
                                            <span className="text-foreground">{header}</span>
                                        </TableHead>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {table_data.slice(1).map((row, rowIndex) => (
                                    <TableRow key={rowIndex} className={`border-b border-gray-100 dark:border-white/[0.05]`}>
                                        {row.map((cell, cellIndex) => (
                                            <TableCell className="break-words whitespace-normal border" key={cellIndex}>
                                                <span className="text-foreground" dangerouslySetInnerHTML={{ __html: cell }}></span>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )
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