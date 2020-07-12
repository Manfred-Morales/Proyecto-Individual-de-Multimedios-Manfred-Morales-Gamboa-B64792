var listaimg = ["img/foto 1.jpg", "img/foto 2.jpg", "img/foto 3.jpg","img/foto 4.jpg"];

var x=0;

function changeimages(){
    if (x > 3){
        x=0;
    }
    document.getElementById("imgPersonal").src = listaimg[x];
    x++;
}

temporizador =setInterval("changeimages()", 2000);
