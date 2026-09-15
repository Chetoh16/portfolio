const projectGrid = document.querySelector(".project-grid");
const projectCards = projectGrid.querySelectorAll(".project-card");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCount = document.querySelector(".project-count");

const filterState = {
    type: "all",
    language: "all"
};

function applyFilters() {
    let visibleProjects = 0;

    projectCards.forEach(card => {
        const matchesType =
            filterState.type === "all" ||
            card.dataset.type === filterState.type;

        const matchesLanguage =
            filterState.language === "all" ||
            card.dataset.language === filterState.language;

        const visible = matchesType && matchesLanguage;

        card.hidden = !visible;

        if (visible) {
            visibleProjects++;
        }
    });

    projectCount.textContent = `${visibleProjects} projects`;
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterState.type = button.dataset.filterType;

        filterButtons.forEach(button => {
            button.classList.remove("active");
            button.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        applyFilters();
    });
});