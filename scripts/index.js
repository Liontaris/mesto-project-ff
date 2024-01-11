// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.places__list');

const setDeleteButton = function (parentCard) { parentCard.remove() };

function createCard (cardTemplate, cardData) {
    const cardTemplateClone = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardTemplateClone.querySelector('.card__delete-button');
    const imageParameters = cardTemplateClone.querySelector('.card__image');

    imageParameters.src = cardData.link;
    imageParameters.alt = 'Видовое фото ' + cardData.name;
    cardTemplateClone.querySelector('.card__title').textContent = cardData.name;
    
    deleteButton.addEventListener('click', () => setDeleteButton(cardTemplateClone));

    return cardTemplateClone;
};

initialCards.forEach(function(item){
    cardsContainer.append(createCard(cardTemplate, item)); //Всё-таки наверное append, а не prepend, иначе карточки выводятся в обратном порядке, не соответсвует макету.
});