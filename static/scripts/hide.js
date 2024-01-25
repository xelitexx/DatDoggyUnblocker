// JavaScript code to hide/show the navbar on scroll
        var prevScrollPos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                document.getElementById("navbar").classList.remove("hidden");
            } else {
                document.getElementById("navbar").classList.add("hidden");
            }
            prevScrollPos = currentScrollPos;
        }
