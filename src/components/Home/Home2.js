import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import eu from "../../Assets/eu.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Um pouco sobre mim</span>
            </h1>
            <p className="home-about-body">
             
              <br />
              
              <br />
              <br />
             
             
              <br />
              <br />
              
              &nbsp; like
              <i>
                <b className="purple"> Sou analista e desenvolvedora de sistemas, atualmente pós-graduanda em engenharia de software. Sou apaixonada por design e qualidade de software, especialmente pela usabilidade do usuário e pelo front-end da aplicação. Participei de diversos projetos que envolveram desde a implementação 
                do back-end e front-end, até os testes de usabilidade, banco de dados e sua prototipação.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={eu} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Minhas redes</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mvanessatavares"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vanessa-lira-67b460249/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
