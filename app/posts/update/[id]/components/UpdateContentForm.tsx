"use client";

import { z } from "zod";
import { RichTextEditor } from "@/components/richtext-editor/RichTextEditor";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import axios from "axios";

const formSchema = z.object({
    title: z.string().min(1),
});

export default function UpdateContentForm({
    defaultData,
}: {
    defaultData: string;
}) {
    const [html, setHtml] = useState("");
    const [loading, setLoading] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    });

    const apiUrl = "http://localhost:5000/";

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // await createNoImagePost({ title: values.title, content: html });
        setLoading(true);
        await axios.post(`${apiUrl}/posts/no-image-post`, {
            title: values.title,
            content: html,
        });
        setLoading(false);
    }

    return (
        <div className="space-y-8">
            <div className="max-w-2xl">
                <div className="space-y-3">
                    <h5 className="text-xl font-semibold tracking-tight">
                        Post Content
                    </h5>
                    <RichTextEditor
                        defaultData={defaultData}
                        handleUpdate={(x) => setHtml(x)}
                    />
                </div>
            </div>
            <Button type="submit">Update Content</Button>
        </div>
    );
}
