import ImageAnalysis from "./_components/imageAnalysis/ImageAnalysis";
import Nav from "./_components/nav/Nav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IngredientRecognition from "./_components/ingredientRecognition/IngredientRecognition";
import ImageCreator from "./_components/imageCreator/ImageCreator";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white h-screen">
      <Nav />
      <Tabs defaultValue="imageAnalysis" className="h-[900] w-[600] pt-10 ">
        <TabsList>
          <TabsTrigger value="imageAnalysis">Image analysis</TabsTrigger>
          <TabsTrigger value="ingredientRecognition">
            Ingredient recognition
          </TabsTrigger>
          <TabsTrigger value="imageCreator">Image creator</TabsTrigger>
        </TabsList>
        <TabsContent value="imageAnalysis">
          <ImageAnalysis />
        </TabsContent>
        <TabsContent value="ingredientRecognition">
          <IngredientRecognition />
        </TabsContent>
        <TabsContent value="imageCreator">
          <ImageCreator />
        </TabsContent>
      </Tabs>
    </div>
  );
}
