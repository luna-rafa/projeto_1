    //Variaveis Constantes
const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans  = document.querySelectorAll('.span-required');
const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//função de erro para validação de dados
function setError(index){
    campos[index].style.border = '3px solid #e63636';
    spans[index].style.display = 'block';
}
//função de remover o erro quando as informações forem colocadas corretamente
function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

//aplicando a função de erro nos blocos
function nameValidate(){
    if(campos [0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
} 
//dando vida a um email valido e validando o mesmo
function emailValidate(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}
//dando vida ao telefone e validando
function telValidate(){
    if(campos[2].value.length < 15)
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }
}

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
    
}
function mensValidate(){
    if(campos [4].value.length < 10)
    {
        setError(4);
    }
    else
    {
        removeError(4);
    }
}
