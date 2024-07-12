import { RichTextEditor } from "@/components/richtext-editor/RichTextEditor";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import UpdateForm from "./[id]/components/UpdateForm";
import UpdateContentForm from "./[id]/components/UpdateContentForm";
import SelectDropdown from "./components/SelectDropdown";
import axios from "axios";

export default async function Page() {
    const apiUrl = "http://localhost:5000/";
    const posts = await axios.get(`${apiUrl}/posts`);
    console.log(posts.data);
    return (
        <div className="p-4 my-12 flex justify-center">
            <div className="max-w-2xl">
                <Link href="/">
                    <Button className="pl-0" variant={"link"}>
                        Back
                    </Button>
                </Link>
                <h3 className="scroll-m-20 mt-3 text-3xl font-semibold tracking-tight">
                    Update Post
                </h3>
                <div className="mt-6 space-y-12">
                    <SelectDropdown posts={posts.data} />
                </div>
            </div>
        </div>
    );
}
