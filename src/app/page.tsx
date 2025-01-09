// import Image from "next/image";
import Topnav from "@/app/topnav";
import ProblemSubmit from "@/app/problemsubmit";

export default function Home() {
    return (
        <>
            <div className="bg-center bg-cover bg-bizim-cocuklar backdrop-blur-[5px] to-black min-h-screen">
                <Topnav/>
                <div className="backdrop-blur flex items-center justify-items-center justify-center h-[calc(100vh-3rem)] font-[family-name:var(--font-geist-sans)] bg-black bg-opacity-60">
                    <ProblemSubmit/>
                </div>
            </div>
            <footer
                className="row-start-3 flex flex-wrap items-center justify-center">
                Footer
            </footer>
        </>

    );
}
