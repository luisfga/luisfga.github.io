function load(page){
    let xhr = typeof XMLHttpRequest !== 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open("get", page+".html", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let content = document.getElementById("content");
            content.innerHTML = xhr.responseText;
        } 
    }
    xhr.send();
    setSelected(page.split('/')[1]);
}

function isSmallScreen(){
    return window.matchMedia("(max-width: 600px)").matches;
}

function setSelected(selectThis){
    let exSelected = document.getElementsByClassName("selected");
    console.log(exSelected);
    exSelected[0].classList.remove("selected");
    let newSelectedItem = document.getElementById(selectThis);
    newSelectedItem.classList.add("selected");

    if(isSmallScreen()){
        itemsFade(getItemsMenu(), "hidden");
    }
}

function toggleMenu() {
    if (isItemsHidden()){
        itemsFade(getItemsMenu(),"visible");
    } else {
        itemsFade(getItemsMenu(),"hidden");
    }
}

function isItemsHidden(){
    return getItemsMenu()[0].style.visibility==="hidden" 
            || getItemsMenu()[0].style.visibility===""; //fix para primeira amostragem em telas pequenas
}

function getItemsMenu(){
    return document.getElementsByClassName("menu-item");
}

function itemsFade(items, visibility){
    if (visibility === "hidden"){
        for(let i=0; i<items.length;i++){
            items[i].style.setProperty("visibility", "hidden");
            items[i].style.setProperty("opacity", "0");
        }
    } else {
        for(let i=0; i<items.length;i++){
            items[i].style.setProperty("visibility", "visible");
            items[i].style.setProperty("opacity", "1");
        }                
    }

}

window.onload = function() { 
    load('pages/home');
}; 

window.onresize = function() { 
   if (isSmallScreen()){
       itemsFade(getItemsMenu(),"hidden");
   } else {
       itemsFade(getItemsMenu(),"visible");
   }

};