import { createContext, useState, useContext } from "react";
import Navbar from "./TugasUseContext/Navbar";
import Profile from "./TugasUseContext/Profile";

const NamaContext = createContext();

export default function AppUseContext() {
  const [nama, setNama] = useState("Fulan");

  return (
    <NamaContext.Provider value={{ nama, setNama }}>
      <div>
        <Navbar />
        <Profile />
      </div>
    </NamaContext.Provider>
  );
}
export { NamaContext };