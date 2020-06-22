const baseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json"
const container = document.createElement("section");
document.body.appendChild(container);

fetch(` ${baseUrl}`).then(response => response.json()).then(makeupTools => makeupTools.forEach(tool => {
    console.log(tool)
    //wenn wir imag oder link bringen lassen machen wir so:
    const produkt=document.createElement("div")
    produkt.style.backgroundImage=`url(${tool.image_link})`
    container.appendChild(produkt)
    //id erstellen damit wir in css alles änderen können
    produkt.id="produkt"
    const produktInfo=document.createElement("div")
    produkt.appendChild(produktInfo)
    produktInfo.id="produktInfo"
    //alle Peodukte die kein Price haben
    let price;
    if(tool.price==0.0){
    price="Kosetenlos 🥰"
    }else{
        price=tool.price +" $"
    }
    produktInfo.innerHTML=`<h1>${tool.brand}</h1><div id="namePrice"><h2>${tool.name}</h2><h3>${price}</h3></div>`
}))
 