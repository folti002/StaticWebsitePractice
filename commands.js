function addName(){
  let name = document.getElementById("name").value;
  console.log(name);
  document.getElementById("nameList").innerHTML += "<li> " + name + "</li>";
}