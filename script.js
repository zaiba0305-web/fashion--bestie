function suggestOutfit() {
  const occ = document.getElementById("occasion").value;
  const weather = document.getElementById("weather").value;

  let title = "";
  let text = "";

  if (occ === "party" && weather === "hot") {
    title = "Party (Hot)";
    text = "Light dress + heels. Keep it breathable.";
  } else if (occ === "party" && weather === "cold") {
    title = "Party (Cold)";
    text = "Bodycon + jacket + boots.";
  } else if (occ === "college" && weather === "hot") {
    title = "College (Hot)";
    text = "Cotton top + jeans + sneakers.";
  } else if (occ === "college" && weather === "cold") {
    title = "College (Cold)";
    text = "Hoodie + jeans + sneakers.";
  } else {
    title = "Casual";
    text = "Comfy tee + joggers + slides.";
  }

  document.getElementById("title").innerText = title;
  document.getElementById("result").innerText = text;
  document.getElementById("card").classList.remove("hidden");
}
