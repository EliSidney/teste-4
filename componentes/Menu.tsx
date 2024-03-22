import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">Home</a>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/livroLista">
                                <a className="nav-link">Lista de Livros</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/livroDados">
                                <a className="nav-link">Dados do Livro</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
