/Variaveis Constantes/
    const form   = document.getElementById('form');
    const campos = document.querySelectorAll('.required');
    const spans  = document.querySelectorAll('.span-required');
    const emailRegex = /^\w+([-+.']\w+)@\w+([-.] \w+)\.\w+([\.]\w+)*$/;
    
    /função de erro para validação de dados/
    function setError(index){
        campos[index].style.border = '3px solid #e63636';
        spans[index].style.display = 'block';
    }
    /função de remover o erro quando as informações forem colocadas corretamente/    
    function removeError(index){
        campos[index].style.border = '';
        spans[index].style.display = 'none';
    }
    
    /aplicando a função de erro nos blocos/
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