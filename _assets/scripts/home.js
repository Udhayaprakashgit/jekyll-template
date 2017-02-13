//Write JS logic here

  var nav_links = document.getElementById("links");
  var name = 'nav-display';
  var prev= 'navigation-right';
  function menu(){
    if(nav_links.classList.contains(name)){
      nav_links.classList.remove(name);
    }
    else{
      nav_links.classList.add(name);
    }

    }
