import { NextRequest, NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const HF_TOKEN = process.env.HF_TOKEN!;
const client = new InferenceClient(HF_TOKEN);

export async function POST() {
  try {
    const image = await client.textToImage({
      provider: "fal-ai",
      model: "Tongyi-MAI/Z-Image-Turbo",
      inputs: "Astronaut riding a horse",
      parameters: { num_inference_steps: 5 },
    });

    return new NextResponse(image, {
      headers: { "Content-Type": "image/png" }
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Error" },
      { status: 500 }
    );
  }
}
