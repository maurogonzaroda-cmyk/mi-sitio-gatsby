import React from "react"

const Header = () => {
  return (
    <header>
      <h1>Mi sitio Gatsby</h1>

      <nav>
        <a href="/">Inicio</a>
        {" | "}
        <a href="/contacto">Contacto</a>
      </nav>
    </header>
  )
}

export default Header