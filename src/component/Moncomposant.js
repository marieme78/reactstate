import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class MonComposant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Samba Niang",
        bio: "Ingénieur",
        imgSrc: "https://www.peresblancs.org/image5/vieux01.jpg",
        profession: "Génie civil",
      },
      show: false,
      elapsedtime: 0,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    // La méthode componentDidMount est appelée après que le composant est monté dans le DOM
    // Nous pouvons utiliser cette méthode pour initialiser notre chronomètre
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        elapsedtime: prevState.elapsedtime + 1,
      }));
    }, 1000); // Met à jour elapsedtime toutes les secondes
  }

  componentWillUnmount() {
    // La méthode componentWillUnmount est appelée juste avant que le composant soit démonté et détruit
    // Nous devrions nettoyer tout ce qui a été mis en place dans componentDidMount, comme le timer
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.toggleShow}>
          {this.state.show ? "Masquer le profil" : "Afficher le profil"}
        </Button>

        {this.state.show && (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.state.person.imgSrc} />
            <Card.Body>
              <Card.Title>{this.state.person.fullName}</Card.Title>
              <Card.Text>{this.state.person.bio}</Card.Text>
              <h4>{this.state.person.profession}</h4>
              <Button variant="primary">Contacter</Button>
              <p>Temps écoulé depuis le dernier montage : {this.state.elapsedtime} secondes</p>
            </Card.Body>
          </Card>
        )}
      </>
    );
  }
}

export default MonComposant;
