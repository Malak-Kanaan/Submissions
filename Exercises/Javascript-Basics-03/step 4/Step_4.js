function change() {
  if (password.value != confirmation.value) {
    password.style.border = " solid red 3px";
    confirmation.style.border = " solid red 3px";
  }
}
