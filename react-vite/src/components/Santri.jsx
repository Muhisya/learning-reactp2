// Santri.jsx
import React from 'react';

const Santri = ({ nama, kelas, hobi, aktif }) => {
  return (
    <React.Fragment>
      <div className="bg-white px-15 py-6 rounded-2xl border border-neutral-100 shadow-lg max-w-lg mb-8 mx-auto font-sans">
        <div className="mb-8">
          <h2 className="text-3xl font-normal text-neutral-900 leading-snug">
            Santri Profile Card
          </h2>
          <p className="text-base text-neutral-500 font-light mt-2">
            React Props & Conditional Rendering Task
          </p>
        </div>
        <div className="space-y-5 text-lg text-neutral-800"> 
          <p><span className="font-bold">Nama:</span> {nama}</p>
          <p><span className="font-bold">Kelas:</span> {kelas}</p>
          <p><span className="font-bold">Hobi:</span> {hobi}</p>
          <div className="flex items-center gap-3">
            <span className="font-bold">Status:</span> 
            {aktif ? (
              <span className="bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-sm font-medium border border-teal-100">
                Aktif
              </span>
            ) : (
              <span className="bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-medium border border-red-100">
                Tidak Aktif
              </span>
            )}
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default Santri;