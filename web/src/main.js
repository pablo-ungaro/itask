const btn = document.getElementById('add-btn')
btn.addEventListener('click', (e) => {
  const estudante = document.getElementById('template').cloneNode(true)
  estudante.style.display = 'block'
  estudante.querySelector('div').textContent = document.getElementById('nome-estudante').value
  document.querySelector('[data-js="estudantes"]').append(estudante)
})

function addTarefa(e) {
  const novaTarefa = document.createElement('li')
  novaTarefa.textContent = e.parentNode.querySelector('.new-task').value
  e.parentNode.querySelector('ol').append(novaTarefa)
}
