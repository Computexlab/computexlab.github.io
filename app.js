// Get video elements by their IDs
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

//me
// Get new service video elements by their IDs
const serviceVideo1 = document.getElementById('serviceVideo1');
const serviceVideo2 = document.getElementById('serviceVideo2');
const serviceVideo3 = document.getElementById('serviceVideo3');
const serviceVideo4 = document.getElementById('serviceVideo4');
const serviceVideo5 = document.getElementById('serviceVideo5');
const serviceVideo6 = document.getElementById('serviceVideo6');
const serviceVideo7 = document.getElementById('serviceVideo7');
const serviceVideo8 = document.getElementById('serviceVideo8');


// Sidebar elements //
const sideBar = document.querySelector('.sidebar'); // Get the sidebar element
const menu = document.querySelector('.menu-icon'); // Get the menu icon (hamburger)
const closeIcon = document.querySelector('.close-icon'); // Get the close icon for the sidebar

// Hover sign element for project videos
const hoverSign = document.querySelector('.hover-sign');

// Create a list (array) of the project video elements
const videoList =[video1, video2, video3,serviceVideo1, serviceVideo2, serviceVideo3, serviceVideo4,
    serviceVideo5, serviceVideo6, serviceVideo7, serviceVideo8];
//me

// Loop through each video in the videoList
videoList.forEach (function(video){
    // Add an event listener for when the mouse hovers over a video
    video.addEventListener("mouseover", function(){
        video.play(); // Play the video
        hoverSign.classList.add("active"); // Add 'active' class to hide the hover sign
    });
    // Add an event listener for when the mouse moves out of a video
    video.addEventListener("mouseout", function(){
        video.pause(); // Pause the video
        hoverSign.classList.remove("active"); // Remove 'active' class to show the hover sign
    });
});

// Sidebar functionality //

// Add an event listener for when the menu icon is clicked
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar"); // Remove class that might be closing it
    sideBar.classList.add("open-sidebar"); // Add class to trigger open animation
});

// Add an event listener for when the close icon in the sidebar is clicked
closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar"); // Remove class that opens it
    sideBar.classList.add("close-sidebar"); // Add class to trigger close animation
});








