var tasksList
var newTask
var doneTasksList
var unDoneTasksList

tasksList = [
    // {text:'tarea 1 - generar variables',isDone:false},
    // {text:'tarea 2 - imprimir tareas',isDone:true}
]
// var loadTasks = function(){
//     doneTasksList, unDoneTasksList =''
//     tasksList.map(function(task){
//         debugger;
//         if (task.isDone){
//             debugger;
//             doneTasksList.upshift(task)
//             console.log(doneTasksList)
//         } else{
//             debugger;
//             unDoneTasksList.appendChild(task)
//             console.log(unDoneTasksList)
            
//         }
//     })
// }

var addTask = function(){
    debugger;
    var entryTask = document.getElementById('entryField')
    var unDoneTasksList = document.getElementById('unDoneTasks')
    var taskText = entryTask.value
    var newTask = unDoneTasksList.appendChild(createItem(taskText,'UnDone'))
    console.log(newTask)
    return newTask
    
}

var createItem = function(text,itemClass){
    console.log (text , itemClass)
    debugger;
    var taskDiv = document.createElement('div')
    taskDiv.innerText = text
    taskDiv.class = itemClass
    taskDiv.appendChild(createBtn('trash','trashIcon far fa-trash-alt'))
    taskDiv.appendChild(createBtn('check','taskStatus fa fa-check'))
    return taskDiv
}

var createBtn = function(type,iconClass){
    var btn = document.createElement('button')
    btn.class = type
    var icon= btn.appendChild(document.createElement('i'))
    icon.class = iconClass
    console.log(btn)
    return btn
}

// var createIcoon = function(iconClass){
//     var icon = 
// }

var printMsgs = function(){
    if (!tasksList.length){
        var doneMsg = document.getElementById('doneMsg')
        var unDoneMsg = document.getElementById('unDoneMsg')
        // console.log (doneMsg,unDoneMsg) con esto verificamos que establecemos bien los nodos
        doneMsg.style.display = 'block'
        unDoneMsg.style.display = 'block'
    }else{
        // loadTasks()
        
    }
}