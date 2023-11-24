const density_str = "$@%&#*01?-=+~:.                ";

let video;
let asciiDiv;


function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(150, 55);
  asciiDiv = createDiv();
  asciiDiv.addClass('container');
}



function draw() {
  video.hide();
  video.loadPixels();
  let asciiImage = '';

  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;

      const len = density_str.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));
      const c = density_str.charAt(charIndex);
      if (c == ' ') asciiImage += '&nbsp;'
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}
