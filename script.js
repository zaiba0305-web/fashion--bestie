function suggestOutfit() {
    let occasion = document.getElementById("occasion").value;
    let result = "";

    if (occasion === "party") {
        result = "Wear a cute dress 💃";
    } else if (occasion === "college") {
        result = "Jeans + top + sneakers 👟";
    } else {
        result = "Comfy casual outfit 😌";
    }

    document.getElementById("result").innerText = result;
}
