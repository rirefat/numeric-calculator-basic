function clearAll(){
    document.getElementById('display').value ="";
}

function calculate(input){
    let num = document.getElementById('display').value += input;
}
function result (number){
    let output = document.getElementById('display').value;
    let finalOutput = eval(output);
    document.getElementById('display').value = finalOutput;
}


function clearOne(){
    display.value = display.value.slice(0,-1); 
}