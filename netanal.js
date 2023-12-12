//
let startTime, endTime;
let imageSize = "";
let image = new Image();
let bitOutput = document.getElementById("bits");
let mbitOutput = document.getElementById("mbits");


//Zufälliges Bild von unsplash.com "https://source.unsplash.com/random"
let imageLink = "https://source.unsplash.com/random";
console.log(imageLink);

//Wenn das Bild geladen wird, wird gemesen wie lange das laden dauert und wie groß das Bild ist
image.onload = async function (){
    endTime = new Date().getTime();
    console.log(endTime);

    //hier berechnet man die Bildgröße
    await fetch(imageLink).then((response) => {
        imageSize = response.headers.get("content-length");
        calculateSpeed();
    });
};

//Jetzt wird die zeit berechnet, die zum laden nötig war
function calculateSpeed(){
    //Zeit in Sekunden
    let timeDuration = (endTime - startTime) / 1000;
    console.log(timeDuration);

    //die menge der bits, weil die bildgröße in byte ist
    let loadedBits = imageSize * 8;
    let speedInBps = (loadedBits / timeDuration).toFixed(2);
    let speedInKbs = (speedInBps / 1024).toFixed(2);
    let speedInMbps = (speedInKbs / 1024).toFixed(2);

    bitOutput.innerHTML += `${speedInBps}`;
    mbitOutput.innerHTML += `${speedInMbps}`;
}

//Die Funktion die beim start aufgerufen wird
//Was passiert ist das image.src das Bild lädt und dann wird durch image.onload die funktion oben gestartet
const init = async () => {
    startTime = new Date().getTime();
    image.src = imageLink;
};

function start (){
    startTime = new Date().getTime();
    console.log(startTime);
    image.src = imageLink;
}

//window.onload = () => start();
