const inputPass = document.getElementById("inputPass");
const passBtn = document.getElementById("passBtn");
const copyBtn = document.getElementById("copyBtn");
const upr = document.getElementById("upr");
const low = document.getElementById("low");
const num = document.getElementById("num");
const sym = document.getElementById("sym");
const len = document.getElementById("len");
const rangeLen = document.getElementById("rangeLen");

len.oninput = () => rangeLen.value = len.value
rangeLen.oninput = () => len.value = rangeLen.value

function generatePassword() {
    const up = upr.checked,
        lo = low.checked,
        nu = num.checked,
        sy = sym.checked;

    const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        sml = "abcdefghijklmnopqrstuvwxyz",
        nur = "1234567890",
        sbl = "~@#$%^&*()";

    let chr;
    if (up && lo && nu && sy) {
        chr = cap + sml + nur + sbl;
    }
    if (!up && !lo && !nu && sy) {
        chr = sbl;
    }
    if (up && !lo && !nu && !sy) {
        chr = cap;
    }
    if (!up && lo && !nu && !sy) {
        chr = sml;
    }
    if (!up && !lo && nu && !sy) {
        chr = nur;
    }
    if (!up && !lo && nu && sy) {
        chr = nur + sbl;
    }
    if (!up && lo && !nu && sy) {
        chr = sml + sbl;
    }
    if (!up && lo && nu && !sy) {
        chr = sml + nur;
    }
    if (up && !lo && !nu && sy) {
        chr = cap + sbl;
    }
    if (up && !lo && nu && !sy) {
        chr = cap + nur;
    }
    if (up && lo && !nu && !sy) {
        chr = cap + sml;
    }
    if (up && lo && nu && !sy) {
        chr = cap + sml + nur;
    }
    if (up && lo && !nu && sy) {
        chr = cap + sml + sbl;
    }
    if (up && !lo && nu && sy) {
        chr = cap + nur + sbl;
    }
    if (!up && lo && nu && sy) {
        chr = sml + nur + sbl;
    }
    if (!up && !lo && !nu && !sy) {
        chr = "x";
    }

    let pass = "";
    for (let i = 0; i < len.value; i++) {
        const rn = Math.floor(Math.random() * chr.length);
        pass += chr[rn];
    }
    return pass;
}

passBtn.onclick = () => {
    inputPass.value = generatePassword();
};

window.onload = () => {
    inputPass.value = generatePassword();
};

// copy to clipboard
copyBtn.onclick = () => {
    // Select the text field
    inputPass.select();
    inputPass.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(inputPass.value);
};