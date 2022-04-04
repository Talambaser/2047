

    /////////// -------------------- Varijabile ---------------------- /////////////////////////
   

    var move = [];
    for (let index = 0; index < 25; index++) {
        move[index] = 0;
        
    }

    
    //////     Napravi nesto da se ne moze pomeriti dok se ne doda broj.... 



    ////////////// ------------------ Radnja ------------------------- ////////////////////////////

    const body = document.querySelector(".main_div");


    for (let index = 0; index < 25; index++) {
        const div = document.createElement("div");
        div.innerHTML = " ";
        div.classList.add("field");
        div.id = index;

        body.appendChild(div);

        div.style.position = "absolute";
        div.style.marginLeft = (index % 5 * 100) + "px";
        div.style.marginTop = Math.floor(index / 5) * 100 + "px";
        div.style.opacity = 0.2;
       
        
    }

    start();
    
    /////////////////////////////////////////////

    function Desno(){
        pomeranjeDesno();
        setTimeout(dodajBroj,200);
        
        
    }

    function Levo(){
        pomeranjeLevo();
        setTimeout(dodajBroj,200);
    }

    function Dole(){
        pomeranjeDole();
        setTimeout(dodajBroj,200);
    }

    function Gore(){
        pomeranjeGore();
        setTimeout(dodajBroj,200);
    }

    
    

    

//////////////////////// -------------------------- Funkcije --------------------------- //////////////////////////



function start(){

    // Math.floor(Math.random() * 24);     ////  rnd 0 - 24
    //  (Math.floor(Math.random() * 2) + 1 ) * 2;   //// rnd 2 ili 4

     let i = 0;
     let index = 0;

     while(i < 3){
         index = Math.floor(Math.random() * 24);
         if(document.getElementById(index).innerHTML == " "){
            document.getElementById(index).innerHTML = (Math.floor(Math.random() * 2) + 1 ) * 2;
            document.getElementById(index).style.opacity = 1;
            i++;
         }
         
         
     }
}

function pomeranjeDesno(){
    // Od poslednje krece for petlja
    // Kad naidje na broj ide do sledeceg u tom redu i gleda da li je isti
    /// Ako jeste broj se brise a ovaj se duplira
    // Bilo bi dobro da se nesto zamuti kad se "spajaju brojevi"
    
    for(var i = 24; i > 0; i--){
        if(document.getElementById(i).innerHTML != " " && i % 5 != 0){
            let j = i -1;
            while(document.getElementById(j).innerHTML == " " && j % 5 != 0){
                j--;
            }
            if(document.getElementById(j).innerHTML == document.getElementById(i).innerHTML){
            document.getElementById(j).innerHTML = parseInt(document.getElementById(j).innerHTML) * 2;
            document.getElementById(i).innerHTML = " ";
            document.getElementById(i).style.transition = "all 0.2s";
            document.getElementById(i).style.opacity = "0.2";

            //Ovo i-- nije dobro 
            // Potrebno je da se preskoci prvi sledeci broj
            i--;
            }
        }
    }

    for(var i = 0; i< 25; i++){

        if(document.getElementById(i).innerHTML != " "){
                for(var j = i + 1; j % 5 != 0 ; j++ ){
                    
                    if(document.getElementById(j).innerHTML == " "){
                        move[i]++;
                    }
                }
            
        }
    }

    for(var i = 24; i >= 0; i--){
        if(move[i] !=0 ){
            var field1 = document.getElementById(i);
            field1.style.transition = "all 0.2s";
            var field1Id = field1.id;
            var field2 = document.getElementById(parseInt(i) + parseInt(move[i]) );
            var field2Id = field2.id;

            field1.style.marginLeft = (i % 5 + move[i]) * 100 + "px";
            
            field1.id = field2Id;
            field2.id = field1Id;

            setMarginById(field2);

            move[i] = 0;
        }
    }


}



function pomeranjeLevo(){


    for(var i = 0; i < 25; i++){
        if(document.getElementById(i).innerHTML != " " && i % 5 != 4){
            let j = i + 1;
            while(document.getElementById(j).innerHTML == " " && j % 5 != 4){
                j++;
            }
            if(document.getElementById(j).innerHTML == document.getElementById(i).innerHTML){
            document.getElementById(j).innerHTML = parseInt(document.getElementById(j).innerHTML) * 2;
            document.getElementById(i).innerHTML = " ";
            document.getElementById(i).style.transition = "all 0.2s";
            document.getElementById(i).style.opacity = "0.2";
            i++;
            }
        }
    }

    for(var i = 1; i < 25; i++){

        if(document.getElementById(i).innerHTML != " " && i % 5 != 0 ){

            
            for(var j = i - 1; j > i - i % 5 - 1; j--){
                if(document.getElementById(j).innerHTML == " "){
                    move[i]++;
                }
            }
            
        }
    }




    for(var i = 0; i < 25; i++){
        if(move[i] !=0 ){
            var field1 = document.getElementById(i);
            field1.style.transition = "all 0.2s";
            var field1Id = field1.id;
            var field2 = document.getElementById(parseInt(i) - parseInt(move[i]) );
            var field2Id = field2.id;

            field1.style.marginLeft = ( (parseInt(field1.style.marginLeft[0]) - parseInt(move[i])) * 100 + "px");
            
            field1.id = field2Id;
            field2.id = field1Id;

            setMarginById(field2);

            move[i] = 0;
        }
    }


}



function pomeranjeDole(){

    console.log("Pomeranje dole");

    for(var i = 19; i > 14; i--){
        for(var j = i; j >= 0; j -= 5){
            var s = j + 5;
            

            while(s + 5 < 25 && document.getElementById(s).innerHTML == " "){
                s += 5;
            }
            
            if(document.getElementById(j).innerHTML == document.getElementById(s).innerHTML &&
            document.getElementById(j).innerHTML != " " &&
            document.getElementById(s).innerHTML != " "
            ){
                console.log("j: " + j + "; s: " + s + ";");
                document.getElementById(j).innerHTML = parseInt(document.getElementById(j).innerHTML) * 2;
                document.getElementById(s).style.opacity = "0.2";
                document.getElementById(s).innerHTML = " ";
                
            }

        }
    }

    

    for(var i = 19; i >= 0; i--){

        if(document.getElementById(i).innerHTML != " " ){

            
            for(var j = i; j < 25; j += 5){
                if(document.getElementById(j).innerHTML == " "){
                    move[i]++;
                }
            }
            
        }
    }




    for(var i = 24; i >= 0; i--){
        if(move[i] !=0 ){
            var field1 = document.getElementById(i);
            field1.style.transition = "all 0.2s";
            var field1Id = field1.id;
            var field2 = document.getElementById(parseInt(i) + parseInt(move[i]) * 5 );
            var field2Id = field2.id;

            
            field1.style.marginTop = ( (parseInt(field1.style.marginTop[0]) + parseInt(move[i])) * 100 + "px");
            

            field1.id = field2Id;
            field2.id = field1Id;
            
            setMarginById(field2);

            move[i] = 0;
        }
    }


}





function pomeranjeGore(){
 
    console.log("Pomeranje gore");
    for(var i = 5; i < 10; i++){
        for(var j = i; j < 25; j += 5){
           
            
            if(document.getElementById(j).innerHTML != " "){
                var s = j - 5;
                while(s - 5  > -1 && document.getElementById(s).innerHTML == " "){
                    s -= 5;
                }
                
                if(document.getElementById(j).innerHTML == document.getElementById(s).innerHTML){
                    document.getElementById(j).innerHTML = parseInt(document.getElementById(j).innerHTML) * 2; 
                    document.getElementById(s).innerHTML = " " ;
                    document.getElementById(s).style.opacity = "0.2";
                }
            }
        }
    }




    for(var i = 5; i < 25; i++){

        
        if(document.getElementById(i).innerHTML != " " ){

            
            for(var j = i % 5; j < i; j += 5){
                if(document.getElementById(j).innerHTML == " "){
                    move[i]++;
                }
            }
            
        }
    }




    for(var i = 5; i < 25; i++){
        if(move[i] !=0 ){
            var field1 = document.getElementById(i);
            field1.style.transition = "all 0.2s";
            var field1Id = field1.id;
            var field2 = document.getElementById(parseInt(i) - parseInt(move[i]) * 5 );
            var field2Id = field2.id;

            field1.style.marginTop = ( (parseInt(field1.style.marginTop[0]) - parseInt(move[i])) * 100 + "px");
            
            field1.id = field2Id;
            field2.id = field1Id;

            setMarginById(field2);

            move[i] = 0;
        }
    }


}


function dodajBroj(){

    var niz = [];
    var broj = (Math.floor(Math.random() * 2) + 1) * 2;

    for(var i = 0; i < 25; i++){
        if(document.getElementById(i).innerHTML == " "){
            niz.push(i);
        }
    }

    var rndIndex = Math.floor(Math.random() * niz.length)
    var polje = document.getElementById(niz[rndIndex]);

    setMarginById(polje);

    polje.innerHTML = broj;
    polje.style.opacity = 1;

    niz = [];
    
    
}


function setMarginById(e){
    e.style.transition = "none";
    e.style.marginLeft = parseInt(e.id) % 5 * 100 + "px";
    e.style.marginTop = parseInt(e.id / 5) * 100 + "px";
    

}


//Izracunati koliko treba da se pomeri
    // Mozda niz koji sadrzi one koje treba pomeriti i koliko???
    //Izracunati koliko je praznih polja i kad nestane praznih da li je prvo popunjeno isti broj kao ona koji pomeram
    // ako jese pomeriti za jos jedno i duplirati 
// pomeriti
    // zameniti ideve
// Pomeriti sve odjednom ???????



