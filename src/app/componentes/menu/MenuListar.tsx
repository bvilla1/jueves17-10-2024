import { useState } from "react";
import { Plato } from "../../modelos/platos";
import { ARREGLO_PLATOS } from "../../mocks/Plato-mocks";
import { ARREGLO_PLATOS_REGION } from "../../utilidades/rutas/dominios/DomRegion";

export const MenuListar = () => {
 const [arrPlatos] = useState<Plato[]>(ARREGLO_PLATOS);

  const obtenerNombre = (valor: string)=>{
    for(const objRegion of ARREGLO_PLATOS_REGION){
      if (objRegion.codRegion==valor) {
        return objRegion.nombreRegion;
      }
    }
  }

  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th style={{width: "5%"}}>Codigo</th>
                  <th style={{width: "30%"}}>Nombre Platos</th>
                  <th style={{width: "30%"}}>Precio</th>
                  <th style={{width: "15%"}} >Region</th>
                  <th style={{width: "20%"}}>Imagen</th>
                </tr>
              </thead>
              <tbody>

                {arrPlatos.map((miPla: Plato)=>(
                <tr key={miPla.codplato} className="aling-middle">
                  <td>{miPla.codplato}</td>
                  <td>{miPla.nombrePlato}</td>
                  <td>{miPla.precioPlato}</td>
                  <td>{obtenerNombre(miPla.regionPlato)} </td>
                  <td>{miPla.regionPlato}</td>
                  <td>
                    <img src={miPla.imagenPlatoBase64} alt={miPla.nombrePlato} className="imagenListado" />
                    <br />
                    {miPla.imagenPlato}
                    
                    </td>

                </tr>
                ))}

              </tbody>
            </table>
        </div>
      </div>


    </>
  );
};