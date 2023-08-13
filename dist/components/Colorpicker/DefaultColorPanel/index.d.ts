import { FC } from 'react';
import { IActiveColor } from '../types';
interface IProps {
    defaultColors?: Array<string>;
    setColor: (color: any) => void;
    setInit: (init: boolean) => void;
    setActiveColor?: (color: IActiveColor) => void;
    colorType: 'solid' | 'gradient';
    limit?: number;
}
declare const DefaultColorPanel: FC<IProps>;
export default DefaultColorPanel;
