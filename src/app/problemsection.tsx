'use client'

import ProblemDisp from "@/app/problemdisp";
import {useState} from "react";

export default function ProblemSection() {
    return(
        <div className="flex flex-col justify-center items-center bg-white h-screen">

            {ProblemDisp("wise", 1)}
        </div>
    )
}