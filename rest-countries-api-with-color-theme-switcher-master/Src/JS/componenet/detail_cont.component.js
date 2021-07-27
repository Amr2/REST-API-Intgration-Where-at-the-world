const D_Data_Form = async (Alpha_code , from_home)=>{

    // GET The Countery Detail from The API
    const url = new URL(`https://restcountries.eu/rest/v2/alpha/${Alpha_code}`);
    const params = {fields:"nativeName;name;borders;flag;population;region;capital;subregion;topLevelDomain;currencies;languages"};
    let C_D_obj ;

    url.search = new URLSearchParams(params).toString();

    C_D_obj = await fetch(url).then(d => d.json());

    // Element Needed 
    const detail_cont = document.querySelector(".detail-cont");

    // Pre_creation
    detail_cont.children[1].querySelector("div").querySelectorAll(".group").forEach(elem => elem.innerHTML="")
    detail_cont.children[1].querySelector(".count-options").innerHTML=""

    
    // grouping info 
    const G1 = [["Native Name:",C_D_obj.nativeName],["Population:",C_D_obj.population],["Region:",C_D_obj.region],["Sub Region:",C_D_obj.subregion],["Capital:",C_D_obj.capital]]
    const G2 = [["Top Level Domain:",C_D_obj.topLevelDomain],["Currencies:",C_D_obj.currencies[0].name],["Languages:",C_D_obj.languages.map( elem => elem.name)]]
    
    // Fromming the page 
    
        // change Flage
    detail_cont.children[0].src = C_D_obj.flag;

        // change Country Name
    detail_cont.children[1].querySelector("h1").innerText = C_D_obj.name;

        // Set All info
    G1.map( Info =>{
        const info_cont = document.createElement("div");
        info_cont.classList.add("info-cont");

        info_cont.innerHTML = `<label>${Info[0]}</label><span>${Info[1]}</span>`;

        detail_cont.children[1].querySelector("div").querySelectorAll(".group")[0].append(info_cont);
    }) 

    G2.map( Info =>{
        const info_cont = document.createElement("div");
        info_cont.classList.add("info-cont");

        info_cont.innerHTML = `<label>${Info[0]}</label><span>${Info[1]}</span>`;

        detail_cont.children[1].querySelector("div").querySelectorAll(".group")[1].append(info_cont);
    }) 


        // Set The Border Countries
    C_D_obj.borders.map( async(B_count) =>{
        if(B_count ==="ISR") B_count = "PSE";
        const c_btn = document.createElement("button");

        //  get the name of the border count
        const url = new URL(`https://restcountries.eu/rest/v2/alpha/${B_count}`);
        const params = {fields:"name"};
        let   country_name;
        url.search = new URLSearchParams(params).toString();
        country_name = await fetch(url).then(d => d.json());

        c_btn.innerText = country_name.name;
        c_btn.classList.add("btn");
        c_btn.addEventListener("click",()=>{
            D_Data_Form(B_count , false);
        })

        detail_cont.children[1].querySelector(".count-options").append(c_btn);
    });

    Control_view(from_home);
}