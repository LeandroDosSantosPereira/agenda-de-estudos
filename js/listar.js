var linha;
var smn;
function listar(semana){
  document.getElementById('dia').innerHTML = semana
	console.log(semana)
			smn = semana
	        var lista_estudos = JSON.parse(localStorage.getItem(semana));
	        console.log(lista_estudos)
	        var k = '<tbody>'
		    for(i = 0;i < lista_estudos.length; i++){
		        k+= '<tr>';
		        k+= '<td>' + lista_estudos[i].materia + '</td>';
		        k+= '<td>' + lista_estudos[i].inicio + '</td>';
		        k+= '<td>' + lista_estudos[i].termino+ '</td>';
		        k+= '</tr>';
		    }
		    k+='</tbody>';
		    document.getElementById('tableData').innerHTML = k;	
		    clicar()     

	 }
 

	
	
	function clicar(){

		  if (!document.getElementsByTagName || !document.createTextNode) return;
		    var rows = document.getElementById('my_table').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
		    for (i = 0; i < rows.length; i++) {
	        rows[i].onclick = function() {
	        // alert(this.rowIndex - 1 );
	        linha = this.rowIndex - 1 
	          confirmar()          
	        }
	    }
	}


	function confirmar(msg, gfg) { 
      var confirmBox = $("#container"); 
      
      /* Trace message to display */
      confirmBox.find(".message").text(msg); 
      
      /* Calling function */
      confirmBox.find(".yes").unbind().click(function() 
      { 
      confirmBox.hide(); 
      }); 
      confirmBox.find(".yes").click(gfg); 
      confirmBox.show(); 
      
      confirmBox.find(".no").unbind().click(function() 
      { 
      confirmBox.hide(); 
      }); 
      confirmBox.find(".no").click(gfg); 
      confirmBox.show(); 
    } 

    function formulario(msg, gfg) {
      // Verifica se linha do Array é igual ao da linha criada para setar valor nos campos de edição
      var lista_estudos = JSON.parse(localStorage.getItem(smn) || '[]');
      for (var i = 0; i < lista_estudos.length; i++) {
        if(i==linha){
          console.log(lista_estudos[i].materia)
           document.getElementById('materia').value=lista_estudos[i].materia
           document.getElementById('inicio').value=lista_estudos[i].inicio
           document.getElementById('termino').value=lista_estudos[i].termino
        }
      }


     
      var confirmBox = $("#container2"); 
      
      /* Trace message to display */
      confirmBox.find(".message").text(msg); 
      
      /* Calling function */
      confirmBox.find(".yes").unbind().click(function() 
      { 
      confirmBox.hide(); 
      }); 
      confirmBox.find(".yes").click(gfg); 
      confirmBox.show(); 
      
      confirmBox.find(".no").unbind().click(function() 
      { 
      confirmBox.hide(); 
      }); 
      confirmBox.find(".no").click(gfg); 
      confirmBox.show(); 
    } 

    function deletar(){
    	// Pega a lista já cadastrada, se não houver vira um array vazio
        var lista_estudos = JSON.parse(localStorage.getItem(smn) || '[]');
        var lista_delete = []
        // Adiciona pessoa ao cadastro
        for (var i = 0; i < lista_estudos.length; i++) {
        	if (i != linha) {

        		lista_delete.push(lista_estudos[i]);

        		
        	}
        }


        // Salva a lista alterada
        localStorage.setItem(smn, JSON.stringify(lista_delete));

        console.log('Salva com sucesso.');
        let rota = smn.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        location.href = rota.toLowerCase()+".html"; 
    	
    }



     function salvar(){
        var materia = document.getElementById('materia').value
        var inicio =  document.getElementById('inicio').value
        var termino =  document.getElementById('termino').value


        // Pega a lista já cadastrada, se não houver vira um array vazio
        var lista_estudos = JSON.parse(localStorage.getItem(smn) || '[]');
        var lista_update = []

        for (var i = 0; i < lista_estudos.length; i++) {
          if(i != linha){
            lista_update.push(lista_estudos[i])
          }else{

             // Adiciona pessoa ao cadastro
                lista_update.push({
                materia: materia,
                inicio: inicio,
                termino:termino
            });

          }

        }
       

        // Salva a lista alterada
        localStorage.setItem(smn, JSON.stringify(lista_update));

        console.log('Salva com sucesso.');
        let rota = smn.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        console.log(rota)
        location.href = rota.toLowerCase()+".html"; 
        
     }
	

     
     