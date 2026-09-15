const projectGrid = document.querySelector(".project-grid");
const projectCards = projectGrid.querySelectorAll(".project-card");

const filterState = {
    type: "all",
    language: "all"
};

function filterByType(type) {
    projectCards.forEach(card => {
        const cardType = card.dataset.type;

        if (type === "all" || cardType === type) {
            card.hidden = false;
        } else {
            card.hidden = true;
        }
    });
}

function filterByLanguage(language) {
    projectCards.forEach(card => {
        const cardLanguage = card.dataset.language;

        if (language === "all" || cardLanguage === language) {
            card.hidden = false;
        } else {
            card.hidden = true;
        }
    });
}

filterByLanguage("react");

