import React, { useRef, useEffect, useState } from "react";
import CONFIG from "@/utils/config.json";

function GridCharacter() {
  //IMAGENES CARGADAS
  const [images, setImages] = useState([]);

  //LISTA DE REFERENCIAS DE PERSONAJES !NECESARIAS PARA COLOREAR IMAGENES
  const myRefObject = {
    rastaFace: useRef(),
    djFace: useRef(),
    gataFace: useRef(),
  }

  //INFORMACION DE LOS PERSONAJES, COLORES , ETC.
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
          cabello: "gray",
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
      gata: {
        render: {
          cabello: "cabello",
          piel: "piel",
          orejas: "orejas",
          cuello: "cuello",
          botonGrande: "botonGrande",
          botonChico: "botonChico"
        },
        colors: {
          cabello: "red",
          piel: "#ECDEC2",
          orejas: "pink",
          cuello: "pink",
          botonGrande: "white",
          botonChico: "red",
        },
      },
    },
  };

  useEffect(() => {
    //ESTA FUNCION CARGA LOS PERSONAJES DEL GRIDVIEW DONDE SE ELIGEN
    async function loaderCharacters() {
      async function loadImages() {
        const svgs = import.meta.glob("../../../assets/pages/chooseCharacter/gridCharacter/*.svg");
  
        const loadedImages = await Promise.all(
          Object.keys(svgs).map(async (path) => {
            const svg = await svgs[path]();
            const nameSplit = svgs[path].name.replace("../../../assets/pages/chooseCharacter/gridCharacter/","").split("_");
            const name = nameSplit[0];
            const content = svg.default;
            return { path, content, name}
          })
        );
  
        setImages(loadedImages);
      };

      await loadImages();
      //console.log("TERMINARON DE CARGAR LOS PERSONAJES");
    }

    loaderCharacters();

  }, []);

  //ESTA FUNCION ESTA ENCARGADA DE PINTAR LAS IMAGENES UNA VEZ QUE YA HAYAN CARGADO
  const handleLoadImage = (event) => {
    console.log("CARGADO:",event.target.id);

    let dataCharacter = event.target.id.split("_");
    let characterLoaded = dataCharacter[0]+dataCharacter[1];
    let characterName = dataCharacter[0];

    async function paintElement (characterName,characterLoaded) {
      for(let key in characterData.personaje[characterName].render){
        const personaje = await myRefObject[characterName+"Face"].current.contentDocument;

        const part =  await personaje.querySelectorAll(`.${key}`);

        part.forEach(function (element) {
          element.style.fill = `${
            characterData.personaje[characterName].colors[element.className.baseVal]
          }`;
        });
      }
    }

    paintElement(characterName,characterLoaded);
  }

  //CUANDO EL USUARIO SELECCIONE UN PERSONAJE
  const handleSelectCharacter = (event) => {
    console.log("CLICK:",event.target.id);
  }

  //UTILS
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div className="grid grid-cols-12 grid-rows-2">
        <h1 className="col-span-12 text-center font-bold text-4xl">
          Elige tu personaje
        </h1>

      {images.map(({path, content, name}) => (
        <div key={path} className="col-span-4 flex justify-center flex-wrap">
          <div id={"select_"+name} style={{width: '190px', height: '190px'}} className="cursor-pointer bg-gray-300 transition-transform transition-colors duration-300 rounded-full  flex justify-center items-center flex-wrap hover:bg-yellow-100 hover:border-solid hover:border-yellow-500 hover:border-4 hover:scale-105" onClick={handleSelectCharacter}>
            <object
              id={name+"_face"}
              ref={myRefObject[name+"Face"]}
              key={"icon-"+path}
              type="image/svg+xml"
              data={content}
              width={"150px"}
              aria-label="Mi SVG"
              onLoad={handleLoadImage}
              className="pointer-events-none"
            />
          </div>
          <h1 className="w-full text-center font-bold pointer-events-none py-4 text-2xl">{capitalizeFirstLetter(name)}</h1>
        </div>
      ))}
      </div>
    </>
  );
}

export default GridCharacter;
