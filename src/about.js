export default function(container){
    const aboutSectionHeading = document.createElement("h1");
    const aboutSection = document.createElement("div");
    
    const abouts = [
        "Sakura Ramen Shop was born from a simple love for comforting bowls of ramen and the warm, welcoming culture of Japanese street-side eateries. Inspired by the tiny ramen bars tucked away in Tokyo’s alleys, we wanted to recreate that same feeling — where the aroma of simmering broth greets you at the door and every seat feels like the best seat in the house.",
        "Our journey began with a passion for authenticity. From slow-cooked broths that simmer for over 12 hours to noodles prepared fresh every morning, every bowl we serve is crafted with care, patience, and respect for tradition. We blend time-honored Japanese techniques with locally sourced ingredients to create flavors that are both genuine and unforgettable.",
        "But Sakura Ramen Shop is more than just food. It’s a place to pause, unwind, and share moments — whether you’re catching up with friends, enjoying a quiet solo meal, or discovering ramen for the first time. The warm lights, wooden interiors, and friendly chatter are all part of the experience we strive to create.",
        "We believe great food brings people together, and every bowl of ramen we serve is an invitation to sit down, relax, and feel at home.",
        "Welcome to Sakura Ramen Shop — where tradition meets comfort, one bowl at a time.",
    ];

    aboutSectionHeading.textContent = "About";

    let aboutPara;
    for(let about of abouts) {
        aboutPara = document.createElement("p");
        aboutPara.textContent = about;
        aboutSection.appendChild(aboutPara);
    };

    container.appendChild(aboutSectionHeading);
    container.appendChild(aboutSection);
}