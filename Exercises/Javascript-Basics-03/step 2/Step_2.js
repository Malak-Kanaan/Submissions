function v() {
  hide.addEventListener("click", function() {
    document.getElementById("texte").style.display = "none";
  });
  show.addEventListener("click", function() {
    document.getElementById("texte").style.display = "initial";
  });
}

v();
