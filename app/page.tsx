"use client"
import { Eye, RotateCw } from "lucide-react";
import Image from "next/image";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import { useState } from "react";
import { PersonalDetails } from "@/type";
import { personalDetailsPreset } from "@/presets";
import CVPreview from "./components/CVPreview";

export default function Home() {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(personalDetailsPreset)
  const [file, setFile] = useState<File | null>(null)
  const [theme, setTheme] = useState<string>("cupcake")
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
    "caramellatte",
    "abyss",
    "sylk",
  ]

  return (
    <div>
      <div className="hidden lg:block">
        <section className="flex items-center h-screen">
          <div className="w-1/3 h-full p-10 bg-base-200 scrollable no-scrolbar">
            <div className="mb-4 flex justify-between item-center">
              <h1 className="text-2xl font-bold italic">
                CV
                <span className="text-primary">Builder</span>
              </h1>
              <button className="btn btn-primary">
                Prévisualiser
                <Eye className="w-4"/>
              </button>
            </div>
            <div className="flex flex-col gap-6 rounded-lg">
              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">Qui êtes vous ?</h1>
                <button className="btn btn-primary btn-sm">
                  <RotateCw className="w-4"/>
                </button>
              </div>
              <PersonalDetailsForm
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
                setFile={setFile}
              />
            </div>
          </div>
          <div className="w-2/3 h-full bg-base-100 bg-[url('/file.svg')] bg-cover bg-center scrollable-preview">
            <div className="flex justify-center items-center">
              <CVPreview
                personalDetails={personalDetails}
                file={file}
                theme={theme}
              />
            </div>
          </div>
        </section>
      </div>
      <div className="lg:hidden">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">Désolé, le CV Builder est uniquement
              accessible sur ordinateur.</h1>
                 <Image
                    src="/sad-sorry.gif"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="mx-auto my-6"
                  />
              <p className="py-6">
                Pour créer et personnaliser votre CV, veuillez utiliser un ordinateur. Nous vous
                remercions de votre compréhension.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
