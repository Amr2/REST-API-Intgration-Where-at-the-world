let bill , tip , ppl_num;

// elements 

let bill_inp = document.getElementById("bill");
let tip_inp  = document.getElementById("custom_tip");
let tip_opts = document.querySelector(".options").querySelectorAll("label");
let ppl_inp  = document.getElementById("ppl_number");
let rest_btn = document.querySelector("button");

let tip_res = document.getElementById("tip_per_person");
let tol_res = document.getElementById("total_per_person");
// Functions
const Calc_Tip= (B , T , Pn)=>{
    let tippp ,tpp;
    tippp = Math.round(((Number(B) * (Number(T)/100))/Number(Pn))*100)/100;
    tpp   = Math.round(((Number(B) / Number(Pn)) + tippp)*100)/100;
    tip_res.innerText = `$${tippp}`;
    tol_res.innerText = `$${tpp}`;
}

const Handle_Radio_inp = ()=>{
    document.querySelectorAll("[type='radio']").forEach(elem => elem.checked = false);
}


[bill_inp , ppl_inp].map((elem)=>{
    elem.addEventListener("change" , ()=>{
        if(elem.value == 0 || elem.value < 0 ){
            elem.value = "0";
            elem.parentElement.children[0].children[1].style.display = "inline-block";
            elem.style.outline = "4px auto hsl(13, 32%, 57%)";
            if(elem.id == "bill"){bill = elem.value;}
            else{ppl_num = elem.value;}
        }
        else{
            if(elem.id == "bill"){bill = elem.value;}
            else{ppl_num = elem.value;}
            elem.parentElement.children[0].children[1].style.display = "";
            elem.style.outline = "";
        }

        if( bill > 0 && tip >= 0  && ppl_num > 0){
            Calc_Tip(bill, tip, ppl_num);
            rest_btn.disabled = false;
        }
    });
});

tip_opts.forEach((elem)=>{
    elem.addEventListener("click" , ()=>{
        tip = document.getElementById(elem.getAttribute("for")).value;
        if( bill > 0 && tip >= 0  && ppl_num > 0){
            Calc_Tip(bill, tip, ppl_num);
            rest_btn.disabled = false;
        }
    })
})

tip_inp.addEventListener("change",()=>{
    if(tip_inp.value < 0){
        tip_inp.value = "";
        tip = 0;
    }
    else {
        tip = tip_inp.value;
        Handle_Radio_inp();
    } 
    
    if( bill > 0 && tip >= 0  && ppl_num > 0){
        Calc_Tip(bill, tip, ppl_num);
        rest_btn.disabled = false;
    }
})

rest_btn.addEventListener("click" , ()=>{
    bill ,tip ,ppl_num = 0;
    [bill_inp , ppl_inp ,tip_inp].map( elem => elem.value = "");
    [tip_res,tol_res].map( elem => elem.innerText = "$0.00");
    Handle_Radio_inp();
    rest_btn.disabled = true ; 
})