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
//     var unDoneTasksList = document.getElementById('unDoneTasks')    
//     var newTask = createItem(taskText,'UnDone')
//     unDoneTasksList.appendChild(newTask)
}

var deleteTask = function (btn) {
    tasksList.splice(btn.id, 1)
    printItems()
}

var taskToggle = function (btn) {
    // debugger;
    tasksList[btn.id].isDone = !tasksList[btn.id].isDone
    printItems()
}

var setNode = function(nodeName){
    var nodeName = document.getElementById(nodeName)
    nodeName.innerHTML = ''
    return nodeName
}

var loadTasks = function(){
    doneTasksList = []
    unDoneTasksList = []
    tasksList.map(function(task, index){
        var myId = index
        // debugger;
        if (task.isDone){
            // debugger;
            doneTasksList.unshift(task)
            doneTasksList.id = myId
            console.log(doneTasksList)
        } else{
            console.log(unDoneTasksList)
            // debugger;
            unDoneTasksList.push(task)
            unDoneTasksList.id = myId
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

var createItem = function(text,itemClass,taskId){
    console.log (text,itemClass)
    // debugger;
    var taskDiv = document.createElement('div')
    taskDiv.innerText = text
    taskDiv.classList = itemClass
    var btnTrash = (createBtn('trash','trashIcon far fa-trash-alt',taskId,deleteTask))
    var btnCheck = (createBtn('check','taskStatus fa fa-check',taskId,taskToggle))
    taskDiv.appendChild(btnTrash)
    taskDiv.appendChild(btnCheck)
    return taskDiv;
}

var createBtn = function(btnClass,iconClass,taskId,btnFunction){
    // debugger;
    var btn = document.createElement('button')
    btn.id = taskId
    btn.classList = btnClass
    // btn.setAttribute = ('onClick', btnFunction(this),false)
    // btn.addEventListener('click',{btnFunction()}, true);
    btn.onclick = function () { btnFunction(this) }
    var icon = document.createElement('i')
    icon.classList = iconClass
    btn.appendChild(icon)
    
    console.log(btn)
    return btn
}

// var createIcoon = function(iconClass){
//     var icon = 
// }

var printItems = function(){
    // debugger;
    var doneTaskDiv = setNode('doneTasks')
    var unDoneTaskDiv = setNode('unDoneTasks')
    if (tasksList.length){
        loadTasks()
                if (unDoneTasksList.length && doneTasksList.length){
            // debugger;
            printTasks(unDoneTaskDiv,unDoneTasksList,'unDone')
            printTasks(doneTaskDiv,doneTasksList,'done')
            deleteMsg('unDoneMsg')
            deleteMsg('doneMsg')
            // doneTasksList.map(function(e){
            //     var text = doneTasksList.text
            //     var itemClass = 'done'
            //     var taskId = doneTasksList.id
            //     createItem(text,itemClass,taskId)
            // })
            // printTasks(unDoneTasksList,'unDone')            
        } else if(!unDoneTasksList.length){
            // debugger;
            printMsg('unDoneMsg')
            deleteMsg('doneMsg')
            printTasks(doneTaskDiv,doneTasksList,'done')
        } else if(!doneTasksList.length){
            // debugger;
            printMsg('doneMsg')
            deleteMsg('unDoneMsg')
            printTasks(unDoneTaskDiv,unDoneTasksList,'unDone')
        }
    } else{
        printMsg('unDoneMsg')
        printMsg('doneMsg')
    }
}

var printMsg = function(msgId){
    var msg = document.getElementById(msgId)
    msg.style.display='block'
}

var deleteMsg = function(msgId){
    var msg = document.getElementById(msgId)
    msg.style.display='none'
}

var printTasks = function(nodeName,taskList,taskClass){
    // debugger;
    // var currentNode = setNode(nodeName)
    taskList.map(function(e){
        var text = e.text
        var itemClass = taskClass
        var taskId = taskList.id
        // debugger;
        nodeName.appendChild(createItem(text,itemClass,taskId))
    })
}