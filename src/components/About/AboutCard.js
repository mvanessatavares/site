import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Olá, me chamo Vanessa, sou formada em Análise e Desenvolvimento de Sistemas
           pelo Instituto Federal da Paraíba.
            <br />
           
            <br />
            Estou inserida no mundo da tecnologia da informação desde 2016, com projetos desenvolvidos desde o 
            design UX e UI até a criação do software,toda a sua documentação e testes.
            <br />
            
          </p>
         

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
