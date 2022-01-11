import React from 'react';
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import { MDBBtn} from "mdb-react-ui-kit";
import "../Style.css";

function Home () {
let navigate = useNavigate();
  return (
    <div>
        <h2 id = "welcomeMsgHead" >Welcome to AstronoMe,</h2> 
       <p id = "welcomeMsg">where we connect YOU with the stars.
        <br></br>Please use this application to learn your astrological sign!
        </p>

    
    <Row> <Col md = {3}> </Col> <Col> <button id = "homeBtn" onClick = {() => {navigate("/quiz");}} >What's my sign?</button></Col></Row>
    </div>
  );
}
export default Home; 