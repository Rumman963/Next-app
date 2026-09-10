import { NextRequest, NextResponse } from "next/server";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";


const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prismaClient = new PrismaClient({ adapter });


export async function POST(req:NextRequest){


    const data = await req.json();

    await prismaClient.user.create({
        data:{
          username:data.username,
          password:data.password
        }
    });


    return NextResponse.json({

      message:"signup successfull"
})

  }
