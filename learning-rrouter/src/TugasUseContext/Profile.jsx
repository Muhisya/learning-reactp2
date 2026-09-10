import { useContext } from "react";
import { NamaContext } from "../AppUseContext";

export default function Profile() {
  const { nama } = useContext(NamaContext);

  return (
    <div>
      <h3>Nama Santri: {nama}</h3>
    </div>
  );
}