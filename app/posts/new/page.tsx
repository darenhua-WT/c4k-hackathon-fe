import PostForm from "./components/PostForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Page() {
    return (
        <div className="p-4 my-12 flex justify-center">
            <div className="max-w-2xl">
                <Link href="/">
                    <Button className="pl-0" variant={"link"}>
                        Back
                    </Button>
                </Link>
                <h3 className="scroll-m-20 mt-3 text-3xl font-semibold tracking-tight">
                    New Event
                </h3>
                <div className="mt-6">
                    <PostForm />
                </div>
            </div>
        </div>
    );
}
