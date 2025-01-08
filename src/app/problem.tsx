import {Problem} from "@/data/definitions";
import MyButton from "@/app/button";

export default function ProblemDisp(problem: Problem) {
    return(
        <div className="bg-red-300 rounded p-5">
            <p className="m-2">{problem.problem}</p>
            <p className="m-2 text-red-500">{problem.time}</p>
            <p>{problem.solution != null ? problem.solution : ""}</p>
            <MyButton/>
        </div>
    )
}