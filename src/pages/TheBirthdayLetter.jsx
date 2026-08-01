import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>Hola mi amor, feliz legalidad!</p>
                    <p>
                        Espero que la estés pasando muy lindo en el Caribe. No sabía muy bien que regalarte, buscando regalos en tiktok me acordé de que podía progrmar uno, 
                        así que acá estoy haciendo esto.
                    </p>
                    <p>
                    Creo que este ni ningún regalo pueden llegar a reflejar con plenitud lo que te adoro y lo agradecida que estoy de que seas mi amiga,
                    sos una persona maravilosa que me alegra el día con solo acordarme de que estás viva.
                    </p>
                    <p>
                        Espero que te guste esta pavadita, cuando vuelvas te compro un alfajor terrabusi.
                    </p>
                    <p style={{ textAlign: "right" }}>con un re amor,</p>
                    <p style={{ textAlign: "right" }}>Agostinita</p>
                </div>
            </div>

            <div className="title">
                <p>algunas cositas para decorar</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/thanks-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">louis</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/random.jpeg")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">la mejor foto</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/happy-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">5sos</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/pito.jpeg")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sí</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                ahí terminó el regalo !
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
