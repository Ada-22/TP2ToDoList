/*Eliminar las variables que no se usen. Se pueden declarar en una sola línea, 
pero no necesariamente hay que declararlas a todas primero y después asignarles un valor.*/
var tasksList
var newTask
var doneTasksList
var unDoneTasksList

tasksList = []

var addTask = function(){
    var entryTask = document.getElementById('entryField')
    var taskText = entryTask.value
    if (taskText !== '' && taskText.length > 2){
        entryTask.value = ''
        tasksList.unshift({text:taskText,isDone:false})
        printItems()
    }
}

var deleteTask = function (btn) {
    tasksList.splice(btn.id, 1)
    printItems()
}

var taskToggle = function (btn) {
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
        task.id = myId
        if (task.isDone){
            doneTasksList.unshift(task)
        } else{
            unDoneTasksList.push(task)
    
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
    var btn = document.createElement('button')
    btn.id = taskId
    btn.classList = btnClass
    btn.onclick = function () { btnFunction(this) }
    var icon = createIcon (iconClass)
    btn.appendChild(icon)
    return btn
}

var createIcon = function(iconClass){
    var icon = document.createElement('i')
    icon.classList = iconClass
    return icon
}

var printItems = function(){
    var doneTaskDiv = setNode('doneTasks')
    var unDoneTaskDiv = setNode('unDoneTasks')
    if (tasksList.length){
        loadTasks()
        //Este condicional se podría haber hecho en una función aparte.
        if (unDoneTasksList.length && doneTasksList.length){
            printTasks(unDoneTaskDiv,unDoneTasksList,'unDone')
            printTasks(doneTaskDiv,doneTasksList,'done')
            deleteMsg('unDoneMsg')
            deleteMsg('doneMsg')
        } else if(!unDoneTasksList.length){
            printMsg('unDoneMsg')
            deleteMsg('doneMsg')
            printTasks(doneTaskDiv,doneTasksList,'done')
        } else if(!doneTasksList.length){ //debería ser solo "else"
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
    taskList.map(function(e){
        var text = e.text
        var itemClass = taskClass
        var taskId = e.id
        nodeName.appendChild(createItem(text,itemClass,taskId))
    })
}