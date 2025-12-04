"use client";

import ReloadIcon from "@/app/_icons/reload";
import StarIcon from "@/app/_icons/star";
import TextIcon from "@/app/_icons/text";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const IngredientRecognition = () => {
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInput = () => {};

  const handleGenerate = async () => {
    // setIsGenerating(true);

    // const form = new FormData();

    // form.append("image", image);

    // const result = await fetch("api/object-detection", {
    //   method: "POST",
    //   body: form,
    // });

    // console.log(result.json());
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <StarIcon />
          <p className="text-black font-bold">Ingredient Recognition</p>
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
          Describe the food, and AI will detect the ingredients.
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
          <TextIcon />
          <p className="font-bold">Identified Ingredients</p>
        </div>

        <p className="border h-40">response will generate here</p>
      </div>
    </div>
  );
};
export default IngredientRecognition;
