//function def(){
    // document.getElementById('abc').innerHTML = 'Hello world'
    // document.getElementById('anc').innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe earum ad laboriosam laudantium nostrum repellendus nemo magni asperiores odio quae? Aliquam, commodi'
//     document.getElementById('ttt').innerHTML = 'Hello world'
//     document.getElementById('anc').style.display = 'none'
// }

function abc(ttt){
    document.getElementById('inp').value += ttt 
}
function eq(){
    var a = document.getElementById('inp')
    a.value =eval(a.value)
}
function clr(){
    document.getElementById('inp').value = ''
}
function del(){
   var b=  document.getElementById('inp')
   b.value = b.value.slice(0,-1);
}



