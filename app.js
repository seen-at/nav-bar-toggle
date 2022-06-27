// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// adding show-links class to 'ul' element shows the toggle by default
// clicking will add and show the class, clicking again removes it
navToggle.addEventListener("click", function () {
    // shows the classes present in the links
    // console.log(links.classList)

    // checks if a certain class is present or not
    // console.log(links.contains('random')) shows false
    // console.log(links.contains('links')) shows true

    /* if (links.classList.contains('show-links')) {
        links.classList.remove('show-links');
    }
    else {
        links.classList.add('show-links');
    } */
    links.classList.toggle('show-links');
})