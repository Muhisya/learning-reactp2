import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
// bisa di rename pake "as" seperti {as Feet}
import Card from './components/Card'
import ProfilPenggunna from './components/ProfilPenggunna'
import React from 'react'
import Santri from './components/Santri'

const App = () => {
  const santriList = [
    {
      nama: "Ahmad",
      kelas: "XI",
      hobi: "Coding",
      aktif: true,
    },
    {
      nama: "Ali",
      kelas: "XII",
      hobi: "Membaca",
      aktif: false,
    },
    {
      nama: "Umar",
      kelas: "X",
      hobi: "Futsal",
      aktif: true,
    },
  ];

  return (
    <React.Fragment>
      <div className="min-h-screen bg-neutral-50 p-8">
        <h1 className="text-4xl font-bold text-center text-neutral-800 mb-12">
          Daftar Santri Dashboard
        </h1>
        <div className='grid grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {santriList.map((santriData, index) => (
          <Santri key={index} nama={santriData.nama} kelas={santriData.kelas} hobi={santriData.hobi} aktif={santriData.aktif}
          />
        ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;