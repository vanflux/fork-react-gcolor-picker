import { Instance, ColorFormats } from 'tinycolor2';
interface IInput {
    h: number;
    s: number;
    v: number;
}
export interface ITinyColor {
    color: Instance;
    alphaValue: number;
    blueValue: number;
    brightnessValue: number;
    greenValue: number;
    hueValue: number;
    lightnessValue: number;
    saturationValue: number;
    redValue: number;
    initRgb(): void;
    initHsb(): void;
    toHexString(): string;
    toRgbString(): string;
    toHsv(): ColorFormats.HSVA;
    hex: string;
    hue: number;
    saturation: number;
    lightness: number;
    brightness: number;
    red: number;
    green: number;
    blue: number;
    alpha: number;
    RGB: number[];
    HSB: number[];
}
export default class Color {
    color: Instance;
    alphaValue: number;
    hueValue: number;
    saturationValue: number;
    brightnessValue: number;
    redValue: number;
    greenValue: number;
    blueValue: number;
    lightnessValue: number;
    constructor(input: IInput | string);
    static isValidHex(hex: string): boolean;
    initRgb: () => void;
    initHsb: () => void;
    toHexString: () => string;
    toRgbString: () => string;
    toHsv: () => ColorFormats.HSVA;
    get hex(): string;
    set hue(value: number);
    get hue(): number;
    set saturation(value: number);
    get saturation(): number;
    set lightness(value: number);
    get lightness(): number;
    set brightness(value: number);
    get brightness(): number;
    set red(value: number);
    get red(): number;
    set green(value: number);
    get green(): number;
    set blue(value: number);
    get blue(): number;
    set alpha(value: number);
    get alpha(): number;
    get RGB(): number[];
    get HSB(): number[];
}
export {};
