import {fetchProblemsFiltered} from "@/data/data";
import {useEffect, useState} from "react";

export default function ProblemDisp(query: string, page: number) {
    const [data, setData] = useState<any>();
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchProblemsFiltered(query);
            setData(result);
        }
        fetchData();
    })
    const offset = 7 * (page - 1);
    return(
        <div className="bg-red-300 rounded p-5">
            <p className="m-2">{data?.at(offset)}</p>
            <p className="m-2">{data?.at(offset + 1)}</p>
            <p className="m-2">{data?.at(offset + 2)}</p>
            <p className="m-2">{data?.at(offset + 3)}</p>
            <p className="m-2">{data?.at(offset + 4)}</p>
            <p className="m-2">{data?.at(offset + 5)}</p>
            <p className="m-2">{data?.at(offset + 6)}</p>
        </div>
    )
}