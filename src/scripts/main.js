import data from "../DATA.json";

const main = () => {
    let restaurantElement = "";

    data.restaurants.forEach((resto) => {
        restaurantElement += `
        <div class="list-menu">
            <div class="city">                
            <p>${resto.city}</p>  
            </div>
            <div class="rating">
            <p>${resto.rating}</p>
            </div>
            <img src="${resto.pictureId}" alt="${resto.name} Image">
            <a href="#"><h5>${resto.name}</h5></a>
            <h6 class="post-item__description">${resto.description}</h6>
            </div>
        `;
    });

    document.querySelector(".menu-list").innerHTML = restaurantElement;
};

export default main;