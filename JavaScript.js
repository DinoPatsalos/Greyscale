var image;
var greyImage;

function upload(){
    
    var input = document.getElementById("fInput")
    
    image = new SimpleImage(input);
    greyImage = new SimpleImage(input);
    
    var imgCanvas = document.getElementById("canvas");
    
    image.drawTo(imgCanvas);
}

function makeGrey(){
      
     for (var pixel of greyImage.values()){
        var avgRGB = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        
        pixel.setRed(avgRGB);
        pixel.setGreen(avgRGB);
        pixel.setBlue(avgRGB);
     }
     
    var imgCanvas = document.getElementById("canvas2");
    
    greyImage.drawTo(imgCanvas);
    
}