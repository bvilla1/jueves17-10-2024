export const MenuAdmin = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>No</th>
                <th style={{ width: "25%" }}>Nombre Platos</th>
                <th style={{ width: "25%" }}>Acompañamientos</th>
                <th style={{ width: "20%" }} className="text-center">Precio</th>
                <th style={{ width: "15%" }}>Region</th>
                <th style={{ width: "10%" }}>opciones</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Bandeja Paisa</td>
                <td>Aguacate</td>
                <td className="text-center">35.000</td>
                <td>Paisa</td>
                <a href="/menactu/1" >
                  <i className="fa-solid fa-pen-to-square" style={{ color: "#ff2d00" }}></i>&nbsp;<i className="fa-solid fa-trash-can" style={{ color: "#ff2d00" }}></i>
                </a>

              </tr>
              <tr>
                <td>2</td>
                <td>Ajiaco</td>
                <td>Con Arroz</td>
                <td className="text-center">28.000</td>
                <td>Andina</td>
                <a href="/menactu/1" >
                  <i className="fa-solid fa-pen-to-square" style={{ color: "#ff2d00" }}></i>&nbsp;<i className="fa-solid fa-trash-can" style={{ color: "#ff2d00" }}></i>
                </a>
              </tr>
              <tr>
                <td>1</td>
                <td>Mote Santandereano</td>
                <td>Con arroz</td>
                <td className="text-center">25.000</td>
                <td>Santander</td>
                <a href="/menactu/1" >
                  <i className="fa-solid fa-pen-to-square" style={{ color: "#ff2d00" }}></i>&nbsp;<i className="fa-solid fa-trash-can" style={{ color: "#ff2d00" }}></i>
                </a>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};