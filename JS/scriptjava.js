
  function displayNextImage() {
	  x = (x === images.length - 1) ? 0 : x + 1;
	  document.getElementById("img").src = images[x];
  }

  function displayPreviousImage() {
	  x = (x <= 0) ? images.length - 1 : x - 1;
	  document.getElementById("img").src = images[x];
  }

  function startTimer() {
	  setInterval(displayNextImage, 750);
  }

  let images = [], x = -1;
  images[0] = "../Pics/image1.jpg";
  images[1] = "../Pics/image2.jpg";
  images[2] = "../Pics/image3.jpg";
  images[3] = "../Pics/image4.png";
  images[4] = "../Pics/image5.jpg";
  images[5] = "../Pics/image6.jpg";
  images[6] = "../Pics/image7.jpg";
  images[7] = "../Pics/image8.jpg";
  images[8] = "../Pics/image9.jpg";
  images[9] = "../Pics/image10.jpg";
  images[10] = "../Pics/image11.jpg";
  images[11] = "../Pics/image12.jpg";
  images[12] = "../Pics/startpicture.jpg";
