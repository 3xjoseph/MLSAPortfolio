/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "PokeDex by 3xjoseph",
    description:
      "Pokedex by 3xJoseph is an app that is designed to provide users with information about different Pokémon species using the PokeAPI as a data source. The app allows users to search for a specific Pokemon by its name or ID and retrieve various details about that Pokemon.",
    url: "https://github.com/3xjoseph/PokeDexBy3xJoseph",
  },
  {
    title: "Purrfect Code",
    description:
      "Purrfect Code is an adventure game where players take on the role of a courageous cat on a mission to collect pages and solve the puzzle of Java. The game combines elements of exploration, puzzle-solving, and combat in a Java programming-themed world.",
    url: "https://github.com/3xjoseph/PurrfectCode",
  },
  {
    title: "BulSU Connect: Alumni Management System",
    description:
      "A web based application of BSU's Alumni Management System.",
    url: "https://github.com/3xjoseph/Alumni-Management-System",
  },
  {
    title: "My Manadarin Learning Journey",
    description:
      "My mandarin learning journey compiled in 1 site",
    url: "https://github.com/3xjoseph/mymandarinlearninglourney.github.io",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
