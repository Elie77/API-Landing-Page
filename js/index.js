AOS.init();

// Script pour Le menu en version mobile
(function() {
    var mobileMenu = {
        init : function() {
            document.getElementsByClassName("fa-bars")[0].addEventListener('click', function(event){
                var mobile = document.getElementById("nav_mobile");
                var desktop = document.getElementsByTagName("nav")[0];
                if (mobile.style.display === "block") {
                  mobile.style.display = "none";
                  desktop.style.height = "68px";
                } else {
                  mobile.style.display = "block";
                  desktop.style.height = "140px";
                };
            })
        }
    };
    mobileMenu.init();
})();