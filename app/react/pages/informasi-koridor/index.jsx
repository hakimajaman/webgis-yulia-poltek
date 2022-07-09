import "../../../assets/styles/global.scss";
import React from "react";
import MainLayout from "../../layouts/main";
import Dropdown from "../../components/Dropdown";
import Koridor from "../../components/Koridor";

const InformasiKoridor = () => {
  return (
    <MainLayout>
      <Dropdown>
        <Koridor />
      </Dropdown>
      <Dropdown>
        <Koridor />
      </Dropdown>
      <Dropdown>
        <Koridor />
      </Dropdown>
      <Dropdown>
        <Koridor />
      </Dropdown>
    </MainLayout>
  );
};

export default InformasiKoridor;
