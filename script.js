function inclui_nome() {/* */

    var nome_variavel= prompt("coloque seu nome:");/* */
    
    if(nome_variavel){/* */
        document.getElementById("marcação_nome").innerHTML = nome_variavel;
    }

    else{/* */
        alert ("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }

}

function funcao_resposta(){/* */

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');
    var resp9 = document.querySelector('input[name="quest_9"]:checked');
    var resp10 = document.querySelector('input[name="quest_10"]:checked');

    var contador = 0

    if(resp1 && resp2 && resp3 && resp4){/* */

        if(resp1.value == "correta"){/* */
            document.getElementById(resp_correta_1).innerHTML = "Correta!" 
            contador = +1;
        }

        else{/* */
            document.getElementById(resp_errada_1).innerHTML = "Errada!"
        }

        if(resp2.value == "correta"){/* */
            document.getElementById(resp_correta_2).innerHTMl = "Correta!"
            contador = +1;
        }

        else{/* */
            document.getElementById(resp_errada_2).innerHTML = "Errada!"
        }

        if(resp3.value == "Correta!"){/* */
            document.getElementById(resp_correta_3).innerHTML = "Correta!"
            contador = +1;
        }
    
        else{/* */
            document.getElementById(resp_errada_3).innerHTML = "Errada!"
        }

        if(resp4.value == "Correta!"){/* */
            document.getElementById(resp_correta_4).innerHTML = "Correta!"
            contador = +1;
        }
        else{/* */
            document.getElementById(resp_errada_4).innerHTML = "Errada!"
        }

        if(resp5.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada!"
        }

        if(resp6.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!"
            contador = contador + 1;

        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada!" 
        }

        if(resp7.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!"
            contador = contador + 1;
        }

        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada!"
        }

        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada, uma equação de segundo grau pode ter no máximo duas raízes reais, não podendo ter 0 raízes reais ou infinitas raízes reais."
        }

        if(resp9.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada!" 
        }

        if(resp10.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!"
            contador = contador + 1;

        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada!"
        }

        document.getElementById("quantos_acertos").innerHTML = "Você acertou" + contador + "questões!";
    }

    else{/* */
        alert("não deixe questões em branco!")
    }
}

<script type="text/javascript"></script>/**/
    function mudar(objeto , imagem){
        equacao.scr = imagem
    }