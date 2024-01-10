// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardTemplate = document.querySelector('#card-template').content;
const cardTarget = document.querySelector('.places__list');

const buttonFunction = function (deleteButtonID) {
    deleteButtonID.addEventListener('click', function () {
        const parentCard = deleteButtonID.closest('.card');
        parentCard.remove();
    });
};

function createCard (putCardTemplate, putCardTarget, putCardData, putButtonListener) {
    const cardTemplateClone = putCardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardTemplateClone.querySelector('.card__delete-button');
    cardTemplateClone.querySelector('.card__image').src = putCardData.link;
    cardTemplateClone.querySelector('.card__title').textContent = putCardData.name;
    putCardTarget.append(cardTemplateClone);
    putButtonListener(deleteButton);
};

initialCards.forEach(function(item){
    createCard(cardTemplate, cardTarget, item, buttonFunction);
});