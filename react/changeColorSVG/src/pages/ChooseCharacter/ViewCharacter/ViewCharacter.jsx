import React, { useRef } from "react";
import RastaNormal from "../../../assets/pages/chooseCharacter/viewCharacter/default_rasta.svg";

function ViewCharacter() {
  const rastaNormal = useRef(null);

  return (
    <>
      <div className="flex w-full justify-center">
        <object
          ref={rastaNormal}
          type="image/svg+xml"
          data={RastaNormal}
          width={"400px"}
          aria-label="Mi personaje"
        />
      </div>
      <div className="flex w-full justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Seleccionar
        </button>
      </div>
    </>
  );
}

export default ViewCharacter;
