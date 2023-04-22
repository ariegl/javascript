import React, { useRef, useEffect, useState } from "react";
import characterData from "../../../utils/characterData.json";

//characterData - INFORMACION DE LOS PERSONAJES, COLORES , ETC.

function GridCharacter() {
  //IMAGENES CARGADAS
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  //LISTA DE REFERENCIAS DE PERSONAJES !NECESARIAS PARA COLOREAR IMAGENES
  const myRefObject = {
    rastaFace: useRef(),
    djFace: useRef(),
    gataFace: useRef(),
  }

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
      setTimeout(function(){
        setLoaded(true);
      },500)
      
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
    loaded ? (
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
    </>) : (
      <>
        <div className="flex justify-center flex-wrap content-center h-full">
          <div role="status">
              <svg aria-hidden="true" className="w-14 h-14 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
          </div>
          <h1 className="w-full text-center text-gray-700 font-bold text-xl py-4">Cargando...</h1>
        </div>
      </>
    )
  );
}

export default GridCharacter;
