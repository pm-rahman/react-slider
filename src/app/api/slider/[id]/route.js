import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma"

export const GET = async(request,{params})=>{
    try{
        const {id}=params;
        const slider = await prisma.Slider.findUnique({
            where:{id}
        });
        if(!slider){
            return NextResponse.json({message:"Get Error",status:500})
        }
        return NextResponse.json(slider);
    }
    catch(err){
        return NextResponse.json({message:"Get Error",status:500})
    }
}

export const PATCH = async(request,{params})=>{
    try{
        const {id}=params;
        const slider= await request.json()
        // const slider = await
      const updatedSlider= await prisma.Slider.update({
        where:{id},
        data:slider
      })
      if(!updatedSlider){
        return NextResponse.json({massage:"Patch Error",status:500})
      }
      return NextResponse.json(updatedSlider);
    }
    catch(err){
      return NextResponse.json({message:"Patch Error",status:500})
    }
    }