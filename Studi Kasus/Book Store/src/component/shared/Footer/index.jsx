import { Link } from "react-router";

export default function Footer() {
    return (
        <>
            <div class="b-example-divider"></div>
            <div class="container">
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Home</Link></li>
                        <li class="nav-item"><Link to="/books" class="nav-link px-2 text-body-secondary">Book</Link></li>
                        <li class="nav-item"><Link to="/Team" class="nav-link px-2 text-body-secondary">Team</Link></li>
                        <li class="nav-item"><Link to="/Contact" class="nav-link px-2 text-body-secondary">Contact</Link></li>
                    </ul>
                    <p class="text-center text-body-secondary">&copy; 2025 Yossy Indra Kusuma</p>
                </footer>
            </div>
        </>
    );
}