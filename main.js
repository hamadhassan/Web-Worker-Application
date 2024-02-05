const worker = new Worker('worker.js');

const sumButtonWithoutWoker = document.getElementById("sumButtonWithoutWoker");
const withoutWorkerTimeElement = document.getElementById("withoutWorkerTime");
const withoutWorkerResultElement = document.getElementById("withoutWorkerResult");

const sumButtonWithtWoker = document.getElementById("sumButtonWithtWoker");
const withWorkerTimeElement = document.getElementById("withWorkerTime");
const withWorkerResultElement = document.getElementById("withWorkerResult");

sumButtonWithoutWoker.addEventListener("click", (event) => {
    const startTime = performance.now();
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
        sum += i;
    }
    const endTime = performance.now();
    const processingTime = endTime - startTime;

    withoutWorkerTimeElement.textContent = `Processing time without worker: ${processingTime.toFixed(2)} milliseconds`;
    withoutWorkerResultElement.textContent = `Result without worker: ${sum}`;
});

let startTime; 

sumButtonWithtWoker.addEventListener("click", (event) => {
    startTime = performance.now();
    worker.postMessage('hello');
});

worker.onmessage = function (message) {
    const endTime = performance.now();
    const processingTime = endTime - startTime;

    withWorkerTimeElement.textContent = `Processing time with worker: ${processingTime.toFixed(2)} milliseconds`;
    withWorkerResultElement.textContent = `Result with worker: ${message.data.sum}`;
};

const bgButtonWithoutWoker = document.getElementById("WithoutWokerbgButton");
bgButtonWithoutWoker.addEventListener('click', event => {
    document.body.style.background = (document.body.style.background !== "green") ? 'green' : 'blue';
});

const bgButtonWithtWoker = document.getElementById("WithWokerbgButton");
bgButtonWithtWoker.addEventListener('click', event => {
    document.body.style.background = (document.body.style.background !== "green") ? 'green' : 'blue';
});