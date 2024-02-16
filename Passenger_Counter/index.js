let counterEl = document.getElementById('cnt');
let prevEntryEl = document.getElementById('prev-entry');
let counter = 0;

function increment() {
    counter++;
    counterEl.textContent = counter;
}

function decrement() {
    counter--;
    counterEl.textContent = counter;
}

function save() {
    prevEntryEl.textContent = "Previous entries: " + counter;
}

function reset() {
    counter = 0;
    counterEl.textContent = 0;
}
