 function valor(){
    var smn = document.getElementById('semana')
    cadastrar(semana.value)

    }
    

     function cadastrar(semana){
        var smn = semana
        var materia = document.getElementById('materia').value
        var inicio =  document.getElementById('inicio').value
        var termino =  document.getElementById('termino').value


        // Pega a lista já cadastrada, se não houver vira um array vazio
        var lista_estudos = JSON.parse(localStorage.getItem(smn) || '[]');
        // Adiciona pessoa ao cadastro
        lista_estudos.push({
            materia: materia,
            inicio: inicio,
            termino:termino
        });

        // Salva a lista alterada
        localStorage.setItem(smn, JSON.stringify(lista_estudos));

        console.log('Salva com sucesso.');
        let rota = semana.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        console.log(rota)
        location.href = rota.toLowerCase()+".html"; 
        
     }