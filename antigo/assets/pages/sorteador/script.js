function getRndInteger(min, max) {
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;
    return numero;
}

function Revelar(e) {
    e.style.color = 'black';
    e.style.backgroundColor = 'lightpink';
    e.style.borderColor = '#D3D3D3';

}


function sortearNumero() {
    //representa os componentes na tela
    let cqtde = document.getElementById("qtde");
    let cmin = document.getElementById("min");
    let cmax = document.getElementById("max");
    let cnumeros = document.getElementById("numeros");
    let crevelar = document.getElementById("revelar");
    let cordenar = document.getElementById("ordenar");
    let teste = document.getElementById("teste");

    //valores que estavam nos componentes
    let qtde = parseInt(cqtde.value);
    let min = parseInt(cmin.value);
    let max = parseInt(cmax.value);
    //sortear apenas um número
    let numero = 0;
    let texto = "";
    //mostrar os números na tela

    for (let i = 1; i <= qtde; i++) {
        numero = getRndInteger(min, max);

        if (crevelar.checked == false) {
            texto += `<p class = 'numero'>${numero}</p>`;

        }

        else {
            texto += `<p class = 'numerorevelar' onclick='Revelar(this)'>${numero}</p>`;
        }


    }

    cnumeros.innerHTML = texto;



    

        let exib = document.querySelectorAll('#numeros > p');
        for (let j = 0; j < exib.length; j++) {

            let l = exib.item(j+1);
            let array = [];
            while(j < exib.length){
            array = exib.item(j);
            j++
            array.sort();
            console.log(array);
        }
        
        console.log(j);
/*
            if(exib.item(j) > l){
                exib.item(j) = l;
                j++;
            }
            
                console.log(exib.item(j));
                console.log(l);
            
                function comparaNumeros(a,b) { 
                    if (a == b) return 0; 
                    if (a < b) return -1; 
                    if (a > b) return 1; 
                }

                
                comparaNumeros(exib.item(j), l);    
                //console.log(exib.item(j));
                */
                
        }
        
    }


