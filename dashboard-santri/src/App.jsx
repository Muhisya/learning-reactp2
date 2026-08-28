import { Route, Routes } from "react-router"

import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Santri from "./pages/Santri"
import DetailSantri from "./pages/DetailSantri"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

export default function App() {
    return (
        <>
            <Navbar />
            <main className="main-content">
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={<Dashboard />}
                        />

                        <Route
                            path="/santri"
                            element={<Santri />}
                        />

                        <Route
                            path="/santri/:id"
                            element={<DetailSantri />}
                        />

                        <Route
                            path="/about"
                            element={<About />}
                        />

                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                    </Routes>
                </div>
            </main>
        </>
    )
}