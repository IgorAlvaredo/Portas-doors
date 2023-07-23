import PortaModel from "@/model/porta"
import { useState } from "react"
import Porta from "../components/Porta"
import Presente from "../components/Presente"

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))
  return (
    <div>
        <Porta Porta={p1}/>
        <Porta />
    </div>
  )
}
