import { Link } from "react-router"

export default function NotFound() {
    return (
        <section className="card not-found-card">
            <h2 className="error-code">404</h2>

            <p>
                Halaman tidak ditemukan.
            </p>

            <Link to="/" className="button button-primary">
                Kembali ke Dashboard
            </Link>
        </section>
    )
}