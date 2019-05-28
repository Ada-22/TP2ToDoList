/*
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

    enlace.appendChild(contenido);
    enlace.setAttribute("href","#");
    nuevaTarea.appendChild(enlace);
    list.appendChild(nuevaTarea);
    
    };
    var eliminarTarea = function(){};
 
    btnNew.addEventListener("click", agregarTarea);
    
    // childrens elementos li */
   // for (var i= 0; i <= list.children.length; i++){ 
   // list.children[i].addEventListener("click",eliminarTarea);
  //  }

   // });*/

    (function(){
        // Variables
        var list = document.getElementById("list"),
            entry = document.getElementById("entry"),
            btnNuevaTarea = document.getElementById("add");
     
        // Funciones
        var add = function(){
            var tarea = entry.value,
                nuevaTarea = document.createElement("li"),
                enlace = document.createElement("a"),
                contenido = document.createTextNode(tarea);
     
            if (tarea === "") {
                entry.setAttribute("placeholder", "Agrega una tarea valida");
                entry.className = "error";
                return false;
            }
     
            // Agregamos el contenido al enlace
            enlace.appendChild(contenido);
            // Le establecemos un atributo href
            enlace.setAttribute("href", "#");
            // Agrergamos el enlace (a) a la nueva tarea (li)
            nuevaTarea.appendChild(enlace);
            // Agregamos la nueva tarea a la lista
            list.appendChild(nuevaTarea);
     
            entry.value = "";
     
            for (var i = 0; i <= list.children.length -1; i++) {
                list.children[i].addEventListener("click", function(){
                    this.parentNode.removeChild(this);
                });
            }
     
        };
        var comprobarInput = function(){
            entry.className = "";
            entry.setAttribute("placeholder", "Agrega tu tarea");
        };
     
        var trash = function(){
            this.parentNode.removeChild(this);
        };
     
        // Eventos
     
        // Agregar Tarea
        btnNuevaTarea.addEventListener("click", agregarTarea);
     
        // Comprobar Input
        entry.addEventListener("click", comprobarInput);
     
        // Borrando Elementos de la lista
        for (var i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener("click", trash);
        }
    });