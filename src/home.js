export default function(container) {

    const restaurantTitle = document.createElement("h1");
    const restaurantTagLine = document.createElement("div");
    const restaurantDescription = document.createElement("div");
    const restaurantDescriptionPara1 = document.createElement("p");
    const restaurantDescriptionPara2 = document.createElement("p");
    const addressSection = document.createElement("div");
    const addressSectionHeader = document.createElement("h2");
    const address = document.createElement("p");
    const timingsSection = document.createElement("div");
    const timingsSectionHeader = document.createElement("h2");
    const timingsWeekDaysLabel = document.createElement("span");
    const timingsSundayLabel = document.createElement("span");
    const timingsWeekDays = document.createElement("p");
    const timingsSunday = document.createElement("p");
    
    restaurantTitle.textContent = "Sakura Ramen Shop";
    restaurantTagLine.textContent = "Authentic Japanese Ramen in the Heart of the City";
    restaurantDescriptionPara1.textContent = "Welcome to Sakura Ramen Shop, your cozy corner for rich, comforting bowls of traditional Japanese ramen. Inspired by the small street-side ramen bars of Tokyo, we serve slow-simmered broths, freshly made noodles, and perfectly balanced toppings that warm the soul with every bite.";
    restaurantDescriptionPara2.textContent = "Whether you’re stopping by for a quick lunch, a relaxed dinner, or a late evening craving, Sakura Ramen Shop offers an inviting atmosphere, friendly service, and unforgettable flavors.";
    addressSectionHeader.textContent = "Address";
    address.textContent = "1234, Sakura Street, Konoha City, KC56789";
    timingsSectionHeader.textContent = "Timings";
    timingsWeekDaysLabel.textContent = "Monday - Saturday: ";
    timingsSundayLabel.textContent = "Sunday: ";
    timingsWeekDays.textContent = "11:00 AM - 9:00 PM";
    timingsSunday.textContent = "12:00 PM - 8:00 PM";

    restaurantDescription.appendChild(restaurantDescriptionPara1);
    restaurantDescription.appendChild(restaurantDescriptionPara2);
    addressSection.appendChild(addressSectionHeader);
    addressSection.appendChild(address);
    timingsWeekDays.insertBefore(timingsWeekDaysLabel, timingsWeekDays.firstChild);
    timingsSunday.insertBefore(timingsSundayLabel, timingsSunday.firstChild);
    timingsSection.appendChild(timingsSectionHeader);
    
    timingsSection.appendChild(timingsWeekDays);
    timingsSection.appendChild(timingsSunday);

    container.appendChild(restaurantTitle);

    container.appendChild(restaurantTagLine);
    container.appendChild(restaurantDescription);
    container.appendChild(addressSection);
    container.appendChild(timingsSection);
}