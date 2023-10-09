import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
export const POST = async (request) => {
  try {
    const slider = await request.json();
    const newSlider = await prisma.Slider.create({
      data:slider
    });
    return NextResponse.json(newSlider);
  } catch (err) {
    return NextResponse.json({ message: "Post Error", status: 500 });
  }
};
export const GET = async () => {
  try {
    const sliders = await prisma.Slider.findMany();
    return NextResponse.json(sliders)
  } catch (err) {
    return NextResponse.json({massage:"Get Error",status:500})
  }
};