const projectGrid = document.querySelector(".project-grid");
const projectCards = projectGrid.querySelectorAll(".project-card");

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

