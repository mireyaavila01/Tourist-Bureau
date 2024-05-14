"use strict";

let categories = ["Adventurous", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

let activities = [
   {
        category: "Adventurous", 
        id: "A101", 
        name: "Valley Hot Air Balloons", 
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.", 
        location: "121 S. Main Street",
        price: 265.00 
   },
   {
        category: "Adventurous", 
        id: "A102", 
        name: "River Runners: Float Trip", 
        description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.", 
        location: "145 FM 103",
        price: 65.00 
    },
    {
        category: "Adventurous", 
        id: "A103", 
        name: "River Runners: Ride the Rapids", 
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!", 
        location: "145 FM 103",
        price: 145.00 
    },     
    {
        category: "Arts & Crafts", 
        id: "AC101", 
        name: "Painting with a Twist : Oils", 
        description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.", 
        location: "1991 Paint Drive",
        price: 40.00 
    },
    {
        category: "Arts & Crafts", 
        id: "AC102", 
        name: "Painting with a Twist : Watercolor", 
        description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.", 
        location: "1991 Paint Drive",
        price: 40.00 
    },   
    {
        category: "Museums", 
        id: "M101", 
        name: "Bravings Airship Museum", 
        description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.", 
        location: "101 Airfield Drive",
        price: 10.00
    },   
    {
        category: "Museums", 
        id: "M102", 
        name: "Forks and Spoons Museum", 
        description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!", 
        location: "1056 Lost Knives Court",
        price: 3.00
    },  
    {
        category: "Museums", 
        id: "M103", 
        name: "Steenges Computing Museum", 
        description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.", 
        location: "103 Technology Way",
        price: 0.00 
    },  
    {
        category: "Wine Tastings", 
        id: "WT-101", 
        name: "Hastings Winery Tours and Tastings", 
        description: "Hastings Winery is a small, family owned winery in the heart of Blue Ridge, GA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.", 
        location: "10987 FM 1187",
        price: 12.00 
    },   
    {
        category: "Wine Tastings", 
        id: "WT-102", 
        name: "Lone Oak Winery", 
        description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.", 
        location: "121 Burleson Court",
        price: 0.00 
    },   
    {
        category: "Other", 
        id: "OTH101", 
        name: "Fire Department: Ride Along", 
        description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!", 
        location: "10 Redline Drive",
        price: 25.00 
    },   
    {
        category: "Other", 
        id: "OTH102", 
        name: "Homes For Our Neighbors", 
        description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!", 
        location: "Call (555) 555-5555",
        price: 0.00 
    }
];
//select ids 
const activityCategory = document.getElementById("activityCategory");
const adventurousCategory = document.getElementById("adventurousCategory");
const artsAndCraftsCategory = document.getElementById("artsAndCraftsCategory");
const museumsCategory = document.getElementById("museumsCategory");
const wineTastingCategory = document.getElementById("wineTastingCategory");
const otherCategory = document.getElementById("otherCategory");

//form ids
const inputNumberTickets = document.getElementById("inputNumberTickets");
const inputCreditCard = document.getElementById("inputCreditCard");
const inputEmailAddress = document.getElementById("inputEmailAddress");

const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
//div ids 
const divAdventurous = document.getElementById("divAdventurous");
const divArtsAndCrafts = document.getElementById("divArtsAndCrafts");
const divMuseums = document.getElementById("divMuseums");
const divWineTasting = document.getElementById("divWineTasting");
const divOther = document.getElementById("divOther");

const messageWithDetails = document.getElementById("messageWithDetails");
const messageForTickets = document.getElementById("messageForTickets");

window.onload = function (){
    activityDropdown();
    activityCategory.onchange = hideOrShowCategories;
    hideOrShowCategories()

    adventurousCategory.onchange = displayDetails;
    artsAndCraftsCategory.onchange = displayDetails;
    museumsCategory.onchange = displayDetails;
    wineTastingCategory.onchange = displayDetails;
   otherCategory.onchange = displayDetails;
}

function hideOrShowCategories(){ 
    messageWithDetails.innerHTML = "";
    let selectedCategory = activityCategory.value;

    if (selectedCategory === "Adventurous") {
        divAdventurous.style.display = "block"
        divArtsAndCrafts.style.display = "none"
        divMuseums.style.display = "none"
        divWineTasting.style.display = "none"
        divOther.style.display = "none"
       adventurousDropdown();
    }
    else if(selectedCategory === "Arts & Crafts"){
        divArtsAndCrafts.style.display = "block"
        divAdventurous.style.display = "none"
        divMuseums.style.display = "none"
        divWineTasting.style.display = "none"
        divOther.style.display = "none"
        artsAndCraftsDropdown();
    }
    else if (selectedCategory === "Museums"){
        divMuseums.style.display = "block"
        divAdventurous.style.display = "none"
        divArtsAndCrafts.style.display = "none"
        divWineTasting.style.display = "none"
        divOther.style.display = "none"
        museumsDropdown();
    }
    else if (selectedCategory === "Wine Tastings"){
        divWineTasting.style.display = "block"
        divAdventurous.style.display = "none"
        divArtsAndCrafts.style.display = "none"
        divMuseums.style.display = "none"
        divOther.style.display = "none"
        wineTastingDropdown();
    }
    else if (selectedCategory === "Other"){
        divOther.style.display = "block"
        divAdventurous.style.display = "none"
        divArtsAndCrafts.style.display = "none"
        divMuseums.style.display = "none"
        divWineTasting.style.display = "none"
        otherDropdown();
    }
    else{
        divAdventurous.style.display = "none";
       divArtsAndCrafts.style.display = "none";
        divMuseums.style.display = "none" ;
        divWineTasting.style.display = "none";
        divOther.style.display = "none";
    }
}

function activityDropdown(){
   

    let newOption = document.createElement("option");
    newOption.textContent = "Select One Activity Category"
    newOption.value = "";
    activityCategory.appendChild(newOption); 

    for(let i = 0; i < categories.length; i++){
        let newOption = new Option(categories[i]);
        activityCategory.appendChild(newOption);
    }
}

function adventurousDropdown(){
   adventurousCategory.innerHTML = "";


    let newOption = document.createElement("option");
    newOption.textContent = "Select an Adventurous Activity"
    newOption.value = "";
    adventurousCategory.appendChild(newOption); 

    for(let i = 0; i < activities.length; i++){
        if(activities[i].category ==="Adventurous"){
        let newOption = new Option(activities[i].name);
        adventurousCategory.appendChild(newOption); 
        }
        
    }

    

}

function artsAndCraftsDropdown(){
    artsAndCraftsCategory.innerHTML = "";


    let newOption = document.createElement("option");
    newOption.textContent = "Select an Arts & Crafts Activity"
    newOption.value = "";
    artsAndCraftsCategory.appendChild(newOption); 

    for(let i = 0; i < activities.length; i++){
        if(activities[i].category ==="Arts & Crafts"){
        let newOption = new Option(activities[i].name);
        artsAndCraftsCategory.appendChild(newOption); 
        }
        
    }
}

function museumsDropdown(){
    museumsCategory.innerHTML = "";


    let newOption = document.createElement("option");
    newOption.textContent = "Select a Musuem Activity"
    newOption.value = "";
    museumsCategory.appendChild(newOption); 

    for(let i = 0; i < activities.length; i++){
        if(activities[i].category ==="Museums"){
        let newOption = new Option(activities[i].name);
        museumsCategory.appendChild(newOption); 
        }
        
    }
}

function wineTastingDropdown(){
   wineTastingCategory.innerHTML = "";


    let newOption = document.createElement("option");
    newOption.textContent = "Select a Wine Tasting Activity"
    newOption.value = "";
    wineTastingCategory.appendChild(newOption); 

    for(let i = 0; i < activities.length; i++){
        if(activities[i].category ==="Wine Tastings"){
        let newOption = new Option(activities[i].name);
        wineTastingCategory.appendChild(newOption); 
        }
        
    }
}

function otherDropdown(){
    otherCategory.innerHTML = "";


    let newOption = document.createElement("option");
    newOption.textContent = "Select Other Options for Activities"
    newOption.value = "";
    otherCategory.appendChild(newOption); 

    for(let i = 0; i < activities.length; i++){
        if(activities[i].category ==="Other"){
        let newOption = new Option(activities[i].name);
        otherCategory.appendChild(newOption); 
        }
        
    }
}

function displayDetails(){
    console.log("display");
    let selectedCategory = activityCategory.value;
    let selectedName;
    

    if (selectedCategory === "Adventurous") {
        selectedName = adventurousCategory.value;
    } else if (selectedCategory === "Arts & Crafts") {
        selectedName = artsAndCraftsCategory.value;
    } else if (selectedCategory === "Museums") {
        selectedName = museumsCategory.value;
    } else if (selectedCategory === "Wine Tastings") {
        selectedName = wineTastingCategory.value;
    } else if (selectedCategory === "Other") {
        selectedName = otherCategory.value;
    } else {
    
        return;
    }
   
    
    if(selectedName){
    for(let i = 0; i < activities.length; i++){
        if(activities[i].name === selectedName && activities[i].category === selectedCategory){
            messageWithDetails.innerHTML = `
            Description: ${activities[i].description}<br>
            Location: ${activities[i].location} <br>
            ID: ${activities[i].id}<br>
            Price: $${activities[i].price.toFixed(2)}`;
           return; 
        }
       
    }

}
messageWithDetails.innerHTML = "";
}

function onSubmitBtn(){
    
}

function onResetBtn(){

}