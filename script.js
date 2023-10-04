let output = document.querySelector('input');

function display(num){

    output.value +=num;
}

function Clear(){
    output.value = "";
}

function delet(){
    output.value = output.value.slice(0,-1);
}

function calc(){
    try{
        output.value = eval(output.value);
    }

    catch(error){
        output.value ="Error";
    }

}
