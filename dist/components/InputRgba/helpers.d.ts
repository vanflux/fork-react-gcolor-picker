import { KeyboardEvent, ChangeEvent } from 'react';
interface IInput {
    alphaValue: number;
    hexValue: string;
    showAlpha?: boolean;
    onChangeAlpha: (value: string) => void;
    onChangeHex: (value: string) => void;
}
export declare const getAlphaValue: (value: string) => string | number;
export declare const onlyDigits: (string: string) => string;
export declare const onlyLatins: (string: string) => string;
export declare const handlePressEnter: (e: KeyboardEvent, fn: () => void) => void;
export declare const inputsData: (props: IInput) => ({
    wrapClass: string;
    labelSymbol: boolean;
    idInput: string;
    valueInput: string;
    labelText: string;
    labelArea: string;
    labelClass: string;
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
    name: string;
} | {
    wrapClass: string;
    labelSymbol: boolean;
    idInput: string;
    valueInput: number;
    labelText: string;
    labelArea: string;
    labelClass: string;
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
    name: string;
})[];
export {};
