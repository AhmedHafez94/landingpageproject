/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

let sectionList = document.querySelectorAll(".landing__container");
let navbarList = document.getElementById("navbar__list") 
// console.log(sectionList)
let i = 1 
for (let element of sectionList){
    let liElement = document.createElement("li");
    let anchorElement = document.createElement("a")
    let text = document.getElementById("section" + i).getAttribute("data-nav")
    anchorElement.textContent = text 
    anchorElement.setAttribute("href", "#" + "section" + i)
    liElement.appendChild(anchorElement)
    anchorElement.addEventListener("click", function(evt){
        evt.preventDefault()
        let i = 0
        // console.log("hey")
        element.scrollIntoView({behavior: "smooth"});
         i = i + 1
    })
    navbarList.appendChild(liElement)
    
    i = i + 1
}
const allSections = document.querySelectorAll("section") 

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio){
            // console.log("in the view")
            entry.target.classList.add("your-active-class")
           
        }
        else{
            // console.log("out of the view")
            entry.target.classList.remove("your-active-class")
            
        }
    });
}); 
allSections.forEach(section => {
    observer.observe(section);
});
