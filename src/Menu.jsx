import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function Inicio() {
  return (
     <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Baile 1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aut deleniti ut et omnis! Autem quis provident voluptatum, error ea, praesentium ipsum nihil voluptatem culpa ad, fuga harum hic unde.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Baile 2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequuntur deserunt eveniet, reiciendis mollitia, id delectus culpa ab ipsum nostrum doloribus sequi expedita? Minima eos commodi sapiente? Repudiandae, libero eveniet!</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Baile 3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aut doloribus consequatur blanditiis quod quas quisquam pariatur ratione laboriosam facere? Qui soluta facere voluptates recusandae doloribus provident. Deserunt, dignissimos consectetur?</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Baile 4
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, doloribus est odit illum nobis sunt animi iste nisi deserunt hic alias maxime, ut iure, laudantium explicabo! Minima voluptate aspernatur ea?</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Baile 5
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur, quis recusandae dicta iusto veritatis commodi obcaecati? Amet, omnis laborum nesciunt iusto eos temporibus debitis labore quasi aliquid architecto odit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Ofertas() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://assets.una.edu.ar/files/cursos/1648231567_2022-una-fo-curso-extension-danzas-bolivianas-960.jpg" className="card-img-top" alt="Danza 1" style={{ height: "200px", objectFit: "cover" }} />
          <div className="card-body">
            <h5 className="card-title">Danza 1</h5>
            <p className="card-text">Descripcion de Danza 1</p>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal1">Precio</button>
          </div>
        </div>

        <div className="modal fade" id="modal1" tabindex="-1" aria-labelledby="modalLabel1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel1">Precio</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>180bs</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card" style={{ width: "18rem", marginTop: "20px" }}>
          <img src="https://unifranz.edu.bo/wp-content/uploads/2024/02/CARANAVAL-FUSIÓN.png" className="card-img-top" alt="Danza 2" style={{ height: "200px", objectFit: "cover" }} />
          <div className="card-body">
            <h5 className="card-title">Danza 2</h5>
            <p className="card-text">Descripcion de Danza 2</p>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal2">Precio</button>
          </div>
        </div>

        <div className="modal fade" id="modal2" tabindex="-1" aria-labelledby="modalLabel2" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel2">Precio</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <p>500bs</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card" style={{ width: "18rem", marginTop: "20px" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6lqR-QAno4eMDg195WE7nNrj9nTE7TVoiw&s" className="card-img-top" alt="Danza 3" style={{ height: "200px", objectFit: "cover" }} />
          <div className="card-body">
            <h5 className="card-title">Danza 3</h5>
            <p className="card-text">Descripcion Danza 3</p>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal3">Precio</button>
          </div>
        </div>

        <div className="modal fade" id="modal3" tabindex="-1" aria-labelledby="modalLabel3" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel3">Precio</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>600Bs</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <nav
        style={{
          backgroundColor: "#444",
          padding: "10px 0",
          textAlign: "center",
          position: "fixed",
          top: "70px",
          left: 0,
          width: "100%",
          zIndex: 999,
        }}
      >
        <ul className="nav justify-content-center" style={{ margin: 0 }}>
          <li className="nav-item">
            <Link className="nav-link active" to="/In" style={{ color: "white" }}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Of" style={{ color: "white" }}>
              Ofertas de curso
            </Link>
          </li>
        </ul>
      </nav>
      <div style={{ paddingTop: "120px" }}>
        <Routes>
          <Route path="/In" element={<Inicio />} />
          <Route path="/Of" element={<Ofertas />} />
        </Routes>
      </div>
    </div>
  );
}

export default Menu;
