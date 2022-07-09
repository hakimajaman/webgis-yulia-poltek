import "../../../assets/styles/global.scss";
import React from "react";
import MainLayout from "../../layouts/main";
import Dropdown from "../../components/Dropdown";
import TimeKoridor from "../../components/TimeKoridor";

const JadwalKeberangkatan = () => {
  return (
    <MainLayout>
      <Dropdown>
        <TimeKoridor />
      </Dropdown>
    </MainLayout>
  );
};

export default JadwalKeberangkatan;
