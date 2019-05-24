var tasksList
var newTask
var doneTasksList
var unDoneTasksList

tasksList = [
    {text:'tarea 1 - generar variables',isDone:true},
    {text:'tarea 2 - imprimir tareas',isDone:false}
]


var addTask = function(){
    // debugger;
    var entryTask = document.getElementById('entryField')
    var taskText = entryTask.value
    if (taskText !== '' && taskText.length > 2){
        entryTask.value = ''
        tasksList.unshift({text:taskText,isDone:false})
        printItems()
    }


    // var unDoneTasksList = document.getElementById('unDoneTasks')
    
    // var newTask = createItem(taskText,'UnDone')
    // unDoneTasksList.appendChild(newTask)
    // entryTask.value=""
    // // console.log(newTask)
    // // return newTask
}

// var setNode = function(nodeName){
//     var nodeName = document.getElementById(nodeName)
//     nodeName.innerHTML = ''
//     return nodeName
// }

var loadTasks = function(){
    doneTasksList = []
    unDoneTasksList = []
    tasksList.map(function(task){
        debugger;
        if (task.isDone){
            debugger;
            doneTasksList.unshift(task)
            console.log(doneTasksList)
        } else{
            console.log(unDoneTasksList)
            debugger;
            unDoneTasksList.push(task)
            console.log(unDoneTasksList)  
        }
    })
    return doneTasksList, unDoneTasksList;
}

var keyPress = function (event){
    if(event.code === 'Enter'){
        addTask()
    }
}



var createItem = function(text,itemClass){
    console.log (text , itemClass)
    // debugger;
    var taskDiv = document.createElement('div')
    taskDiv.innerText = text
    taskDiv.classList = itemClass
    var btnTrash = (createBtn('trash','trashIcon far fa-trash-alt'))
    var btnCheck = (createBtn('check','taskStatus fa fa-check'))
    taskDiv.appendChild(btnTrash)
    taskDiv.appendChild(btnCheck)
    return taskDiv
}

var createBtn = function(btnClass,iconClass){
    // debugger;
    var btn = document.createElement('button')
    btn.classList = btnClass
    var icon= document.createElement('i')
    icon.classList = iconClass
    btn.appendChild(icon)
    console.log(btn)
    return btn
}

// var createIcoon = function(iconClass){
//     var icon = 
// }

var printMsgs = function(){
    loadTasks()
    if (!tasksList.length){
        var doneMsg = document.getElementById('doneMsg')
        var unDoneMsg = document.getElementById('unDoneMsg')
        // console.log (doneMsg,unDoneMsg) con esto verificamos que establecemos bien los nodos
        doneMsg.style.display = 'block'
        unDoneMsg.style.display = 'block'
    }else if (!doneTasksList.length){
        var doneMsg = document.getElementById('doneMsg')
        doneMsg.style.display = 'block'
    }else if(!unDoneTasksList.length){
        var unDoneMsg = document.getElementById('unDoneMsg')
        unDoneMsg.style.display = 'block'
    }
    printItems()
}

var printItems = function(){
    debugger;
    var doneList = document.getElementById('doneTasks')
    var unDoneList = document.getElementById('unDoneTasks')
    console.log(doneList,unDoneList)
    doneTasksList.map(function(task){
        createItem(task.text,'done')
    })
    unDoneTasksList.map(function(task){
        createItem(task.text,'unDone')
    })
}

var deleteTask = function (){

}