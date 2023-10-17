function iclui_nome() {

    var nome_variavel= prompt("coloque seu nome:");
    
    if(nome_variavel){
        document.getElementById("marcação_nome").innerHTML = nome_variavel;
    }

    else{
        alert ("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }

}

function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');

    if(resp1 && resp2){

        if(resp1.value == "correta"){
            document.getElementById(resp_correta_1).innerHTML = "Correta!"  
        }

        else{
            document.getElementById(resp_errada_1).innerHTML = "Errada!"
        }

        if(resp2.value == "correta"){
            document.getElementById(resp_correta2).innerHTMl = "Correta!"
        }

        else{
            document.getElementById(resp_errada2).innerHTML = "Errada!"
        }
    
    }
    
}

<script>
            const a = parseFloat(document.getElementById('coefA').value);
            const b = parseFloat(document.getElementById('coefB').value);
            const c = parseFloat(document.getElementById('coefC').value);
    
            const discriminante = b * b - 4 * a * c;
            
            if(discriminante > 0) {
                const x1 = (-b + math.sqrt(discriminante))/(2*a);
                const x2 = (-b - math.sqrt(discriminante))/(2*a);
                document.getElementById('result').textContent = `Soluções : x1 = $ {x1.toFixed(2)} , x2 = $ {x2.toFixed(2)}`;
            }else if (discriminante === 0){
                const x = -b / (2*a);
                document.getElementById('result').textContent = `Solução unica: x = $ {x.toFixed(2)} `;
            }else{
                document.getElementById('result').textContent = `Não há solução real`; 
            }
</script>