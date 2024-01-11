
var g = document.getElementById('nos');
var count = 0
function fun(){
    alert("fun bro");
}
/*
        g.addEventListener("keypress",function press(event){
            if(event.key === "Enter"){
                window.alert(event.value);
            }
            
        });
   */
        var fc = document.getElementById('fc');
var fe = document.getElementById('fe');
var ff = document.getElementById('ffield');
function add(){
    for(let i=0;i<g.value;i++){
            
        //var lab = document.createElement('label');
        //lab.setAttribute('for','t'+i);
        
        fe.appendChild(document.createTextNode("Number of subjects for semester "+(i+1)));
        var newField = document.createElement('input');
        newField.type = "number";
        newField.name = "ssub "+i;
        newField.id = "s"+i;
        fe.appendChild(newField);
        fe.appendChild(document.createElement("br"));
        fe.appendChild(document.createElement("br"));
        
        
        }
        var buttons = document.createElement("button");
        buttons.textContent = "Enter";
        buttons.className = "btn";
        //buttons.onclick = "addd()";
        buttons.setAttribute('onclick','addd()');
        fe.appendChild(buttons);
        fe.appendChild(document.createElement("br"));
        fe.appendChild(document.createElement("br"));
        }

function calc(gra,cre){
 return gra*cre;
}

function grad(va){
    var grades = ["O","A+","A","B+","B","C+","U"];
    var gp = [10,9,8,7,6,5,0];
    for(let i=0;i<7;i++){
        if(va==grades[i]){
            return gp[i];
        }
    }

}

function cgpa(){
    var table = document.createElement("table");
    table.setAttribute("border",1);
    var tr = document.createElement("tr");
    var th1 = document.createElement("th");
    th1.innerHTML = "Semester";
    var th2 = document.createElement("th");
    th2.innerHTML = "GPA";
    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr);

    var ttc = 0;
    var tcre = 0;
    for(let i=0;i<g.value;i++){
        var sem = document.getElementById("s"+i);
        var temp = 0;
        var tcred = 0;
        for(let j=0;j<sem.value;j++){
            var ss = document.getElementById("grade"+i+""+j);
            var cc = document.getElementById("credit"+i+""+j);
            var se = grad(ss.value);
            var mul = calc(se,cc.value);
            //document.writeln(se + " " +mul);
            temp = temp + mul;
            tcred = tcred + parseInt(cc.value);
            tcre = tcre + parseInt(cc.value);
            //ttc = ttc + parseInt(cc.value);
    
        }
        //document.writeln(temp + " " +tcred);
        //fe.appendChild(document.createTextNode("Semester "+(i+1)+" GPA:"+(temp/tcred).toFixed(3)));
        //fe.appendChild(document.createElement("br"));
        //fe.appendChild(document.createElement("br"));

        tr = document.createElement("tr");
    th1 = document.createElement("td");
    th1.innerHTML = "Semester " + (i+1) ;
    th2 = document.createElement("td");
    th2.innerHTML = (temp/tcred).toFixed(3);
    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr);
        //ttc = ttc + (temp/tcred).toFixed(3);
        ttc = ((ttc*(tcre-tcred) + ((temp/tcred).toFixed(3))*tcred)/tcre).toFixed(3);
    }
    //fe.appendChild(document.createTextNode("CGPA:"+(ttc/g.value)));
    
    fe.appendChild(table);
    fe.appendChild(document.createElement("br"));
    //fe.appendChild(document.createElement("br"));
    fe.appendChild(document.createTextNode("CGPA:"+((ttc))));
    
     }

function addd(){
    for(let i=0;i<g.value;i++){
        var sem = document.getElementById("s"+i);
        fe.appendChild(document.createTextNode("Semester "+(i+1)));
        fe.appendChild(document.createElement("br"));
        fe.appendChild(document.createElement("br"));
        for(let j=0;j<sem.value;j++){

    fe.appendChild(document.createTextNode("Enter name of subject "+(j+1)));
    var newField = document.createElement('input');
    newField.type = "text";
    newField.name = "sub "+i+""+j;
    newField.id = "sub "+i+""+j;
    fe.appendChild(newField);
    fe.appendChild(document.createElement("br"));
    fe.appendChild(document.createElement("br"));

    fe.appendChild(document.createTextNode("Enter Grade"));
    var newFiel = document.createElement('select');
     var newFie = document.createElement('option');
      var newFi = document.createElement('option');
      var newFF = document.createElement('option');
      var newF = document.createElement('option');
      var newG = document.createElement('option');
      var newH = document.createElement('option');
      var newI = document.createElement('option');
      var newJ = document.createElement('option');
    //newFiel.type = "text";
    newFiel.name = "grade"+i+""+j;
    //newFiel.id = "grade"+i+""+j;
    newFie.text = "--";
    newFie.id = "--";
    newFi.text = "O";
    newFi.id = "O"+i+""+j;
    newFF.text = "A+";
    newFF.id = "A+"+i+""+j;
    newF.text = "A";
    newF.id = "A"+i+""+j;
    newG.text = "B+";
    newG.id = "B+"+i+""+j;
    newH.text = "B";
    newH.id = "B"+i+""+j;
    newI.text = "C+";
    newI.id = "C+"+i+""+j;
    newJ.text = "U";
    newJ.id = "U"+i+""+j;

    newFiel.id = "grade"+i+""+j;
newFiel.options.add(newFie);
newFiel.options.add(newFi);
newFiel.options.add(newFF);
newFiel.options.add(newF);
newFiel.options.add(newG);
newFiel.options.add(newH);
newFiel.options.add(newI);
newFiel.options.add(newJ);
    fe.appendChild(newFiel);
    //fe.appendChild(newFie);
     //fe.appendChild(newFi);
    fe.appendChild(document.createElement("br"));
    fe.appendChild(document.createElement("br"));
    fe.appendChild(document.createTextNode("Enter Credits"));
    var newFie = document.createElement('input');
    newFie.type = "number";
    newFie.name = "credit"+i+""+j;
    newFie.id = "credit"+i+""+j;
    fe.appendChild(newFie);
    fe.appendChild(document.createElement("br"));
    fe.appendChild(document.createElement("br"));
        }
    }
    var butto = document.createElement("button");
        butto.textContent = "Enter";
        butto.className = "bto";
        //buttons.onclick = "addd()";
        butto.setAttribute('onclick','cgpa()');
        fe.appendChild(butto);
        fe.appendChild(document.createElement("br"));
        fe.appendChild(document.createElement("br"));
}




function assign(){
    for(let i=0;i<g.value;i++){
        var ele = document.getElementsByName("ssub"+i);

    ff.appendChild(document.createTextNode("Enter name of subject "+(i+1)));
    var newF = document.createElement('input');
    newF.type = "text";
    newF.name = "sub "+j;
    ff.appendChild(newF);
    ff.appendChild(document.createElement("br"));

    ff.appendChild(document.createTextNode("Enter Mark"));
    var newFiel = document.createElement('input');
    newFiel.type = "number";
    newFiel.name = "mark "+i;
    ff.appendChild(newFiel3);
    ff.appendChild(document.createElement("br"));
    }
}
/*
  function press(event){
    if(event.key === "Enter"){
        if(count<1){
        //alert(g.value);
        for(let i=0;i<g.value;i++){
            
            //var lab = document.createElement('label');
            //lab.setAttribute('for','t'+i);
            ff.appendChild(document.createTextNode("Number of subjects for semester "+(i+1)));
            var newField = document.createElement('input');
            newField.type = "number";
            newField.name = "ssub "+i;
            newField.id = i
            ff.appendChild(newField);
            ff.appendChild(document.createElement("br"));
            /*
            for(let j=0;j<i.value;j++){
            ff.appendChild(document.createTextNode("Enter name of subject "+(i+1)));
            var newF = document.createElement('input');
            newF.type = "text";
            newF.name = "sub "+j;
            ff.appendChild(newF);
            ff.appendChild(document.createElement("br"));

            ff.appendChild(document.createTextNode("Enter Mark"));
            var newFiel = document.createElement('input');
            newFiel.type = "number";
            newFiel.name = "mark "+i;
            ff.appendChild(newFiel3);
            ff.appendChild(document.createElement("br"));
            }
            
            //newField.setAttribute('type','number');
            //newField.type = "text";
            //newField.setAttribute('name',"t"+i);
           // ffield.appendChild(lab);
            //ffield.appendChild(newField);
            //document.write("hello"+i);
            */
        /*}
        var buttons = document.createElement("button");
        buttons.textContent = "hello";
        buttons.className = "btn";
        fe.appendChild(buttons);
        count = count + 1;
        }
    }
    }
  */

/*
var g = document.getElementById('nos');
g.onkeydown = function(event){
    if(event.key === 'Enter'){
        alert(g.value);
    }
}
*/