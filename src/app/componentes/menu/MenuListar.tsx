export const MenuListar = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th style={{width: "5%"}}>No</th>
                  <th style={{width: "30%"}}>Nombre Platos</th>
                  <th style={{width: "25%"}}>Acompañamientos</th>
                  <th style={{width: "20%"}} className="text-center">Precio</th>
                  <th style={{width: "20%"}}>Region</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Bandeja Paisa</td>
                  <td>Aguacate</td>
                  <td className="text-center">35.000</td>
                  <td>Paisa</td>

                </tr>
                <tr>
                  <td>2</td>
                  <td>Ajiaco</td>
                  <td>Con Arroz</td>
                  <td className="text-center">28.000</td>
                  <td>Andina</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mote Santandereano</td>
                  <td>Con arroz</td>
                  <td className="text-center">25.000</td>
                  <td>Santander</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>


    </>
  );
};