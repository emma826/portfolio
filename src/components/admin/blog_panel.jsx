import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel } from "../ui/dropdown-menu"
import { AlignLeft, AlignCenter, AlignRight, AlignJustify, List, ListOrdered, Indent, Outdent, Quote, Image as ImageIcon, Video, Link, Link2Off, Code } from "lucide-react"

export default function BlogPanel({ editor, onImageUploadClick, onPublish }) {
    if (!editor) return null

    return (
        <div className="flex flex-wrap w-full mb-4 gap-1">
            <div>
                <button onClick={() => editor.chain().focus().toggleBold().run()}><b>B</b></button>
                <button onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></button>
            </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger className="ml-2">
                        <span className="text-sm font-semibold">Text</span>
                        <span className="ml-1">▼</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuLabel className="text-sm font-semibold">
                        Text Formatting
                    </DropdownMenuLabel>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => editor.chain().focus().setParagraph().run()}>Paragraph</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>Heading 1</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>Heading 2</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>Heading 3</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger className="ml-2">
                        <span className="text-sm font-semibold">Table</span>
                        <span className="ml-1">▼</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuLabel className="text-sm font-semibold">
                        Table Options
                    </DropdownMenuLabel>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>Insert Table</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().addRowBefore().run()}>Add Row Above</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().addRowAfter().run()}>Add Row Below</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().addColumnBefore().run()}>Add Column Left</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().addColumnAfter().run()}>Add Column Right</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().deleteRow().run()}>Delete Row</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().deleteColumn().run()}>Delete Column</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().mergeCells().run()}>Merge Cells</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().splitCell().run()}>Split Cell</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().deleteTable().run()}>Delete Table</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().toggleHeaderRow().run()}>Toggle Header Row</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().toggleHeaderColumn().run()}>Toggle Header Column</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().toggleHeaderCell().run()}>Toggle Header Cell</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => editor.chain().focus().mergeOrSplit().run()}>Merge or Split</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div>
                <button onClick={() => editor.chain().focus().setTextAlign('left').run()}>
                    <AlignLeft />
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                    <AlignCenter />
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('right').run()}>
                    <AlignRight />
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('justify').run()}>
                    <AlignJustify />
                </button>
            </div>
            <div>
                <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
                    <List />
                </button>
                <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                    <ListOrdered />
                </button>
            </div>
            <div>
                <button onClick={() => editor.chain().focus().sinkListItem('listItem').run()}>
                    <Indent />
                </button>
                <button onClick={() => editor.chain().focus().liftListItem('listItem').run()}>
                    <Outdent />
                </button>
            </div>
            <div>
                <button onClick={() => editor.chain().focus().toggleLink({ href: prompt('Enter URL') }).run()}>
                    <Link />
                </button>
                <button onClick={() => editor.chain().focus().unsetLink().run()}>
                    <Link2Off />
                </button>
            </div>
            <div>
                <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                    <Quote />
                </button>
                <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
                    <Code />
                </button>
            </div>
            <div>
                <button onClick={onImageUploadClick}>
                    <ImageIcon />
                </button>
                <button disabled>
                    <Video />
                </button>
            </div>
            <button className="ml-2" onClick={onPublish}>Publish</button>
        </div>
    )
}