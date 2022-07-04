
      let edad = parseInt (prompt("Ingrese su edad"));
      let genero = prompt ("Ingrese 'F' o 'M'").toLowerCase();
      let aportes = parseInt (prompt("Ingrese sus aportes"));
      
      function puedeJubilarse(edad, genero, aportes){
            if((((edad>=60) && (genero=='f')) || ((edad>=65) && (genero=='m')) && (aportes>=30))){
                  alert("Te podes jubilar!!")} else{
                        alert("Agarra la pala vago")};
                  }
      puedeJubilarse(edad,genero,aportes)
            
            
            
      