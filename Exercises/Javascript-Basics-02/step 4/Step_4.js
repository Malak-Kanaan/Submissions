function clearr() {
  if (confirm("Do you want to clear all fields? ") == true) {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("city").value = "";
  }
}
