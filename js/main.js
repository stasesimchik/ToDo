// document.querySelector('.burger-btn').onclick = function(){
//   var display = document.querySelector('.main__sidebar').style.flexBasis;
//   if(display == 20+'%'){
//     document.querySelector('.main__sidebar').style.flexBasis = 0+'%';
//     document.querySelector('.main__content').style.flexBasis = 100+'%';
//   }else{
//     document.querySelector('.main__sidebar').style.flexBasis = 20+'%';
//     document.querySelector('.main__content').style.flexBasis = 80+'%';
//   }
// };

document.querySelector('.burger-btn').onclick = function(){
  let display = document.querySelector('.main__sidebar').style.display;
  if(display == 'none'){
    document.querySelector('.main__sidebar').style.display = 'block';
  }else{
    document.querySelector('.main__sidebar').style.display = 'none';
    document.querySelector('.main__content').style.flexBasis = 100+'%';
  }
};

let countTask = function(){
  let quantityTask = document.querySelectorAll('.tasks__block')
  let quantity = document.getElementById('quantity');
  quantity.innerHTML = quantityTask.length;
}

let showTasksView = function(){
  document.querySelector('.tasks__view').style.display = 'flex';
}

document.querySelector('.add-btn__text').onclick = function(){
  showTasksView();
  let newTask = document.createElement('div');
  newTask.classList.add('tasks__block');
  newTask.classList.add('task');
  let mainTasks = document.querySelector('.main__tasks');
  mainTasks.appendChild(newTask);
  //task__info
  let taskInfo = document.createElement('div');
  taskInfo.classList.add('tasks__info');
  taskInfo.classList.add('tasks-info');
  newTask.appendChild(taskInfo);

  let taskInfoSpanPriority = document.createElement('span');
  taskInfoSpanPriority.classList.add('task-info__priority');
  // let priority = prompt('Приоритет?');
  // taskInfoSpanPriority.innerHTML = priority;
  taskInfo.appendChild(taskInfoSpanPriority);
  let taskInfoSpanDate = document.createElement('span');
  taskInfoSpanDate.classList.add('task-info__date');
  taskInfo.appendChild(taskInfoSpanDate);

  //task__content
  let taskContent = document.createElement('div');
  taskContent.classList.add('task__content');
  newTask.appendChild(taskContent);
  //svg
  let taskContentSvg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
  taskContentSvg.classList.add('task__circle');
  taskContentSvg.setAttribute('width',72);
  taskContentSvg.setAttribute('height',72);
  taskContent.appendChild(taskContentSvg);
  //svg-circle
  var taskContentSvgCircle = document.createElementNS("http://www.w3.org/2000/svg",'circle');
  taskContentSvgCircle.setAttribute("fill","orange");
  taskContentSvgCircle.setAttribute("r",30);
  taskContentSvgCircle.setAttribute("cx",30);
  taskContentSvgCircle.setAttribute("cy",30);
  taskContentSvg.appendChild(taskContentSvgCircle);
  //description
  let taskDescription = document.createElement('div');
  taskDescription.classList.add('task__description');
  taskContent.appendChild(taskDescription);

  let taskTitle = document.createElement('h4');
  taskTitle.classList.add('task__title');
  taskDescription.appendChild(taskTitle);
  let taskText = document.createElement('p');
  taskText.classList.add('task__text');
  taskDescription.appendChild(taskText);

  //button
  let editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  taskContent.appendChild(editBtn);

  for(i=1; i<=3; i++){
    let editBtnItem = document.createElement('span');
    editBtnItem.classList.add('edit-btn__item');
    editBtn.appendChild(editBtnItem);
  }
  countTask();
};

document.querySelector('.block-view').onclick = function(){
  document.querySelector('.main__tasks').classList.add('main__tasks_block')
  let countTasks = document.querySelectorAll('.tasks__block');
  for(let i=0; i < countTasks.length; i++){
    let item = countTasks[i];
    item.classList.add('tasks__block_block')
    if(countTasks.length > 6){
      item.style.flexBasis = 30 + '%';
    }}

}

document.querySelector('.inline-view').onclick = function(){
  document.querySelector('.main__tasks').classList.remove('main__tasks_block')
  let countTasks = document.querySelectorAll('.tasks__block');
  for(let i=0; i < countTasks.length; i++){
    let item = countTasks[i];
    item.classList.remove('tasks__block_block')
  }

}
