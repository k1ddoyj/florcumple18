import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom"; 
import "../App.css";

function Home() {
  const navigate = useNavigate(); 

  return (
    <div className="app">
      <div className="text-container">
        <div className="text">
          <Typewriter
            options={{
              strings: ["FELIZ CUMPLE FLOR🎂"],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </div>
        <button className="btn" onClick={() => navigate("/letter")}>
          toca este botón si pensás que arturo es inteligente
        </button>
      </div>
    </div>
  );
}

export default Home;
