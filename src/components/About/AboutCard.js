import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Toby Ward </span>
            from <span className="purple"> South West, UK.</span>
            <br />
            I am currently employed as a DevOps Engineer at The Barrister Group.
            <br />
            I studied Computer Science at the University of Sussex.
            <br />
            <br />
            Apart from DevOps, here are some other things I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sim Racing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing board games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Toby</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
