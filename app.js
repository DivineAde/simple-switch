function myFunction(){
  var x = document.getElementById("light-text");
  if (x.innerHTML === "OFf") {
    x.innerHTML = "ON"
  }else{
    x.innerHTML = "OFF"
  }
  var element = document.body;
  element.classList.toggle("light-on");
}