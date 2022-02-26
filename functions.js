let Damage=0;

function boxMaker(mess){
    let ele=document.createElement("div");
        let nameEle=document.createElement("h3");

    nameEle.innerHTML=mess;
    ele.appendChild(nameEle);
    document.body.appendChild(ele);
}

let button1 = document.createElement("button");
button1.innerHTML = "Fire";
let button2 = document.createElement("button");
    button2.innerHTML = "Ice";
let button3 = document.createElement("button");
    button3.innerHTML = "Poison";

    button1.addEventListener("click",function(){
Damage=Damage+3;
        boxMaker("Dragon Damage = "+ Damage);
    })
button2.addEventListener("click",function(){
    Damage=Damage+1;
    boxMaker("Dragon Damage = "+ Damage);
})
button3.addEventListener("click",function(){
    Damage=Damage+4;
    boxMaker("Dragon Damage = "+ Damage);
})

document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);

boxMaker("Dragon Damage = "+ Damage);

//Woesn't working with code below and I wasn't sure how to fix it
//if Damage (Damage<10){
   // boxMaker("You Win!")
//}

