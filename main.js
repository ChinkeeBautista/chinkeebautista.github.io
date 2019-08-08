let toggleNavStatus = false;

let toggleNav = function() {
   let getToggle = document.querySelector(".toggle-btn");
   let getToggleMenu = document.querySelector(".toggle-link");

      if (toggleNavStatus === false) {
         getToggle.style.opacity = "0.7";
         getToggleMenu.style.visibility = "visible";
         getToggleMenu.style.height = "100%";

         toggleNavStatus = true;
      }
      else if (toggleNavStatus === true) {
         getToggle.style.opacity = "1";
         getToggleMenu.style.visibility = "hidden";
         getToggleMenu.style.height = "60px";

         toggleNavStatus = false;
      }
}


document.querySelector(".toggle-link").addEventListener('click', function(){
   this.style.visibility = "hidden";
});






