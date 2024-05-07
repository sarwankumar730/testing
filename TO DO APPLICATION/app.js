
var getUl = document.querySelector('#ul') 

function addTodo(){
    var getInp = document.querySelector("#inp")
    var createli = document.createElement('li')
    var liText = document.createTextNode(getInp.value)
    createli.appendChild(liText)
    getUl.appendChild(createli)

    getInp.value = ''

    var delBtn = document.createElement('button')
    var delText = document.createTextNode('Delete')
    delBtn.appendChild(delText)
    createli.appendChild(delBtn)

    delBtn.setAttribute("onclick","delFunc(this)")
    var editBtn = document.createElement('button')
    var editText = document.createTextNode('edit')
    editBtn.appendChild(editText)
    createli.appendChild(editBtn)

    editBtn.setAttribute("onclick","editFunc(this)")

}

function deleteAll(){
    getUl.innerHTML = ''
}

function delFunc(e){
    e.parentNode.remove()
}

function editFunc(e){
    var a = prompt("Enter updated value", e.parentNode.firstChild.textContent)
    e.parentNode.firstChild.textContent = a

    }












