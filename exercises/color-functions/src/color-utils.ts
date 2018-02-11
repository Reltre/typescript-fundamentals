//TODO: Implement hexToRgb
export function hexToRgb(hex: string): {r: number, g: number, b: number} {
  let rHex: string;
  let gHex: string;
  let bHex: string;
  let colorChannels: number[];


  if (hex.length === 3) {
    [rHex, gHex, bHex] = hex.split('');
    return hexToRgb(`${rHex + rHex}${gHex + gHex}${bHex + bHex}`);
  }

  let [r, g, b] = [0, 2, 4]
    .map(offset => hex.substring(offset, offset + 2))
    .map(hexChannel => parseInt(hexChannel, 16));

  return {r, g, b};
}

//TODO: Implement rgbToHex
export function rgbToHex(red: number, green: number, blue: number): string {
  return [red, green, blue]
    .map(decimalChannel => numberToHex(decimalChannel))
    .join('');
}

function numberToHex(number: number) : string {
  number = Math.max(0, Math.min(255, number));
  return number.toString(16).padStart(2, "0")
}
