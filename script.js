// Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
        function w3_open() {
            document.getElementById("mySidebar").style.width = "100%";
            document.getElementById("mySidebar").style.display = "block"
        }

        function w3_close() {
            document.getElementById("mySidebar").style.display = "none"
        }

        const hamburger = document.getElementById("hamburger");
        const mobile_links = document.getElementById("mySidebar");

        hamburger.addEventListener('click', function() {
            document.getElementById("mySidebar").style.width = "100%";
            document.getElementById("mySidebar").style.display = "block"
            document.getElementById("close-btn").style.display = "block"
            hamburger.style.display = "none";
            document.getElementById("site-header").style.justifyContent = "space-between"
            
            mobile_links.style.color = "var(--blue-dark)"

        })

        const close = document.getElementById("close-btn");

        close.addEventListener('click', function () {
            console.log("close button click event");
            mobile_links.style.display = "none";
            hamburger.style.display = "block";
            close.style.display = "none";
        });
        

        // contact button link to contact page
        const contactButton = document.getElementById("contact-button");

        function handleClick(e) {
            window.location.href = "contact.html"
        }

        contactButton.addEventListener('click', handleClick);

        
        
});
