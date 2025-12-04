import { NextRequest, NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";
import { error } from "console";

const HF_TOKEN = process.env.HF_TOKEN!;
const client = new InferenceClient(HF_TOKEN);

export async function POST(req: NextRequest) {
  try {
    const {prompt} = await req.json()

    if (!prompt) return NextResponse.json({error: "Missing Prompt"}, {status: 400})

    const image = await client.textToImage({
      model: "stabilityai/stable-diffusion-xl-base-1.0",
      inputs: prompt,
    });

    return new NextResponse(image, {
      headers: { "Content-Type": "image/png" },
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Error" },
      { status: 500 }
    );
  }
}
