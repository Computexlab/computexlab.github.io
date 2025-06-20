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
const sideBar = document.querySelector('.sidebar');
console.log("Sidebar element:", sideBar);

const menu = document.querySelector('.menu-icon');
console.log("Menu icon element:", menu);

const closeIcon = document.querySelector('.close-icon');
console.log("Close icon element:", closeIcon);

// Get all navigation links and social icons within the sidebar
const sidebarNavLinks = document.querySelectorAll('.sidebar ul li a');
console.log("Sidebar Nav Links:", sidebarNavLinks);

const sidebarSocialIcons = document.querySelectorAll('.sidebar .social-sidebar a');
console.log("Sidebar Social Icons:", sidebarSocialIcons);


// Function to close the sidebar
function closeTheSidebar() {
    if (sideBar) { // Check if sidebar element exists
        sideBar.classList.remove("open-sidebar");
        sideBar.classList.add("close-sidebar");
        console.log("Sidebar closed. Classes:", sideBar.classList);
    }
}

// Sidebar functionality //

// Add an event listener for when the menu icon is clicked
if (menu && sideBar) {
    menu.addEventListener("click", function(){
        console.log("Menu icon clicked!");
        sideBar.classList.remove("close-sidebar");
        sideBar.classList.add("open-sidebar");
        console.log("Sidebar classes after open:", sideBar.classList);
    });
} else {
    console.error("Menu icon or Sidebar element not found for open action!");
}

// Add an event listener for when the close icon in the sidebar is clicked
if (closeIcon) { // Only need closeIcon for this specific listener
    closeIcon.addEventListener("click", function(){
        console.log("Close icon clicked!");
        closeTheSidebar(); // Use the new function
    });
} else {
    console.error("Close icon element not found!");
}


// Add event listeners to all sidebar navigation links
if (sidebarNavLinks.length > 0) {
    sidebarNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log("Sidebar navigation link clicked:", this.href);
            closeTheSidebar();
            // Optional: If your links are for same-page anchors,
            // you might want to prevent default and handle smooth scrolling here,
            // but for now, let's assume they are standard links or will be handled by the browser.
        });
    });
} else {
    console.warn("No sidebar navigation links found with selector '.sidebar ul li a'");
}

// Add event listeners to all sidebar social icons
if (sidebarSocialIcons.length > 0) {
    sidebarSocialIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            console.log("Sidebar social icon clicked");
            closeTheSidebar();
        });
    });
} else {
    console.warn("No sidebar social icons found with selector '.sidebar .social-sidebar a'");
}



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








