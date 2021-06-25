function view(value1){
    document.getElementById("value").value+=value1;
}
function empty(){
    document.getElementById("value").value=null;
}
function result(){
    let    M = document.getElementById('value').value
    let N = eval(M)
    document.getElementById('value').value = N
}