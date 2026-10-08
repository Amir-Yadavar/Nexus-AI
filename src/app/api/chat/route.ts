import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { messages } = body ;

    

    const completion = await client.chat.completions.create({
      model: "openrouter/free",
   messages
    });
    return NextResponse.json({
      success: true,
      message: completion.choices[0]?.message?.content,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, status: 500 });
  }
}
