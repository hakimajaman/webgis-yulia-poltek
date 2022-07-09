import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [urlPath, setUrlPath] = useState("");

  useEffect(() => {
    setUrlPath(window.location.pathname);
  }, []);

  return (
    <div
      className={`navbar-layout navbar sidebar ${
        openNavbar ? "collapse-navbar" : "not-collapse-navbar"
      }`}
    >
      <h1>Webgis.</h1>
      <h3>Penyebaran halte pulau Batam</h3>
      <button onClick={() => setOpenNavbar(!openNavbar)}>Menu</button>
      <nav>
        <a href="/" className={`${urlPath === "/" ? "nav-active" : ""}`}>
          PETA PENYEBARAN
        </a>
        <a
          href="/informasi-koridor"
          className={`${urlPath === "/informasi-koridor" ? "nav-active" : ""}`}
        >
          INFORMASI KORIDOR
        </a>
        <a
          href="/jadwal-keberangkatan"
          className={`${
            urlPath === "/jadwal-keberangkatan" ? "nav-active" : ""
          }`}
        >
          JADWAL KEBERANGKATAN
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
