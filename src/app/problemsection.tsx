import ProblemDisp from "@/app/problem";

export default function ProblemSection() {
    return(
        <div className="flex flex-col justify-center items-center bg-white h-screen">
            {ProblemDisp({uuid: "1", problem: "Naber", poser: "Melih", time: Date.now(), solution: "Okey"})}
        </div>
    )
}