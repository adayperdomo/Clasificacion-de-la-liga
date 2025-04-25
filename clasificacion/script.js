"use strict"

pedirAlServidor();

function pedirAlServidor() {
    let xhttp;

    xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        clasificacion(this);
    }
    xhttp.open("GET", "clasificacion.xml");
    xhttp.send();
}

function clasificacion(xml){
    let xmlDoc, table, cds, i;

    xmlDoc = xml.responseXML;
    table = "<table>" +
            "<tr><th>Equipo</th><th>Pts</th><th>PJ</th><th>PG</th><th>PE</th><th>PP</th><th>GF</th><th>GC</th></tr>";
    cds = xmlDoc.getElementsByTagName("team");
    for(i=0; i < cds.length; i++) {
        table += "<tr>" +
                    "<td>" + xmlDoc.getElementsByTagName("rank")[i].childNodes[0].nodeValue + ". " + xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue + "</td>" +
                    "<td>" + xmlDoc.getElementsByTagName("points")[i].childNodes[0].nodeValue + "</td>" + 
                    "<td>" + xmlDoc.getElementsByTagName("played")[i].childNodes[0].nodeValue + "</td>" + 
                    "<td>" + xmlDoc.getElementsByTagName("won")[i].childNodes[0].nodeValue + "</td>" + 
                    "<td>" + xmlDoc.getElementsByTagName("drawn")[i].childNodes[0].nodeValue + "</td>" + 
                    "<td>" + xmlDoc.getElementsByTagName("lost")[i].childNodes[0].nodeValue + "</td>" + 
                    "<td>" + xmlDoc.getElementsByTagName("goals_scored")[i].childNodes[0].nodeValue + "</td>" + 
                    "<td>" + xmlDoc.getElementsByTagName("goals_conceded")[i].childNodes[0].nodeValue + "</td>" + 
                 "</tr>";
    }
    table += "</table>";

    document.getElementById("tabla").innerHTML = table;
}