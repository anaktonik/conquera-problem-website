"use client"
import {fetchProblems} from "@/data/data";

export default function MyButton() {
    return (
        <button onClick={fetchProblems}>Nabiyon?</button>
    )
}