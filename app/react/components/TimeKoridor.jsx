import "../../assets/styles/global.scss";
import React from "react";

const TimeKoridor = () => {
  return (
    <div className="time-koridor">
      <table>
        <tr className="time-koridor_table-border">
          <th>Hari</th>
          <th>Jam Operasi</th>
          <th>Frekuensi</th>
        </tr>
        <tr className="time-koridor_table-border">
          <td>Senin</td>
          <td>06:00 - 20:00</td>
          <td>15 Menit</td>
        </tr>
        <tr>
          <td>Senin</td>
          <td>06:00 - 20:00</td>
          <td>15 Menit</td>
        </tr>
      </table>
    </div>
  );
};

export default TimeKoridor;
