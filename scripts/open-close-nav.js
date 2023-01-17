function openNav() {

    let width = window.innerWidth
    console.log(width)

    if (width > 600) {

      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginleft = "250px";
      document.getElementById("mySidenav").style.height = "100%";

    
    } else if (width < 600) {

      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("mySidenav").style.height = "250px";
      document.getElementById("main").style.marginTop = "250px";

     
    }
  
  }
  
  function closeNav() {

    let width = window.innerWidth
    console.log(width)

    if (width > 600) {

      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginleft = "0";
      document.getElementById("main").style.marginTop = "0";
    
    } else if (width < 600) {

      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.height = "100%";
      document.getElementById("main").style.marginTop = "0";

     
    }

  }