import { sql } from '@vercel/postgres'
import { Problem } from "@/data/definitions";

export async function fetchProblems() {
    try {
        const data = await sql.query<Problem>(`SELECT * FROM cqnnect-data`);
        console.log(data);
        return data.rows;
    } catch (error) {
        console.error(error);
    }
}