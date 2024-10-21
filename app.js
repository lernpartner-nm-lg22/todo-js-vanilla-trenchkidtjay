const goalElement = document.getElementById('goal');
const buttonElement = document.getElementById('button');
const listElement = document.getElementById('list')

function addgoal() {
    const goal = goalElement.ariaValueMax.trim();
    if (goal === '') {
        alert('Please enter a valid goal');
        return; }
    const liElement = document.createElement('li');
    liElement.textContent = goal;
    listElement.appendChild(liElement);}

// function removegoal(event) {
//     const liElement = event.target.parentElement;
//     listElement.removeChild(liElement);
// }

// listElement.addEventListener('click', removegoal);

// function markGoalDone(event) {
//     const liElement = event.target;
//     liElement.classList.toggle('done');

// listElement.addEventListener('click', markGoalDone);
// buttonElement.addEventListener('click', addgoal);

listElement.addEventListener('click', event => {
    const liElement = event.target;
    liElement.classList.toggle('done');
})

buttonElement.addEventListener('click', _ => {
    const goal = goalElement.value.trim();
    if (goal === '') {
        alert('Please enter a valid goal');
        return;
    }
    const liElement = document.createElement('li');
    liElement.textContent = goal;
    listElement.appendChild(liElement);
})