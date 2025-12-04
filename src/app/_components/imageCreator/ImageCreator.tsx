"use client";

import ImageIcon from "@/app/_icons/image";
import ReloadIcon from "@/app/_icons/reload";
import StarIcon from "@/app/_icons/star";
import TextIcon from "@/app/_icons/text";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const ImageCreator = () => {
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    const result = await fetch("api/image-creation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });
    const data = await result.json();
    console.log(data)

    setIsGenerating(false)
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <StarIcon />
          <p className="text-black font-bold">Food Image Creator</p>
        </div>

        <Button
          className="bg-white border"
          onClick={() => {
            setInput("");
          }}
        >
          <ReloadIcon />
        </Button>
      </div>

      <div>
        <p className="text-gray-500">
          What food image do you want? Describe it briefly.
        </p>
        <textarea
          className="w-full h-50 border p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-end">
        <Button onClick={handleGenerate}>Generate</Button>
      </div>

      <div className="flex flex-col justify-center gap-5">
        <div className="flex gap-5">
          <ImageIcon />
          <p className="font-bold">Result</p>
        </div>

        <p className="border h-40">
          First, enter your description to generate an image.
        </p>
      </div>
    </div>
  );
};
export default ImageCreator;
