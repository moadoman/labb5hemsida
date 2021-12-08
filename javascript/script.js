import {
    getWather
} from './getWether.js';

getWather().then(smhiwidget);

document.getElementById("kontactchioce").addEventListener("click", changeinput);



function changeinput() {

    let select = document.getElementById("kontactchioce");
    let respons = document.getElementById("contactinfo");

    if (select.value == "mail") {
        insertrespons(respons, "email");
    } else if (select.value == "telefon") {
        insertrespons(respons, "tel");
    } else {
        insertrespons(respons, "ignorera");
    }
}

function smhiwidget(data) {
    settext("förut", data[0].time);
    settext("nu", data[1].time);
    settext("sen", data[2].time);

    settext("föruttid", data[0].temp);
    settext("nutid", data[1].temp);
    settext("sentid", data[2].temp);
}

function settext(tagg, data) {
    const temp = document.getElementById(tagg);
    temp.innerHTML = data;
}

function insertrespons(object, typevaluse) {
    object.removeAttribute("type");
    object.removeAttribute("placeholder");
    object.removeAttribute("autocomplete");

    object.setAttribute("type", typevaluse);
    object.setAttribute("placeholder", typevaluse);
    object.setAttribute("autocomplete", typevaluse);
}