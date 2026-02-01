function createMenuItem( 
    {
        name, 
        price, 
        description=""
    }) {
    
    const item = document.createElement("div");
    const itemName = document.createElement("span");
    const itemPrice = document.createElement("span");
    const itemHeader = document.createElement("p");
    const itemDescription = document.createElement("p");

    itemName.textContent = `${name} - `;
    itemPrice.textContent = `₹${price}`;
    itemDescription.textContent = description;

    itemHeader.appendChild(itemName);
    itemHeader.appendChild(itemPrice);
    item.appendChild(itemHeader);
    item.appendChild(itemDescription);

    return item;
}

export default function(container) {

    const title = document.createElement("h1");
    const ramenBowlMenuHeading = document.createElement("h2");
    const ramenBowlsMenu = document.createElement("div");
    const sidesMenuHeading = document.createElement("h2");
    const sidesMenu = document.createElement("div");
    const riceBowlsMenuHeading = document.createElement("h2");
    const riceBowlsMenu = document.createElement("div");
    const beveragesMenuHeading = document.createElement("h2");
    const beveragesMenu = document.createElement("div");

    const ramenBowls = [
        {
            'name': 'Tonkotsu Classic',
            'price': 349,
            'description': 'Rich pork bone broth simmered for 12 hours, chashu pork, soft-boiled egg, scallions, and nori.'
        },
        {
            'name': 'Shoyu Ramen',
            'price': 329,
            'description': 'Soy-based clear broth with tender chicken slices, bamboo shoots, egg, and spring onions.'
        },
        {
            'name': 'Miso Ramen',
            'price': 339,
            'description': 'Hearty miso broth with minced pork, corn, butter, and fresh vegetables.'
        },
        {
            'name': 'Spicy Tantanmen',
            'price': 359,
            'description': 'Chili-infused sesame broth with spicy minced meat, bok choy, and chili oil.'
        },
        {
            'name': 'Vegetarian Yasai Ramen',
            'price': 319,
            'description': 'Flavorful vegetable broth with tofu, mushrooms, corn, and seasonal greens.'
        },
        {
            'name': 'Seafood Ramen',
            'price': 379,
            'description': 'Light shio broth with prawns, fish cake, egg, and seaweed.'
        },
    ];

    const sides = [
        {
            'name': 'Chicken Gyoza (6 pcs)',
            'price': 189,
            'description': 'Light shio broth with prawns, fish cake, egg, and seaweed.'
        },
        {
            'name': 'Veg Gyoza (6 pcs)',
            'price': 169,
            'description': 'Light shio broth with prawns, fish cake, egg, and seaweed.'
        },
        {
            'name': 'Takoyaki (4 pcs)',
            'price': 199,
            'description': 'Light shio broth with prawns, fish cake, egg, and seaweed.'
        },
    ];

    const riceBowls = [
        {
            'name': 'Chicken Teriyaki Don',
            'price': 299,
            'description': 'Grilled chicken glazed with teriyaki sauce over steamed rice.'
        },
        {
            'name': 'Katsu Curry Rice',
            'price': 329,
            'description': 'Crispy chicken cutlet with Japanese curry and rice.'
        },
        {
            'name': 'Tofu Teriyaki Don (Veg)',
            'price': 279,
            'description': 'Grilled tofu glazed with teriyaki sauce over steamed rice.'
        },
    ];

    const beverages = [
        {
            'name': 'Japanese Green Tea (Hot/Cold)',
            'price': 79,
        },
        {
            'name': 'Ramune Soda',
            'price': 129,
        },
        {
            'name': 'Iced Lemon Tea',
            'price': 99,
        },
        {
            'name': 'Matcha Latte',
            'price': 149,
        },
        {
            'name': 'Soft Drinks',
            'price': 59,
        },
    ]

    title.textContent = "Menu";
    ramenBowlMenuHeading.textContent = "Ramen Bowls";
    sidesMenuHeading.textContent = "Sides";
    riceBowlsMenuHeading.textContent = "Rice Bowls";
    beveragesMenuHeading.textContent = "Beverages";

    for(let item of ramenBowls) {
        ramenBowlsMenu.appendChild(createMenuItem(item));
    }
    for(let item of sides) {
        sidesMenu.appendChild(createMenuItem(item));
    }
    for(let item of riceBowls) {
        riceBowlsMenu.appendChild(createMenuItem(item));
    }
    for(let item of beverages) {
        beveragesMenu.appendChild(createMenuItem(item));
    }

    container.appendChild(title);
    container.appendChild(ramenBowlMenuHeading);
    container.appendChild(ramenBowlsMenu);
    container.appendChild(sidesMenuHeading);
    container.appendChild(sidesMenu);
    container.appendChild(riceBowlsMenuHeading);
    container.appendChild(riceBowlsMenu);
    container.appendChild(beveragesMenuHeading);
    container.appendChild(beveragesMenu);
}