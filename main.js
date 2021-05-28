function carregar(){
    const data = new Date() 
    const minutos = data.getMinutes();
    const horas = data.getHours();
    const img = document.createElement('img');
    const divImg = document.querySelector("#div_img");
    const divMensagem = document.querySelector("#div_msg");
    const body = document.querySelector("body");

    if(horas >= 0 && horas < 12){
        divMensagem.innerHTML = `<p>Agora são ${horas}:${minutos}</p><p>Bom Dia!</p>`
        img.src = "img/dia.png";
        img.id = "img_dia";
        body.id = "background_dia";
        divImg.appendChild(img);
    } else if(horas >= 12 && horas < 18){
        divMensagem.innerHTML = `<p>Agora são ${horas}:${minutos}</p><p>Boa Tarde!</p>`
        img.src = "img/tarde.png";
        img.id = "img_tarde";
        body.id = "background_tarde";
        divImg.appendChild(img);
    } else {
        divMensagem.innerHTML = `<p>Agora são ${horas}:${minutos}</p><p>Boa Noite!</p>`
        img.src = "img/noite.png";
        img.id = "img_noite";
        body.id = "background_noite";
        divImg.appendChild(img);
    }
}
