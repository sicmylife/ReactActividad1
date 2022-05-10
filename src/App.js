import imagen0 from './images/rey_atanagildo.png';
import imagen1 from './images/rey_leogivildo.png';
import imagen2 from './images/rey_sisebuto.png';
import rey from './images/rey_incognito.png';
import './miCss.css';


function App() {
  let nombres=["Atanagildo","Leogivildo", "Sisebuto"];
const cambiarTexto=(e)=>{
  if(e.target.innerHTML=="Visto"){
    e.target.innerHTML="";
  }else {
    e.target.innerHTML="Visto"

  }
;
}

const cambiarImagen=(e)=>{
  if(e.target.src.includes("incognito")){
    e.target.style.visibility="hidden";
  
  }else {
    e.target.src=rey;
  }
  e.target.parentNode.style.backgroundColor="white";
  e.target.parentNode.style.border="white";
}

  return (
    <div className="contenedor">
     <div className='caja'>
       <img onClick={cambiarImagen} src={imagen0}/>
       <div onClick={cambiarTexto} className='nombre'>{nombres[0]}</div>
     </div>
     <div  onClick={cambiarTexto} className='caja'>
       <img onClick={cambiarImagen} src={imagen1}/>
       <div className='nombre'>{nombres[1]}</div>
     </div>
     <div  onClick={cambiarTexto} className='caja'>
       <img onClick={cambiarImagen} src={imagen2}/>
       <div className='nombre'>{nombres[2]}</div>
     </div>
    </div>
  );
}

export default App;
