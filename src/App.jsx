import React from "react";
import Cards from "./Components/Cards";

function App() {
  const data = {
    squadName: "Super Hero Squad",
    homeTown: "Metro City",
    formed: 2016,
    secretBase: "Super tower",
    active: true,
    members: [
      {
        name: "Molecule Man",
        age: 29,
        secretIdentity: "Dan Jukes",
        powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
      },
      {
        name: "Madame Uppercut",
        age: 39,
        secretIdentity: "Jane Wilson",
        powers: [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes",
        ],
      },
      {
        name: "Eternal Flame",
        age: 1000000,
        secretIdentity: "Unknown",
        powers: [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel",
        ],
      },
    ],
  };

  return (
    <div className="">
      <div className="h-screen bg-cyan-200">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
          <h1 className="font-bold text-3xl py-4 text-center">
            {data.squadName}
          </h1>
          <div className="w-full border-2 border-gray-700 border rounded-lg p-5 text-center">
            <span className="block text-sm text-left font-medium">
              Ciudad: {data.homeTown}
            </span>
            <span className="block text-sm text-left font-medium">
              Base Secreta: {data.secretBase}
            </span>
            <span className="block text-sm text-left font-medium">
              Año de Formación: {data.formed}
            </span>
          </div>
          <h1 className="font-bold text-3xl py-4 text-center">Miembros</h1>
          <Cards members={data.members} />
        </div>
      </div>
    </div>
  );
}

export default App;
