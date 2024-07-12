import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

export default function ButtonGrid() {
    return (
        <div className="min-h-[90vh] grid grid-cols-2 grid-rows-2 gap-6">
            <PlusButton href="/posts/new">New Post</PlusButton>
            <UpdateButton href="/posts/update">Update Post</UpdateButton>
            <DeleteButton href="/posts/delete">Delete Post</DeleteButton>
        </div>
    );
}

function PlusButton({
    children,
    href,
    disabled,
}: {
    children: React.ReactNode;
    href: string;
    disabled?: boolean;
}) {
    return (
        <Button
            asChild
            disabled
            className="col-span-2 row-span-1 h-full bg-orange-500 hover:bg-orange-500/90 text-2xl rounded-xl"
        >
            <Link href={href}>
                <Plus className="w-8 h-8 mr-6" />
                {children}
            </Link>
        </Button>
    );
}

function UpdateButton({
    children,
    href,
    disabled,
}: {
    children: React.ReactNode;
    href: string;
    disabled?: boolean;
}) {
    return (
        <Button
            disabled
            asChild
            className="col-span-1 row-span-1 h-full bg-blue-500 hover:bg-blue-500/90 text-2xl rounded-xl"
        >
            <Link href={href}>
                <Pencil className="w-8 h-8 mr-6" />
                {children}
            </Link>
        </Button>
    );
}

function DeleteButton({
    children,
    href,
    disabled,
}: {
    children: React.ReactNode;
    href: string;
    disabled?: boolean;
}) {
    return (
        <Button
            asChild
            disabled
            variant={"destructive"}
            className="col-span-1 row-span-1 h-full text-2xl rounded-xl"
        >
            <Link href={href}>
                <Trash2 className="w-8 h-8 mr-6" />
                {children}
            </Link>
        </Button>
    );
}
