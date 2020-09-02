import React from "react";

export const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="navbar-brand">
            Github поиск
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a href="/" className="nav-link">Главная</a>
            </li>
            <li className="nav-item">
                <a href="/about" className="nav-link">Информация</a>
            </li>
        </ul>
    </nav>
)