import { RichTextEditor } from "@/components/richtext-editor/RichTextEditor";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import UpdateForm from "./components/UpdateForm";
import UpdateContentForm from "./components/UpdateContentForm";
import axios from "axios";

export default async function Page({ params }: { params: any }) {
    const apiUrl = "http://localhost:5000/";
    const post = await axios.get(`${apiUrl}/posts/${params.id}`);
    console.log(post.data);

    return (
        <div className="p-4 my-12 flex justify-center">
            <div className="max-w-2xl">
                <Link href="/">
                    <Button className="pl-0" variant={"link"}>
                        Back
                    </Button>
                </Link>
                <h3 className="scroll-m-20 mt-3 text-3xl font-semibold tracking-tight">
                    Update Event
                </h3>
                <div className="mt-6 space-y-12">
                    <UpdateForm defaultData={post.data.title} />
                    <UpdateContentForm defaultData={post.data.content} />
                </div>
            </div>
        </div>
    );
}
