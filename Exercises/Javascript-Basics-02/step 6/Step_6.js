function change() {
  image1.addEventListener("mouseover", function() {
    this.src = "images/image1_2.jpg";
  });
  image2.addEventListener("mouseover", function() {
    this.src = "images/image2_2.jpg";
  });
  image3.addEventListener("mouseover", function() {
    this.src = "images/image3_2.jpg";
  });
  image4.addEventListener("mouseover", function() {
    this.src = "images/image4_2.jpg";
  });
  image5.addEventListener("mouseover", function() {
    this.src = "images/image5_2.jpg";
  });
}

function change1() {
  image1.addEventListener("mouseout", function() {
    this.src = "images/image1.jpg";
  });
  image2.addEventListener("mouseout", function() {
    this.src = "images/image2.jpg";
  });
  image3.addEventListener("mouseout", function() {
    this.src = "images/image3.jpg";
  });
  image4.addEventListener("mouseout", function() {
    this.src = "images/image4.jpg";
  });
  image5.addEventListener("mouseout", function() {
    this.src = "images/image5.jpg";
  });
}

change();
change1();
