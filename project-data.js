const projects = {
    "nhs-dataviz": {
        title: "NHS Health Data Visualisation",
        type: "UNIVERSITY PROJECT",
        description:
            "An interactive visualisation of NHS hospital admissions data, built with React and D3.js.",
        tags: ["React", "D3.js", "JavaScript"],
        overview:
            "This project explored how NHS hospital admissions data could be presented through interactive visualisations.",
        role:
            "I worked as part of a team to design and develop the visualisation system.",
        technologies:
            "React, JavaScript, D3.js and Git."
    },

    "higher-or-lower": {
        title: "HAPCA Higher or Lower",
        type: "WEB GAME",
        description:
            "A React-based game where users compare NHS hospital admissions data through a higher-or-lower format.",
        tags: ["React", "Supabase", "JavaScript"],
        overview:
            "A web game built around NHS hospital admissions data.",
        role:
            "I worked on the frontend and integration of the game's data and leaderboard functionality.",
        technologies:
            "React, JavaScript, Supabase and Git."
    }
};

const params = new URLSearchParams(window.location.search);
const projectId = params.get("project");

const project = projects[projectId];

if (project) {
    document.querySelector("#project-type").textContent =
        project.type;

    document.querySelector("#project-title").textContent =
        project.title;

    document.querySelector("#project-description").textContent =
        project.description;

    document.querySelector("#project-overview").textContent =
        project.overview;

    document.querySelector("#project-role").textContent =
        project.role;

    document.querySelector("#project-technologies").textContent =
        project.technologies;

    const tags = document.querySelector("#project-tags");

    tags.innerHTML = "";

    project.tags.forEach(tag => {
        const element = document.createElement("span");

        element.textContent = tag;

        tags.appendChild(element);
    });
}