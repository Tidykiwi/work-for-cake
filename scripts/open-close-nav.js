let width = window.innerWidth

let navOpen = false;

function openNav() {

  navOpen = true;
  console.log("TRUE")

  let width = window.innerWidth

  if (width > 600) {

    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("mySidenav").style.paddingTop = "60px";
    document.getElementById("main").style.marginLeft = "242px";
    
  } else if (width < 600) {

    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("mySidenav").style.height = "250px";
    document.getElementById("mySidenav").style.paddingTop = "60px";
    document.getElementById("main").style.marginTop = "250px";
     
  }
}

function closeNav() {

  navOpen = false;
  console.log("FALSE")

  let width = window.innerWidth

  if (width > 600) {

    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("main").style.marginLeft = "-8px";
    
  } else if (width < 600) {

    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("mySidenav").style.paddingTop = "0";
    document.getElementById("main").style.marginTop = "0";
     
  }
}

function navWindowResize() {

  if (navOpen) {

    let width = window.innerWidth

    if (width > 600) {
  
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mySidenav").style.height = "100%";
      document.getElementById("mySidenav").style.paddingTop = "60px";
      document.getElementById("main").style.marginLeft = "242px";
      document.getElementById("main").style.marginTop = "0";
      
    } else if (width < 600) {
  
      document.getElementById("mySidenav").style.width = "100vw";
      document.getElementById("mySidenav").style.height = "250px";
      document.getElementById("mySidenav").style.paddingTop = "60px";
      document.getElementById("main").style.marginTop = "250px";
      document.getElementById("main").style.marginLeft = "0";
       
    }

    console.log("RESIZE")

  } 

}
