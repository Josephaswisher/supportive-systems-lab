import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not configured" },
        { status: 500 }
      );
    }

    const { prompt, aspectRatio, imageSize } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-3-pro-image-preview",
      contents: prompt,
      config: {
        responseModalities: ["IMAGE"],
        imageConfig: {
          aspectRatio: aspectRatio || "1:1",
          ...(imageSize ? { imageSize } : {}),
        },
      },
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts || parts.length === 0) {
      return NextResponse.json(
        { error: "No content generated" },
        { status: 500 }
      );
    }

    const imagePart = parts.find(
      (p: { inlineData?: unknown }) => p.inlineData
    );
    if (!imagePart?.inlineData) {
      const textPart = parts.find((p: { text?: string }) => p.text) as
        | { text: string }
        | undefined;
      return NextResponse.json(
        { error: textPart?.text || "No image in response" },
        { status: 500 }
      );
    }

    const inlineData = imagePart.inlineData as {
      data: string;
      mimeType: string;
    };

    return NextResponse.json({
      image: inlineData.data,
      mimeType: inlineData.mimeType,
    });
  } catch (err: unknown) {
    console.error("Image generation error:", err);
    const message =
      err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
