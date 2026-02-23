import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="hotel-header">
        <div className="logo">Novo</div>
            <nav>
            <a href="#rooms">Habitaciones</a>
            <a href="#about">Nosotros</a>
            <a href="#contact">Contactos</a>
        </nav>
    </header>
  )
}
