import { Dispatch, SetStateAction } from 'react';
import { ITinyColor } from '../../../utils/color';
export declare type TPropsChange = {
    alpha: number;
    hex: string;
};
export declare type TPropsComp = {
    rootPrefixCls?: string;
    color: ITinyColor;
    alpha?: number;
    colorBoardHeight?: number;
    onChange: (color: ITinyColor) => void;
    setChange: Dispatch<SetStateAction<boolean>>;
};
export declare type TPropsCompAlpha = {
    rootPrefixCls?: string;
    color: ITinyColor;
    alpha?: number;
    showAlpha?: boolean;
    onChange: (alpha: number) => void;
    setChange: Dispatch<SetStateAction<boolean>>;
};
export declare type TPropsMain = {
    alpha: number;
    className?: string;
    hex: string;
    showAlpha?: boolean;
    colorBoardHeight?: number;
    onChange: ({ alpha, hex }: TPropsChange) => void;
};
export declare type TCoords = {
    x: number;
    y: number;
};
