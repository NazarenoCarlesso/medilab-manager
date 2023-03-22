import Card from "react-bootstrap/Card";
import styles from "./About.module.css";
import * as Icon from "react-bootstrap-icons";
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const creators = [
    { name: "Sergio Edgardo Del Pino",
      src: require("../images/team-1.webp"),
      urlGithub: "https://github.com/sdelp66",
      urlLinkedin: "https://www.linkedin.com/in/sergiodelpino"
    },
    { name: "Jose Edwin Elias Incio",
      src: require("../images/team-2.webp"),
      urlGithub: "https://github.com/jeliasincio",
      urlLinkedin: "https://www.linkedin.com/in/jose-edwin-elias-incio-ab4ba35a/"
    },
    { name: "Nazareno Javier Carlesso Bruno",
      src: require("../images/team-3.webp"),
      urlGithub: "https://github.com/NazarenoCarlesso",
      urlLinkedin: "https://www.linkedin.com/in/nazarenocarlesso/"
    },
    { name: "Ivan Alfredo Quiroz Quiroz",
      src: require("../images/team-4.webp"),
      urlGithub: "https://github.com/IvanAlfredoQQ",
      urlLinkedin: "https://www.linkedin.com/in/ivan-alfredo-q-q/"
  },
    { name: "Jessica Elizabeth Ruiz Velazco",
      src: require("../images/team-5.webp"),
      urlGithub: "https://github.com/Jessicopata",
      urlLinkedin: "https://www.linkedin.com/in/jessica-ruiz-velazco-4200b7131"
    },
    { name: "Luis Kendor Vidal",
      src: require("../images/team-6.webp"),
      urlGithub: "https://github.com/luisnarv",
      urlLinkedin: "https://www.linkedin.com/in/luis-narvaez-vidal-6689251ab"
    },
    { name: "Juan Pablo Guzman Moreno",
      src: require("../images/team-7.webp"),
      urlGithub: "https://github.com/juanpablogm12",
      urlLinkedin: "https://www.linkedin.com/in/juan-pablo-guzman-moreno-209063248"
    },
    { name: "Carlos Fabián Melgarejo Agudelo",
      src: require("../images/team-8.webp"),
      urlGithub: "https://github.com/fabianbm15",
      urlLinkedin: "https://www.linkedin.com/in/cmelgarejobm/"
    },
  ];

  return (
    <div className="container" style={{marginTop:80}}>
      <div className={styles.aboutTitle}>
        Nuestro Equipo:
        <hr />
      </div>

      <div className={styles.aboutImageGrid}>
        {creators.map((e) => {
          return (
            <Card
              className={styles.aboutFondo }
              style={{
                width: "18rem",
                marginBottom: "35px",
                textAlign: "center",
                borderRadius: "0px",
                color: "white",
              }}
            >
              <img key={e.name} src={e.src} alt={`Team - ${e.name}`} />
              <Card.Body>
                <Card.Title style={{ fontSize: "19px" }}> {e.name}</Card.Title>
                <Card.Text>Desarrollador FullStack</Card.Text>
                <Link to={e.urlGithub} target="_blank" rel="noopener noreferrer" className={styles.aboutLink}>
                  <Icon.Github size={32} />
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={e.urlLinkedin} target="_blank" rel="noopener noreferrer" className={styles.aboutLink}>
                  <Icon.Linkedin size={32} />
                  </Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// import React from "react";
// import styles from "./About.module.css";
// const imageUrls = [
//   "https://picsum.photos/id/237/200/300",
//   "https://picsum.photos/id/238/200/300",
//   "https://picsum.photos/id/239/200/300",
//   "https://picsum.photos/id/240/200/300",
//   "https://picsum.photos/id/241/200/300",
//   "https://picsum.photos/id/242/200/300",
//   "https://picsum.photos/id/243/200/300",
//   "https://picsum.photos/id/244/200/300",
// ];

// const App = () => {
//   return (
//     <div className="container">
//       <div className={styles.aboutImageGrid}>
//         {imageUrls.map((url, index) => (
//           <img key={index} src={url} alt={`Image ${index}`} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
