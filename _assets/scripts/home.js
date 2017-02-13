//Write JS logic here

  var x = document.getElementById("nav-button");
  var y = document.getElementById("links");
  var name = 'nav-display';
  var prev= 'navigation-right';
  x.addEventListener("click", function(){
    if(y.classList.contains(name)){
      y.classList.remove(name);
    }
    else
      y.classList.add(name);
    });
