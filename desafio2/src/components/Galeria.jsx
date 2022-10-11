import "../assets/css/galeria.css";
import { useContext } from "react"
import Context from "../Context"
import Heart from './Heart';
import Container from "../layout/container";


export default function Home() {
  const { fotos, setFotos } = useContext(Context)
  const setFavorito = (id) => {
    const fotoIndex = fotos.fotoIndex((f) => f.id === id);
    fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
    setFotos([...fotos]);
  };

  return (
    <Container>
    <div className="galeria">
      {fotos.map((foto, i) => (
          <div 
          onClick={() => setFavorito(foto.id)}
          className="foto"
          style={{ backgroundImage: `url(${foto.src})` }}
          key={i}>
          <Heart filled={foto.favorito} />
          <p>{foto.desc}</p>
        </div>
      ))}
    </div>
  </Container>
  )
}