import { Link, useNavigate, useParams } from "react-router"

import santri from "../data/santri"

export default function DetailSantri() {
    const { id } = useParams()
    const navigate = useNavigate()

    const santriId = Number(id)

    const dataSantri = santri.find(
        (item) => item.id === santriId
    )

    if (!dataSantri) {
        return (
            <section className="card not-found-card">
                <h2>Santri Tidak Ditemukan</h2>

                <p>
                    Santri dengan ID {id} tidak tersedia.
                </p>

                <Link
                    to="/santri"
                    className="button button-primary"
                >
                    Kembali ke Daftar
                </Link>
            </section>
        )
    }

    return (
        <section className="card detail-card">
            <h2>Detail Santri</h2>

            <div className="detail-info">
                <div className="detail-row">
                    <p>ID: {dataSantri.id}</p>
                </div>

                <div className="detail-row">
                    <p>Nama: {dataSantri.nama}</p>
                </div>

                <div className="detail-row">
                    <p>Kelas: {dataSantri.kelas}</p>
                </div>
            </div>

            <button onClick={() => navigate("/santri")} className="button button-secondary">
                Kembali
            </button>
        </section>
    )
}