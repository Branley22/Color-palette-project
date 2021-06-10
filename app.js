// selections and variables
const colorDivs = document.querySelectorAll('.color');
const generateButton = document.querySelector('.generate');
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll('.color h2');
let initialColors;



// functions
// color generator
function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}

function randomColors() {
    colorDivs.forEach((div, index) => {
      const hexText = div.children[0];
      const randomColor = generateHex()

      // add color to the background
      div.style.backgroundColor = randomColor;
      hexText.innerText = randomColor;
      // check for contast
      checkTextContrast(randomColor, hexText)
      // Intital colorize sliders
      const color = chroma(randomColor);
      const sliders = div.querySelectorAll('.sliders input');
      console.log(sliders);
  });
}

function checkTextContrast(color, text) {
  const luminance = chroma(color).luminance();
  if(luminance > 0.5) {
    text.style.color = 'black';
  } else {
    text.style.color ='white';
  }
}

randomColors();