const Router_obj = [] //[{ country: object , to_home : bool}]
const Regions    = {
    Asia: "AS" , Africa: "AF" , Europe: "AU" , Americas: "AC" ,Oceania: "OC"
}

const theme_switcher = document.querySelector(".switcher");

const On_Ready = ()=>{

    document.querySelector(".detail-p").children[0].addEventListener("click" , ()=>{
        Control_view(false);
    });

    document.querySelector("input").addEventListener("keyup",()=> {
        if(Number(document.querySelector("input").value[ document.querySelector("input").value.length-1 ])) document.querySelector("input").value = document.querySelector("input").value.substring(0, document.querySelector("input").value.length - 1)
        Filter_Search_Cards("Search")
    })

    theme_switcher.addEventListener("click", ()=>{
        document.body.classList.toggle("Dark-theme")
        theme_switcher.style.opacity  = 0;
        theme_switcher.disabled  = true;
        if(theme_switcher.children[0].getAttribute("name") === "sunny"){
            setTimeout(()=>{
                theme_switcher.children[0].setAttribute("name", "moon");
                theme_switcher.children[1].innerText = "Dark Mode";
                theme_switcher.style.opacity = 1;
            },1000)
            
        }
        else{
            setTimeout(()=>{
                theme_switcher.children[0].setAttribute("name", "sunny");
                theme_switcher.children[1].innerText = "Light Mode";
                theme_switcher.style.opacity = 1;
            },1000)
            }
    })
}



const Filter_Search_Cards = (option)=>{
    if(option === "Search"){
        if(document.querySelector("input").value.length > 0 ){
            document.querySelectorAll("h3").forEach( (elem) =>{
                elem.innerText.match(document.querySelector("input").value[0].toUpperCase() + document.querySelector("input").value.slice(1,document.querySelector("input").value.length) || document.querySelector("input").value) ? Hidde_Card(elem,true) : Hidde_Card(elem,false);
            })
        }
        else{
            document.querySelectorAll("h3").forEach( (elem) =>{
                Hidde_Card(elem,true);
            })
        }
    }
    else{
        if(option.undo){
            document.querySelectorAll(".card").forEach( (elem) =>{
                Hidde_Card(elem.children[0],true);
            })
            return
        }
    
        document.querySelectorAll(".card").forEach( elem =>{
            elem.getAttribute("reg") === option.reg ? Hidde_Card(elem.children[0],true) : Hidde_Card(elem.children[0],false);
        })
    }
}


const Home_page = async ()=>{    
    const url = new URL("https://restcountries.eu/rest/v2/all");
    const params = {fields:"name;capital;region;population;flag;alpha3Code"};
    let countries ;

    url.search = new URLSearchParams(params).toString();

    countries = await fetch(url).then(d => d.json())
    
    countries.forEach( cont => Create_Card(cont,countries));
}



const Control_view = (from_home)=>{

    const Hom_page    = document.querySelector(".main-p");
    const detail_page = document.querySelector(".detail-p");
    if(from_home){
        Hom_page.style.visibility = "hidden";
        Hom_page.style.opacity    = "0";    
        setTimeout(()=>{
            Hom_page.classList.toggle("set_hidden");
            detail_page.classList.toggle("set_hidden");
            setTimeout(()=>{
                detail_page.style.visibility = "visible";
                detail_page.style.opacity    = "1"; 
            },500)
        },510);
    }
    else{
        if(Router_obj[Router_obj.length - 1].to_home){
            detail_page.style.visibility = "hidden";
            detail_page.style.opacity    = "0";    
            setTimeout(()=>{
                detail_page.classList.toggle("set_hidden");
                Hom_page.classList.toggle("set_hidden");
                setTimeout(()=>{
                    Hom_page.style.visibility = "visible";
                    Hom_page.style.opacity    = "1";
                    Router_obj.pop()
                },500)
            },510);

        }
        else{
            D_Data_Form(Router_obj[Router_obj.length - 1].country,Router_obj[Router_obj.length - 1].to_home);
            Router_obj.pop()
        }
    }
}



window.onload = ()=>{
    Home_page();
    On_Ready();
};