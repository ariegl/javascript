import { useState } from "react";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function onChange(e) {
    const val = e.target.value;

    if(val != "") setCity(val);
    else setCity("London");
  }

  function handleSubmit(e) {
    e.preventDefault();

    onChangeCity(city);

    setCity("");
  }

  return (
    <div className="container flex justify-center flex-wrap items-center flex-row">
      <h1 className="min-w-full text-center text-gray-600 font-bold text-4xl">BUSCADOR</h1>
      <form className="w-4/5 flex justify-center" onSubmit={handleSubmit}>
        <input className="p-2 mt-5 w-3/5 outline-none" type="text" onChange={onChange}/>
        <button className="bg-gray-500 text-white font-bold p-2 mt-5" type="submit">Buscar</button>
      </form>
    </div>
  );
}
