"use client";

import ReloadIcon from "@/app/_icons/reload";
import StarIcon from "@/app/_icons/star";
import TextIcon from "@/app/_icons/text";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const ImageAnalysis = () => {
  const [image, setImage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImage(previewUrl);
  };
  return (
    <div className="border">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <StarIcon />
          <p className="text-black font-bold">Image Analysis</p>
        </div>

        <Button
          className="bg-white border"
          onClick={() => {
            setImage("");
          }}
        >
          <ReloadIcon />
        </Button>
      </div>

      <div>
        <p className="text-gray-500">
          Upload a food photo, and AI will detect the ingredients.
        </p>
        {!image ? (
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-50 h-50 border"
          />
        ) : (
          <img
            src={image}
            alt="Preview"
            className="w-50 h-50 object-cover rounded"
          />
        )}
      </div>
      <div className="w-full flex justify-end">
        <Button>Generate</Button>
      </div>

      <div className="flex flex-col justify-center gap-5">
        <div className="flex gap-5">
          <TextIcon />
          <p className="font-bold">Here is the summary</p>
        </div>

        <p className="border h-40">response will generate here</p>
      </div>
    </div>
  );
};
export default ImageAnalysis;
