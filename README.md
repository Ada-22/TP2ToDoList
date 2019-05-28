# trabajodos
Carmen-Karin-Daiana

VARIABLES
Fondo de la app: #edf0f1
Fondo de la barra principal: #BC3B69
Barra que divide tareas pendientes de completadas: #d8e5e0
Fuente dentro del listado de tareas: #444

Clases:
camelCase, inglés, 

Unidades de Medida:
Fuente General (variable): px
Medidas relativas a fuentes: rem
Medidas de ancho: %
Separaciones horizontales: %
Separaciones Verticales: rem

Imagenes:

Puntos a Evaluar:
	• Maquetado
		○ Que es más indicado para las acciones de onclick, colocar lass imágenes dentro de un a o dentro de un button? La semántica no se ve afectada…
	• Estilos SASS
		○ Estilo a los input 
			§ Por qué no me respeta el color que le coloco al input (texto que escribo dentro del campo?)
		○ Estilo al botón
	• Tipos de datos
		○ String de objetos, para guardar la info de las tareas
			§ taskList [{
			text:'texto de la tarea',
			isDone: true or false,}]
		○ newTask será un string que tendrá el valor del input.value
		○ pendTaskList, variable para almacenar la lista de tareas incompletas (no sabemos si realmente lo usaremos)
		○ doneTaskList, variable para almacenar la lista de tareas completas (no sabemos si realmente lo usaremos)
		○ Como evaluamos si una lista tiene datos o no?, length nos permite saber si hay o no elementos en la lista (lista.length)
		
		
	• Funciones
		○ printTasks
		○ addTask
		○ deleteTask
		○ toggleTask
		○ showMessage, para mostrar o quitar los mensajes de la pantalla cuando las listas de tareas están vacías, definir si esto se hace a partir de las listas de tareas pendTaskList ó doneTaskList
		○ saveTasksLists (localStorage?) OPTIONAL
	
	• Captura de Datos
		○ Almacenamiento de la información en una variable para pasarla como atributo al objeto y mostrarla dinámicamente
			§ Var taskText = document.getElementById('entry').value
		○ Si queremos usar una misma variable en diferentes funciones, debemos declararla afuera al principio del archivo js?
		
	• Detectar eventos en pantalla
		○ onload
		○ onclick
		○ Onkeypress
		
	• Mostrar información nueva en la pantalla
		○ appendChild (agrega hijos al elemento padre)
		○ Lista.push (al final de la lista)
		○ Lista.unshift (en la posición 0 de la lista)

Realización del trabajo:

Realizamos el HTML pricipalmente con todas sus clases y comentarios para poder entendernos entre nosotras.
karin y Carmen siguieron con sass, realizando uno cada uno que despues se unio en uno general.
Se  realizo javascript en las reunionen de clase y juntandonos.
Se mantuvo el mismo diseño, exceptuando tamaños de letra y colores.
