import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import bo from "../../Assets/Projects/bo.png";
import caro from "../../Assets/Projects/caro.png";
import rec from "../../Assets/Projects/rec.png";
import ani from "../../Assets/Projects/ani.png";
import petAdote from "../../Assets/Projects/petAdote.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus Projetos <strong className="purple"> </strong>
        </h1>
        <p style={{ color: "white" }}>
         Estes são os meus projetos mais recentes.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petAdote}
              isBlog={false}
              title="petAdote"
              description="PetAdote é uma plataforma dedicada à adoção e divulgação de animais, desenvolvida utilizando o framework React para a parte visual e o node.js para o backend. Para armazenar os 
              dados dos animais e usuários, foi utilizado o banco de dados MongoDB."
              
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rec}
              isBlog={false}
              title="RecilaAE"
              description="O ReciclaAE é um sistema móvel desenvolvido para localizar os pontos de coleta mais próximos de cada usuário. Foi criado utilizando o React Native e toda a sua interface foi prototipada no Figma."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ani}
              isBlog={false}
              title="Sistema de adoção"
              description="O PetFeliz é um sistema web desenvolvido em Java, que foi criado 
              com o objetivo de auxiliar a ONG PetFeliz na divulgação de seus animais para adoção."
              
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={caro}
              isBlog={false}
              title="Carona"
              description="O sistema de carona foi projetado para permitir que os usuários solicitem um carro de forma conveniente, sendo desenvolvido utilizando a tecnologia React.js e Type Script."
             
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bo}
              isBlog={false}
              title="Agendamento"
              description=" O sistema de agendamento foi desenvolvido para que os professores possam reservar salas e laboratórios nas instituições de forma mais eficiente. Este sistema foi desenvolvido utilizando as tecnologias Python e React, garantindo uma interface moderna e intuitiva para facilitar o processo de reserva."
             
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
