
function displayNextImage() {
	
	
	
	if(x===images.length-1){
		x=1;
	}
	x++;
	
	if(x>15 && x<19){
		document.getElementById("tex").value = "Това е Рита, моето хъски. " 
	}else(
		document.getElementById("tex").value = "" 
	)
	// Трябва ми още js...
	
	document.getElementById("img").src = images[x];

}

function displayPreviousImage() {
	
	if(x==0){
		x =images.length-1;
	}
	x--;
	
	if(x>15 && x<19){
		document.getElementById("tex").value = "Това е Рита, моето хъски." 
	}else(
		document.getElementById("tex").value = ""
	)
	
	document.getElementById("img").src = images[x];
	
	
	
}



let images = [], x = 0;
	images[0] = "../Pics/image1.jpg";
	images[1] = "../Pics/image2.jpg";
	images[2] = "../Pics/image3.jpg";
	images[3] = "../Pics/image4.jpg";
	images[4] = "../Pics/image5.jpg";
	images[5] = "../Pics/image6.jpg";
	images[6] = "../Pics/image7.jpg";
	images[7] = "../Pics/image8.jpg";
	images[8] = "../Pics/image9.jpg";
	images[9] = "../Pics/image10.jpg";
	images[10] = "../Pics/image11.jpg";
	images[11] = "../Pics/image12.jpg";
	images[12] = "../Pics/image13.jpg";
	images[13] = "../Pics/image14.jpg";
	images[14] = "../Pics/image15.jpg";
	images[15] = "../Pics/image16.jpg";
	images[16] = "../Pics/image17.jpg";
	images[17] = "../Pics/image18.jpg";
	images[18] = "../Pics/image19.jpg";
	images[19] = "../Pics/image20.jpg";
	images[20] = "../Pics/image21.jpg";
	images[21] = "../Pics/image22.jpg";
