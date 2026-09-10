import { useContext } from "react";
import { NamaContext } from "../AppUseContext";

export default function Navbar() {
  const { nama } = useContext(NamaContext);

  return (
    <nav>
      <h2>
        Selamat datang, {nama}
      </h2>
    </nav>
  );
}