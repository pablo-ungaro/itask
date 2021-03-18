const btn = document.getElementById('add-btn')

btn.addEventListener('click',  () => {
    if(!document.getElementById('nome-estudante').value) return alert("Campo vazio! Por favor preencher")
    const estudante = document.getElementById('template').cloneNode(true)
    estudante.style.display = 'block'
    estudante.querySelector('h2').textContent = document.getElementById('nome-estudante').value
    document.getElementById('estudantes').append(estudante)
    document.getElementById('nome-estudante').value = ""
})

function addTarefa(e){
    if(!e.parentNode.querySelector('.new-task' ).value) return alert("Campo vazio! Por favor preencher")
    const novaTarefa = document.createElement('li')
    const checkbox = document.createElement('input')
    const text = document.createElement('span')
    text.textContent = e.parentNode.querySelector('.new-task' ).value
    checkbox.setAttribute('type', 'checkbox')
    novaTarefa.append(checkbox, text)
    e.parentNode.parentNode.querySelector('ol' ).append(novaTarefa)
    e.parentNode.querySelector('.new-task' ).value = ""
}
