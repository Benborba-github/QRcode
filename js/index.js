let href = document.location.search;
let url = new URLSearchParams(href);
let selectionText = url.get("selectionText");
try {
    new QRCode(document.getElementById("qrcode"), selectionText);
} catch (error) {
    console.log("error", error);
}