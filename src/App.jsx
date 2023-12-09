import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/navbar";
import ListSkills from "./components/ListSkills";

function App() {
  const skills = [
    {
      id: 1,
      title: "React",
      imgUrl: "media/react.png",
      description: [
        "Communication entre composants via les states ou les contextes",
        "Maitrise de Hooks principaux",
        "Requêtes HTTP",
      ],
    },
    {
      id: 2,
      title: "Node/Express",
      imgUrl: "media/NodeJS.png",
      description: [
        "Création de serveurs",
        "Routers et Middlewares",
        "Communication avec mySql en utilisant mysql2",
        "Manipulation de fichiers et de streams",
      ],
    },
    {
      id: 3,
      title: "C++",
      imgUrl: "media/cpp.png",
      description: [
        "Programmation orientée-objet",
        "Gestion des erreurs",
        "Cuda et ses librairies et OpenMp",
        "Librairies (fftw, OpenCV …)",
      ],
    },
    {
      id: 4,
      imgUrl: "media/Csharp.png",
      title: "Dotnet / C#",
      description: [
        "Programmation orienté-objet",
        "Programmation parallèle et asynchrone",
        "Blazor et Maui (Les bases )",
      ],
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="app">
        <Banner />
        <ListSkills skills={skills} />
      </div>
    </div>
  );
}

export default App;
