import { NextRequest, NextResponse } from "next/server"
import prismaClient from "@/app/lib/db"


export async function POST(req:NextRequest){
  try {
    const data = await req.json();

    await prismaClient.user.create({
      data: {
        username: data.username,
        password: data.password
      }
    });

    return NextResponse.json({
      message: "signup successful"
    });
  } catch (error) {
    console.error("Signup error", error);

    return NextResponse.json(
      { message: "Unable to create account" },
      { status: 500 }
    );
  }
}





