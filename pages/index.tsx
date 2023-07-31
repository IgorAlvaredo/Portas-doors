import PortaModel from "../model/porta"
import { useState } from "react"
import Porta from "../components/Porta"
import Presente from "../components/Presente"
import { atualizarPortas, criarPortas } from "../functions/portas"

export default function Home() {
  return (
    <div style={{display:'flex'}}>
        <h1>Formulario de Inicio</h1>
    </div>
  )
}
