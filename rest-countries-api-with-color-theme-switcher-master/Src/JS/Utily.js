const Home_page = async ()=>{    
    const url = new URL("https://restcountries.eu/rest/v2/all");
    const params = {fields:"name;capital;region;population;flag;alpha3Code"};
    let countries ;

    url.search = new URLSearchParams(params).toString();

    countries = await fetch(url).then(d => d.json())
    
    countries.forEach( cont => Create_Card(cont));
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
}

window.onload = ()=>{
    Home_page();
};