import React, { useRef, useEffect, useState } from "react";
import RastaFaceIcon from "../../../assets/pages/chooseCharacter/gridCharacter/rasta_face_icon.svg";

function GridCharacter() {
  const [loadImage, setLoadImage] = useState(false);
  const [images, setImages] = useState([]);
  const rastaFace = useRef(null);
  const references = [];

  const characterData = {
    personaje: {
      dj: {
        render: {
          cabello: "cabello",
          piel: "piel",
          camisa: "camisa",
          pantalones: "pantalones",
          audifonos: "audifonos",
        },
        colors: {
          cabello: "#260f0f",
          piel: "#f1d695",
          camisa: "#4a412c",
          pantalones: "#70706e",
          audifonos: "#a33535",
        },
      },
      rasta: {
        render: {
          cabello: "cabello",
          piel: "piel",
          cinta: "cinta",
          ojos: "ojos",
        },
        colors: {
          cabello: "#260f0f",
          piel: "#f1d695",
          cinta: "#4a412c",
          ojos: "#4a412c",
        },
      },
    },
  };

  const handleChangeColor = () => {
    console.log("change");

    const personaje = rastaFace.current.contentDocument;

    for (let key in characterData.personaje.rasta.render) {
      const part = personaje.querySelectorAll(`.${key}`);

      console.log(part);

      part.forEach(function (element) {
        element.style.fill = `${
          characterData.personaje.rasta.colors[element.className.baseVal]
        }`;
      });
    }
  };

  const handleLoadImage = () => {
    setLoadImage(true);
  };

  useEffect(() => {
    //loadImage ? (console.log("CARGADO")/*, handleChangeColor()*/) : false;
    async function loadImages() {
      const svgs = import.meta.glob("../../../assets/pages/chooseCharacter/gridCharacter/*.svg");

      const loadedImages = await Promise.all(
        Object.keys(svgs).map(async (path) => {
          const svg = await svgs[path]();
          const name = svgs[path].name.replace("../../../assets/pages/chooseCharacter/gridCharacter/","").split("_");
          
          const content = svg.default;
          return { path, content}
        })
      );

      setImages(loadedImages);
      console.log("LAS REF:",references);
    };

    loadImages();

  }, []);

  return (
    <>
      <div className="grid grid-cols-12 grid-rows-3 gap-6">
        <h1 className="col-span-12 text-center font-bold text-4xl">
          Elije tu personaje
        </h1>

      {images.map(({path, content}) => (
        <div key={path} className="bg-red-300 col-span-4 flex justify-center items-center">
          <object
            key={"icon-"+path}
            type="image/svg+xml"
            data={content}
            width={"200px"}
            aria-label="Mi SVG"
            //onLoad={handleLoadImage}
            className="cursor-pointer"
          />
        </div>
      ))}


        <div className="bg-red-300 col-span-4 flex justify-center items-center">
          <object
            ref={rastaFace}
            type="image/svg+xml"
            data={RastaFaceIcon}
            width={"200px"}
            aria-label="Mi SVG"
            //onLoad={handleLoadImage}
            className="cursor-pointer"
          />
        </div>

        <button
          className="bg-blue-500 col-span-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleChangeColor}
        >
          Change color
        </button>
      </div>
    </>
  );
}

export default GridCharacter;
