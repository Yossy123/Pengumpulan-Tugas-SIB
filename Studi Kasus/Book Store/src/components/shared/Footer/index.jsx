import React from 'react';
// 1. Import komponen Link dari react-router-dom
import { Link } from 'react-router';

// 2. Hapus prop { setActivePage } karena sudah tidak digunakan
export function Footer() {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                {/* 3. Ganti setiap <a> dengan <Link> dan gunakan prop 'to' untuk menentukan URL tujuan */}
                <li className="nav-item">
                    <Link to="/" className="nav-link px-2 text-body-secondary">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/books" className="nav-link px-2 text-body-secondary">Book</Link>
                </li>
                <li className="nav-item">
                    <Link to="/team" className="nav-link px-2 text-body-secondary">Team</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link px-2 text-body-secondary">Contact</Link>
                </li>
            </ul>
            <p className="text-center text-body-secondary">&copy; 2025 Yossy Indra Kusuma</p>
        </footer>
    );
}