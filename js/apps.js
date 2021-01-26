"use strict";
var carForm=document.getElementById("carForm");
var carTable=document.getElementById("carTable");
var arrayOfCars=[];
var modelsYear=["2016","2017","2018","2019","2020","2021"];
var category=["BMW","Lexus","Toyota","Tesla","Chevrolet","Hyundai","KIA"];

function cars(name,category,model){
this.name=name;
this.category=category;
this.model=model;
arrayOfCars.push(this);
}
cars.prototype.renderit=function(){
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var img=document.createElement("img");
    if(this.category=="BMW"){
        img.src="../img/bmw.png";
        img.style.width="150px";
    }else if(this.category=="Lexus"){
        img.src="../img/lexus.png";
        img.style.width="150px";
    }else if(this.category=="Toyota"){
        img.src="../img/toyota.png";
        img.style.width="150px";
    }else if(this.category=="Tesla"){
        img.src="../img/tesla.png";
        img.style.width="150px";
    }else if(this.category=="Chevrolet"){
        img.src="../img/chevrolet.png";
        img.style.width="150px";
    }else if(this.category=="Hyundai"){
        img.src="../img/hyundai.png";
        img.style.width="150px";
    }else if(this.category=="KIA"){
        img.src="../img/kia.png";
        img.style.width="150px";    
    }
    td1.appendChild(img);
    // td2.textContent=this.name+this.model;
    td2.innerHTML="Car Name : "+this.name+"<br>Model Year : "+this.model;
    tr.appendChild(td1);
    tr.appendChild(td2);
    carTable.appendChild(tr);
    carTable.appendChild(document.createElement("hr"));

}

function addCar(event){
    event.preventDefault();
    var name=event.target.carName.value;
    var cat=event.target.cars.value;
    var year=event.target.year.value;
    var new_car=new cars(name,cat,year);
    new_car.renderit();
    localStorage.setItem("cars",JSON.stringify(arrayOfCars));
}
function checkandrender(){
    if(localStorage.getItem("cars")){
        arrayOfCars=JSON.parse(localStorage.getItem("cars"));
        for(var i=0;i<arrayOfCars.length;i++){
            var tr=document.createElement("tr");
            var td1=document.createElement("td");
            var td2=document.createElement("td");
            var img=document.createElement("img");
            if(arrayOfCars[i].category=="BMW"){
                img.src="../img/bmw.png";
                img.style.width="150px";
            }else if(arrayOfCars[i].category=="Lexus"){
                img.src="../img/lexus.png";
                img.style.width="150px";
            }else if(arrayOfCars[i].category=="Toyota"){
                img.src="../img/toyota.png";
                img.style.width="150px";
            }else if(arrayOfCars[i].category=="Tesla"){
                img.src="../img/tesla.png";
                img.style.width="150px";
            }else if(arrayOfCars[i].category=="Chevrolet"){
                img.src="../img/chevrolet.png";
                img.style.width="150px";
            }else if(arrayOfCars[i].category=="Hyundai"){
                img.src="../img/hyundai.png";
                img.style.width="150px";
            }else if(arrayOfCars[i].category=="KIA"){
                img.src="../img/kia.png";
                img.style.width="150px";    
            }else{console.log("nono");}
            td1.appendChild(img);
            // td2.textContent=this.name+this.model;
            td2.innerHTML="Car Name : "+arrayOfCars[i].name+"<br>Model Year : "+arrayOfCars[i].model;
            tr.appendChild(td1);
            tr.appendChild(td2);
            carTable.appendChild(tr);
            carTable.appendChild(document.createElement("hr"));
        }
    }
}

checkandrender();
carForm.addEventListener("submit",addCar);

