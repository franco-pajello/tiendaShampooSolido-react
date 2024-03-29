import { Link } from "react-router-dom"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"



const Articulo = ({ articulos = "articulo" }) => {

  return (
    <div className="articuloCard">
       <img src={`${articulos.img}`} alt=""></img>
       <div>
        <p>
          <samp>

          {`${articulos.nombre}`}
          </samp>
        </p>
        <p className="articuloPrecio">
             {`${articulos.precio}`}
        </p>

       </div>
       <Link to={`/detalle/${articulos.id}`} >
            <button className="articuloBtn">
              Detalle
            </button>
          </Link>
      
    
{/*       <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={articulos.img} />
        <Card.Body>
          <Card.Title>
            {articulos.nombre}
          </Card.Title>
          <Card.Body className="bodyRed">
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                ${articulos.precio}
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
          <Link to={`/detalle/${articulos.id}`} >
            <Button variant="primary">
              Detalle
            </Button>
          </Link>
        </Card.Body>
      </Card> */}
    </div>
  )
}

export default Articulo