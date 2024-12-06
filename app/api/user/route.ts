import { getServerSession } from "next-auth";

import { NextResponse } from "next/server";
export const GET= async ()=>{
    return NextResponse.json({
        message:"hello"
    })

}