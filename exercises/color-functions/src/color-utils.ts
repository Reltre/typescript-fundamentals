//TODO: Implement hexToRgb
export function hexToRgb(hex: string) : object {
  let redHex = hex.length == 3 ? hex.substr(0, 1) : hex.substr(0,2);
  let greenHex = hex.length == 3 ? hex.substr(1, 1) : hex.substr(2,2);
  let blueHex = hex.length == 3 ? hex.substr(2,1) : hex.substr(4,2);

  if (hex.length == 3) {
    redHex += redHex
    greenHex += greenHex;
    blueHex += blueHex;
  }

  let redChannel = parseInt(redHex, 16);
  let greenChannel = parseInt(greenHex, 16);
  let blueChannel = parseInt(blueHex, 16);

  return {r: redChannel,g: greenChannel,b: blueChannel};
}

//TODO: Implement rgbToHex
export function rgbToHex(red: number, green: number, blue: number) : string {
  let redHex = numberToHex(red);
  let greenHex = numberToHex(green);
  let blueHex = numberToHex(blue);

  return `${redHex}${greenHex}${blueHex}`;
}

function numberToHex(number: number) : string {
  if (number > 255) {
    number = 255;
  }

  if (number < 0) {
    number = 0;
  }

  let numString = number.toString(16);

  return numString.padStart(2, "0")
}
