import { Link } from "react-router"
import santri from "../data/santri"

export default function Santri() {
    return (
        <section>
            <div className="page-heading">
                <h2>Daftar Santri</h2>

                <p>
                    Pilih salah satu santri untuk melihat detail.
                </p>
            </div>

            <div className="santri-list">
                {santri.map((item) => (
                    <div className="santri-card" key={item.id}>
                        <div>
                            <h3>{item.nama}</h3>

                            <p>
                                Kelas {item.kelas}
                            </p>
                        </div>

                        <Link to={`/santri/${item.id}`} className="button button-primary">
                            Detail
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}