//Write JS logic here

  var y = document.getElementById("links");
  var name = 'nav-display';
  var prev= 'navigation-right';
  function menu(){
console.log("hellllllloooo");
    if(y.classList.contains(name)){
      console.log("in if condition",y.classList.contains(name));
      y.classList.remove(name);
    }
    else{
      console.log("in else condition", y.classList.contains(name));
      y.classList.add(name);
    }

    }
