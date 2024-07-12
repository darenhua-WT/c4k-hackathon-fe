import { LoaderCircle } from "lucide-react";

export default function Loading() {
    return (
        <div className="w-screen min-h-screen flex items-center justify-center">
            <LoaderCircle className="animate-spin w-12 h-12 " />
        </div>
    );
}
