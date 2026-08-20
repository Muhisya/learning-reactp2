import { useState } from "react";
import zenthoriaImg from "./zenthoria.jpg"; 

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    
    console.log("Email Address:", email);
    console.log("Username:", username);
    console.log("Password:", password);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  }

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[1.2fr_1fr] bg-white p-4 md:p-8 gap-8 items-center">
      <div
        className="relative hidden md:flex flex-col justify-end p-12 aspect-[4/5] w-full justify-self-center rounded-3xl bg-cover bg-center overflow-hidden min-h-[600px]"
        style={{ backgroundImage: `url(${zenthoriaImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
        
        <div className="relative z-10 text-white">
          <h1 className="text-3xl font-semibold mb-1">Pondok Tafizh Plus Abudzar</h1>
          <p className="text-sm opacity-90 font-light">Hafizh Qur'an Mahir IT</p>
        </div>
      </div>

      <div className="flex flex-col justify-center px-4 py-8 md:px-12 lg:px-20 w-full max-w-lg mx-auto">
        {submitted ? (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-blue-900 text-white">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14.5l5.5 5.5L22 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-slate-900">Registration Complete</h2>
            <p className="text-sm text-slate-600">Welcome, {username}. Your account has been initialized.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <p className="text-sm text-slate-600">Welcome to</p>
              <h2 className="text-lg font-semibold text-slate-800">Pondok Tafizh Plus Abudzar</h2>
            </div>

            <div className="flex bg-slate-200/80 p-1 rounded-full max-w-[420px] mx-auto mb-6 w-full">
              <button type="button" className="flex-1 py-3 rounded-full text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
                Log in
              </button>
              <button type="button" className="flex-1 py-3 rounded-full text-sm font-medium bg-blue-950 text-white shadow-sm">
                Sign up
              </button>
            </div>

            <p className="text-xs text-center text-slate-600 leading-relaxed mb-8 max-w-md mx-auto">
              Pondok Tahfiz Plus IT Abu Dzar adalah sekolah swasta bermanhaj Salaf yang berada di bawah naungan Yayasan Abu Dzar dengan program unggulan Al-Qur'an dan Ilmu IT serta mendapatkan ijazah yang diakui oleh pemerintah Indonesia.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5 pl-1">
                  Email Address
                </label>
                <input type="email" value={email} placeholder="Enter your Email Address" onChange={(e) => setEmail(e.target.value)} className="w-full rounded-full px-5 py-3 text-sm outline-none border border-blue-900/40 bg-white text-slate-900 placeholder:text-slate-300 focus:border-blue-950 focus:ring-1 focus:ring-blue-950"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5 pl-1">
                  Username
                </label>
                <input type="text" value={username} placeholder="Enter your User name" onChange={(e) => setUsername(e.target.value)} className="w-full rounded-full px-5 py-3 text-sm outline-none border border-blue-900/40 bg-white text-slate-900 placeholder:text-slate-300 focus:border-blue-950 focus:ring-1 focus:ring-blue-950"/>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5 pl-1">
                  Password
                </label>
                <div className="relative">
                  <input type="password" value={password} placeholder="Enter your Password" autoComplete="new-password" onChange={(e) => setPassword(e.target.value)} className="w-full rounded-full px-5 py-3 pr-12 text-sm outline-none border border-blue-900/40 bg-white text-slate-900 placeholder:text-slate-300 focus:border-blue-950 focus:ring-1 focus:ring-blue-950"/>
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button type="submit" disabled={loading} className="w-full sm:w-auto min-w-[160px] rounded-full py-3 px-8 text-sm font-medium transition-all bg-blue-950 text-white hover:bg-blue-900 disabled:opacity-70 disabled:cursor-not-allowed">
                  {loading ? "Registering..." : "Register"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}