import { useContext } from "react";
import Context from "../Context"
import galeria from"../assets/css/galeria.css";

export default function Favoritos(){
    const { fotos, setFotos } = useContext(Context);
    const deleteFavorito = (id)=>{
        const fotoIndex = fotos.findIndex ((f)=> f.id ===id);
        //fotos.splice(fotoIndex,1);
        fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
        setFotos([...fotos]);
    };

    return (
        <div>
            <h1 className="text-center text-[#43a047] text-4xl mt-5 font-semibold">Fotos favoritas</h1>
            <div className="p-3 galeria grid-cols-4">
                {fotos
                 .filter((foto)=>foto.favorito)
                 .map((foto, i)=>(
                    <img src={foto.src} alt="" onClick={()=>deleteFavorito(foto.id)} key={i}/>
                 ))
                }
            </div>
        </div>
    )
}