"use client";

import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SelectDropdown({ posts }: { posts: any[] }) {
    const [selected, setSelected] = useState<any>(null);

    const getPost = (id: string) => posts.find((post) => post.id === id);

    return (
        <div className="w-[42rem] space-y-8">
            <Select onValueChange={(e) => setSelected(getPost(e))}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a post" />
                </SelectTrigger>
                <SelectContent>
                    {posts.map((post, id) => {
                        return (
                            <SelectItem key={id} value={post.id}>
                                {post.title}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>

            {selected && (
                <div>
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>{selected.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Written by {selected.author}</p>
                        </CardContent>
                    </Card>
                    <div></div>
                </div>
            )}
            {selected ? (
                <Link href={`/posts/update/${selected.id}`}>
                    <Button type="submit">Continue to Update Post</Button>
                </Link>
            ) : (
                <Button disabled type="submit">
                    Continue to Update Post
                </Button>
            )}
        </div>
    );
}
