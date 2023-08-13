import { FC } from 'react';
import './_input_rgba.scss';
interface IChange {
    hex: string;
    alpha: number;
}
declare type TProps = {
    hex: string;
    alpha: number;
    format?: 'rgb' | 'hsl' | 'hex';
    showAlpha?: boolean;
    onChange: ({ hex, alpha }: IChange) => void;
    onSubmitChange?: (rgba: string) => void;
};
declare const InputRgba: FC<TProps>;
export default InputRgba;
