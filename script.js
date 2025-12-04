function showSection(id) {
document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
document.getElementById(id).style.display = 'block';
}


document.addEventListener('DOMContentLoaded', () => showSection('home'));