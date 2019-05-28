(function(){
var list = document.getElementById("list");
entry = document.getElementById("entry");
btnNew = document.getElementById("add")




// eventos
var agregarTarea = function(){
    var tarea = entry.value;
      nuevaTarea = document.createElement("li"),
      enlace = document.createElement("a"),
      contenido = document.createTextNode(tarea);


};
var eliminarTarea = function(){};

btnNew.addeventListener("click", agregarTarea);


for (var i=0; i<=list.children.length;i++){ // childrens elementos li
list.children[i].addEventListener("click",eliminarTarea);
}
}());