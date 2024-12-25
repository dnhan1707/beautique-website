const collection_template = document.querySelector('.collection-card-template');
const collection_container = document.querySelector('.collection-page-container');

const addImageElement = (div, data, className) => {
    const imageElement = document.createElement('img');
    imageElement.src = data.image;
    imageElement.alt = data.description;
    imageElement.classList.add(className);
    div.appendChild(imageElement);
}

const addParagraphElement = (div, data, className) => {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = data.description;
    paragraphElement.classList.add(className);
    div.appendChild(paragraphElement);
}

const displayCollection = (collection_data) => {
    collection_container.innerHTML = '';
    collection_data.forEach(item => {
        const card = collection_template.content.cloneNode(true);

        const image_div = card.querySelector('.collection-image');
        const description_div = card.querySelector('.collection-description');

        addImageElement(image_div, item, 'collection-image');
        addParagraphElement(description_div, item, 'collection-description');

        collection_container.appendChild(card);
    });
}

displayCollection(collection_data);