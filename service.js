const btn=document.querySelector("#yes1");
const order1=document.querySelector(".order1");
const btn1=document.querySelector("#no1");
const subs1=document.querySelector("#submit1");
const call=()=>{
    order1.classList.add("ok");
}

const your=()=>{
    const user=document.getElementById("s1").value;
    var total=user*400;
    if (user>=1) {
        document.getElementById("amount1").innerHTML=`You can pay it through online and offline <br>Rs.${total}-/`;
    }else{
        document.getElementById("amount1").innerHTML="";
    }
    
}
subs1.addEventListener('click',your)

btn.addEventListener('click',call);

const notCall=()=>{
    order1.classList.remove("ok");
}
btn1.addEventListener('click',notCall);

//2nd

const btn2=document.querySelector("#yes2");
const order2=document.querySelector(".order2");
const btn3=document.querySelector("#no2");
const subs2=document.querySelector("#submit2");
const call2=()=>{
    order2.classList.add("ok2");
}

const your2=()=>{
    const user2=document.getElementById("s2").value;
    var total2=user2*300;
    if (user2>=1) {
        document.getElementById("amount2").innerHTML=`You can pay it through online and offline <br>Rs.${total2}-/`;
    }else{
        document.getElementById("amount2").innerHTML="";
    }
}
subs2.addEventListener('click',your2)

btn2.addEventListener('click',call2);

const notCall2=()=>{
    order2.classList.remove("ok2");
}
btn3.addEventListener('click',notCall2);

//3rd
const btn4=document.querySelector("#yes3");
const order3=document.querySelector(".order3");
const btn5=document.querySelector("#no3");
const subs3=document.querySelector("#submit3");
const call3=()=>{
    order3.classList.add("ok3");
}

const your3=()=>{
    const user3=document.getElementById("s3").value;
    var total3=user3*1200;
    if (user3>=1) {
        document.getElementById("amount3").innerHTML=`You can pay it through online and offline <br>Rs.${total3}-/`;
    }else{
        document.getElementById("amount3").innerHTML=``;
    }
   
}
subs3.addEventListener('click',your3)

btn4.addEventListener('click',call3);

const notCall3=()=>{
    order3.classList.remove("ok3");
}
btn5.addEventListener('click',notCall3);

//4th


const btn6=document.querySelector("#yes4");
const order4=document.querySelector(".order4");
const btn7=document.querySelector("#no4");
const subs4=document.querySelector("#submit4");
const call4=()=>{
    order4.classList.add("ok4");
}

const your4=()=>{
    const user4=document.getElementById("s4").value;
    var total4=user4*2000;
    if (user4>=1) {
    document.getElementById("amount4").innerHTML=`You can pay it through online and offline <br>Rs.${total4}-/`;
    }else{
    document.getElementById("amount4").innerHTML="";
    }
}
subs4.addEventListener('click',your4)

btn6.addEventListener('click',call4);

const notCall4=()=>{
    order4.classList.remove("ok4");
}
btn7.addEventListener('click',notCall4);


//5th
const btn8=document.querySelector("#yes5");
const order5=document.querySelector(".order5");
const btn9=document.querySelector("#no5");
const subs5=document.querySelector("#submit5");
const call5=()=>{
    order5.classList.add("ok5");
}

const your5=()=>{
    const user5=document.getElementById("s5").value;
    var total5=user5*2000;
    if (user5>=1) {
        document.getElementById("amount5").innerHTML=`You can pay it through online and offline<br>Rs.${total5}-/`;
    }else{
        document.getElementById("amount5").innerHTML=``;
    }
   
}
subs5.addEventListener('click',your5)

btn8.addEventListener('click',call5);

const notCall5=()=>{
    order5.classList.remove("ok5");
}
btn9.addEventListener('click',notCall5);


//6th
const btn10=document.querySelector("#yes6");
const order6=document.querySelector(".order6");
const btn11=document.querySelector("#no6");
const subs6=document.querySelector("#submit6");
const call6=()=>{
    order6.classList.add("ok6");
}

const your6=()=>{
    const user6=document.getElementById("s6").value;
    var total6=user6*1100;
    if (user6>=1) {
        document.getElementById("amount6").innerHTML=`You can pay it through online and offline <br>Rs.${total6}-/`;
    }else{
        document.getElementById("amount6").innerHTML=``;
    }
   
}
subs6.addEventListener('click',your6)

btn10.addEventListener('click',call6);

const notCall6=()=>{
    order6.classList.remove("ok6");
}
btn11.addEventListener('click',notCall6);


const buttonBar=document.querySelector(".mobile");
const head=document.querySelector(".header");
const display=()=>{
head.classList.toggle("service");
}

buttonBar.addEventListener('click',display);