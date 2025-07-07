import { Appbar } from "../components/Appbar";
import { TextEditor } from "../components/TextEditor";
export const Publish = () => {
    return <div>
        <Appbar />
        <div className="min-h-screen bg-white">
            <TextEditor />
        </div>     
    </div>
}
