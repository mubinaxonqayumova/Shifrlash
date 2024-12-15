// Shifrlash funksiyasi
function encryptText() {
    var key = document.getElementById("key").value;
    var text = document.getElementById("text").value;

    if (!key || !text) {
        alert("Iltimos, kalit va matnni kiriting!");
        return;
    }

    var encrypted = CryptoJS.AES.encrypt(text, key).toString();
    document.getElementById("output").value = encrypted;
}

// Deshifrlash funksiyasi
function decryptText() {
    var key = document.getElementById("key").value;
    var encryptedText = document.getElementById("text").value;

    if (!key || !encryptedText) {
        alert("Iltimos, kalit va shifrlangan matnni kiriting!");
        return;
    }

    var decryptedBytes = CryptoJS.AES.decrypt(encryptedText, key);
    var decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    
    if (!decryptedText) {
        alert("Xatolik: Shifrlangan matnni deshifrlashda xato!");
    } else {
        document.getElementById("output").value = decryptedText;
    }
}
