const Create_Card = (C_obj)=>{
    let img , h3 ,min_detail;

    const card_cont = document.querySelector(".cont");
    const card      = document.createElement("div");
    img             = document.createElement("img");
    h3              = document.createElement("h3");
    min_detail      = document.createElement("div");

    if(C_obj.name.length > 24 ){
        C_obj.name = C_obj.name.slice(0, 21).concat('...');
    }

    // THis is my freedom. you have the right to discuss with me to prove i am wrong but till then I have my own right to do what ever i see RIGHT. 
    // Have a nice Day :D.

    if(C_obj.name === "Israel"){
        C_obj.name       = `<del>${C_obj.name}</del> Palestine`
        C_obj.flag       = "https://restcountries.eu/data/pse.svg"
        C_obj.alpha3Code = "PSE";
    }

    min_detail.innerHTML = `<p><b style="font-wieght:300">population</b>: <span>${C_obj.population}</span></p><p><b style="font-wieght:300">Regain</b>: <span>${C_obj.region}</span></p><p><b style="font-wieght:300">capital</b>: <span>${C_obj.capital}</span></p>`;
    h3.innerHTML = C_obj.name;
    img.src = C_obj.flag;

    min_detail.classList.add("min-detail");
    card.classList.add("card");

    card.addEventListener("click", ()=>{
        D_Data_Form(C_obj.alpha3Code,true);
    });


    [img , h3 , min_detail].forEach( elem =>{
        card.append(elem);
    });
    card_cont.append(card);

}
