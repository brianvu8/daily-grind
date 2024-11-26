let myDate = new Date();
let myDay = myDate.getDay();
//declare variable as temp value to change later on.
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
}

myDay = parseInt(myDay);


switch(myDay){
//theDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//for(int i = 0; theDays.length() - 1)

/*
dialy-grind.js

Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:
One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

Here are the items we need for each coffee:
name - Bubble Tea for example
pic - an image of a bubble tea
day - for example Wednesday
alt - The data in the alt tag
color - A color to match the coffee
desc - A description of the coffee

*/
    case 0:
        today = "Sunday";

        coffee = {
            name: "Cold-Brew",
            pic: "images/cold-brew.jpg",
            day: "Sunday",
            alt: "A pic of a Cold-Brew",
            color: "brown",
            desc: `I love me a Cold-Brew!`
        };
        
    break;

    case 1:
        today = "Monday";

        coffee = {
            name: "Pumpkin-Spice-Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            day: "Monday",
            alt: "A pic of a Pumpkin-Spice-Latte",
            color: "pink",
            desc: `Pumpkin-Spice-Latte's are perfect during these times!`
        };
    break;

    case 2:
        today = "Tuesday";

        coffee = {
            name: "Caramel-Latte",
            pic: "images/caramel-latte.jpg",
            day: "Tuesday",
            alt: "A pic of a Caramel-Latte",
            color: "purple",
            desc: `Caramel-Latte's are the best ever!`
        };

    break;

    case 3:
        today = "Wednesday";

        coffee = {            
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            day: "Wednesday",
            alt: "A pic of a Bubble Tea",
            color: "orange",
            desc: `I like me some Bubble Tea!`
        };

    break;

    case 4:
        today = "Thursday";

        coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            day: "Thursday",
            alt: "A pic of a Frappaccino",
            color: "red",
            desc: `Frappaccino's are so delicious!`
        };

    break;

    case 5:
        today = "Friday";

        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            day: "Friday",
            alt: "A pic of a Mocha",
            color: "blue",
            desc: `Mocha is the best drink ever!`
        };

    break;

    case 6:
        today = "Saturday";

        coffee = {
            name: "Drip",
            pic: "images/drip.jpg",
            day: "Saturday",
            alt: "A pic of a Drip",
            color: "green",
            desc: `A classic drink calls for a Drip!`
        };

    break;

    default:
        today = "Something went wrong";

}
//alert(today);
console.log(coffee);
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

function coffeeTemplate(coffee){
    let myReturn = `<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
        <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`;

    return(myReturn);
    
}