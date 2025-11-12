const form = document.getElementById('playerForm');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const tableBody = document.querySelector('#leaderboard tbody');

// Load saved players from localStorage
let players = JSON.parse(localStorage.getItem('players')) || [];
