import "../../assets/styles/global.scss";
import React from "react";

const koridor = [
  {
    name: "Halte Taman Palapa",
    link: "/halte-taman-palapa",
  },
  {
    name: "Halte Taman Palapa",
    link: "/halte-taman-palapa",
  },
  {
    name: "Halte Taman Palapa",
    link: "/halte-taman-palapa",
  },
  {
    name: "Halte Taman Palapa",
    link: "/halte-taman-palapa",
  },
  {
    name: "Halte Taman Palapa",
    link: "/halte-taman-palapa",
  },
];

const Koridor = () => {
  return (
    <>
      {koridor.map((x, index) => {
        return (
          <div className="koridor">
            <div className="koridor_left">
              <div className="bullet"></div>
              {index === koridor.length - 1 ? (
                <></>
              ) : (
                <div className="vertical-line"></div>
              )}
            </div>
            <div
              className={`koridor_right ${
                index === koridor.length - 1 ? "" : "koridor_underline"
              }`}
            >
              <p>Halte Taman Palapa</p>
              <a href="/">JADWAL KEDATANGAN</a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Koridor;
