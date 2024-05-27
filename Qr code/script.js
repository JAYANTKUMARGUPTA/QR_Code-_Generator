
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function Generator() {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
}

function download() {
    let link = document.createElement('a');
    link.href = qrImg.src;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

