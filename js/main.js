const scroll = new SmoothScroll('.datebar a[href*="#"]', {
  speed: 500
});

const scroll2 = new SmoothScroll('.iconbar a[href*="#"]', {
  speed: 500
});


const scroll3 = new SmoothScroll('.projectlinks a[href*="#"]', {
  speed: 500
});


// dropdown on gallery downloads page

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}


function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}


function myFunction5() {
  document.getElementById("myDropdown5").classList.toggle("show");
}


// close dropdown when click outside of dropdown

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

