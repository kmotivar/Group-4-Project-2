// create canvas
var c = document.querySelector("Canvas");
var ctx = c.getContext("2d");

//for text
ctx.font = "20px rogfonts";
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "violet");;
gradient.addColorStop("1.0", "yellow");
ctx.strokeStyle = gradient;
ctx.strokeText("KJS",8,20);

//circle
ctx.fillStyle = "#c82124";
ctx.beginPath();
ctx.arc(24, 34, 8, 0, 2 * Math.PI);
ctx.closePath();
ctx.fill();


//count to count number of click
var count = 0;
function fun(x, s) {
    count++;
    //display selected image
    document.getElementById("zoom").innerHTML = "<img id='q1' onclick='fun(this.id, this.src)' src='" + s + "'>";
    hide();
    switch(count) {     //swicth case to display css according to click
        case 1: 
            document.getElementById('q1').style.cssText = 'position: fixed; top: 35%; left: 35%; width: 40%; height: 40%;';
            break;
        case 2:
            document.getElementById('q1').style.cssText = 'position: fixed; top: 25%; left: 25%; width: 55%; height: 55%;';
            break;
        case 2:
            document.getElementById('q1').style.cssText = 'position: fixed; top: 25%; left: 25%; width: 75%; height: 75%;';
            break;
        case 3:
            document.getElementById('q1').style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%;';
            break;
        default:
            document.getElementById('q1').style.cssText = 'display: none;';
            count=0;
            document.getElementById('cont').style.display="block";
            break;
    }
}
//to hide content 
function hide() {
    document.getElementById('cont').style.display="none";
}


//create image array to store it
var images = [];
//push all images to array
for (var i=1; i<=30; i++){
    images.push("images/g" + i + ".jpg");
}

//function to create and load images with icons
function icons() {
    console.log(images);
    document.getElementById("here").innerHTML = null;
    for (var i = 0; i < images.length; i++) {               //This below onclick function will zoom the image
        var image = `<a class="rel"><img src="` + images[i] + `" id="a` + i + `" onClick="fun(this.id, this.src);" alt="Image not found" class="item2">
                        <div class="overlay">
                            <div class="ig-btn">
                                <i class="top" onclick="top(`+ i +`)"></i>
                                <i class="left" onclick="left(`+ i +`)"></i>
                                <i class="right" onclick="right(`+ i +`)"></i>
                                <i class="bottom" onclick="bottom(`+ i +`)"></i>
                            </div>
                        </div>
                    </a>`;
        document.getElementById("here").innerHTML += image;
    }
}

//function to send image on right
function right(index) {
    var temp = images[index];
    var index2 = index + 1;
    images[index] = images[index2];
    images[index2] = temp;
    icons(); 
}

//function to send image on left
function left(index) {
    if (index > 0) {
        var temp = images[index];
        var index2 = index - 1;
        images[index] = images[index2];
        images[index2] = temp;
        icons();
    }
}

//function to send image at top of array
function top(index) {
    var temp = images[index];
    images.splice(index, 1); 
    images.unshift(temp); 
    icons();
}

//functiom to send image at end
function bottom(index) {
    var temp = images[index];
    images.splice(index, 1);
    images.push(temp);
    icons();

}

