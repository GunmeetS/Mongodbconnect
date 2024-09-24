import { NextResponse } from "next/server";
import connectionToDatabase from "../../../lib/mongoose";
import User from "../../../models/User";


export async function POST(request) {
    try {
        await connectionToDatabase()
        const {name,email}= await request.json()
        const newUser= new User({name,email})
        await newUser.save()
        return NextResponse.json(newUser,{status:201})
    } catch (error) {
        console.log(error);
    }
}

