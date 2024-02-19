





let tasks = [];



// yeni task yarat

function yeniTaskYarat(text) {
  let task = {
    text,
    completed: false,
  };

  tasks.push(task);

  goster(task)
}

// aktiv olan task

function completeActivate(index) {
  const task = tasks[index];
  if(task){
    task.completed = !task.completed;
  }
  goster(tasks)
}

function removeTask(index) {
   tasks.splice(index, 1);
   goster(tasks);
  }



 

function clearCompleted() {
  tasks = tasks.filter(task => !task.completed);
  goster(tasks);
}

// arraya deymeden 
function hamisiGoster() {
    goster(tasks);
}

// silmeden aktivleri secib gonderecek
function aktivleriGoster() {
    const aktivler = tasks.filter(task => !task.completed);
    goster(aktivler);


}

// bitmis olanlar

function bitmishleriGoster() {
    const bitmisler = tasks.filter(task => !task.completed);
    goster(bitmisler);
}

//ne gonderilirse globala deymeden goster arrayi
function goster(t) {
    const tasksDiv = document.querySelector('#tasks')
    tasksDiv.innerHTML = '';

    for (let i in t){
        const task = t[i];
        const div = document.createElement('div');

        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'x';
        removeBtn.addEventListener('click', () => {
            removeTask(i);
        })



        div.innerHTML = task.text;
        if (task.completed){
            div.style.textDecoration = 'line-through';
        }
        tasksDiv.append(div);

        div.addEventListener('click',function(){
            completeActivate(i);

        })

    }
}


//doldur

// function doldur (){
//     for (let i = 0; i < 10; i++){
//         yeniTaskYarat(`tapsiriq ${i}`); //
//     }
// }
 document.querySelector('#add').addEventListener('click', function (){
    const taskInput = document.querySelector('.task');
    if (!taskInput.value.trim()){
        alert('Please enter task ');
       
    }else {
        yeniTaskYarat(taskInput.value);
        taskInput.value = '';
    }
 })

 document.querySelector('#all').addEventListener('click',hamisiGoster);
 document.querySelector('#completed').addEventListener('click',bitmishleriGoster);
 document.querySelector('#active').addEventListener('click',aktivleriGoster);
