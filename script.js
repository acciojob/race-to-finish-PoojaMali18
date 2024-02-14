window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const outputDiv = document.getElementById('output');

function getRandomTime() {
    return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
}

// Add your promises to the array
const promises = [
    new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), getRandomTime())),
    new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), getRandomTime())),
    new Promise(resolve => setTimeout(() => resolve('Promise 3 resolved'), getRandomTime())),
    new Promise(resolve => setTimeout(() => resolve('Promise 4 resolved'), getRandomTime())),
    new Promise(resolve => setTimeout(() => resolve('Promise 5 resolved'), getRandomTime()))
];

Promise.any(promises)
    .then((result) => {
        outputDiv.innerHTML = `<p>${result}</p>`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
