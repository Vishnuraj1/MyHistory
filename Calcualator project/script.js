function display(val){
    document.getElementById("screen").value+=val
}
function clearDisplay(){
    document.getElementById('screen').value=""
}
function equalDisplay(){
    var text=document.getElementById("screen").value
    result=eval(text)
    document.getElementById("screen").value=result
}
function delDisplay(){
var input=document.getElementById('screen')
    input.value=input.value.substring(0,input.value.length -1)
}  