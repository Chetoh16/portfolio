const projectGrid = document.querySelector(".project-grid");
const projectCards = projectGrid.querySelectorAll(".project-card");
const filterButtons = document.querySelectorAll(".filter-button");

const filterState = {
    type: "all",
    language: "all"
};

function applyFilters() {
    projectCards.forEach(card => {
        const matchesType =
            filterState.type === "all" ||
            card.dataset.type === filterState.type;

        const matchesLanguage =
            filterState.language === "all" ||
            card.dataset.language === filterState.language;

        card.hidden = !(matchesType && matchesLanguage);
    });
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterState.type = button.dataset.filterType;

        filterButtons.forEach(button => {
            button.classList.remove("active");
        });

        button.classList.add("active");

        applyFilters();
    });
});