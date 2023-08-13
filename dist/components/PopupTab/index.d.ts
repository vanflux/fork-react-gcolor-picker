import { FC } from 'react';
import './_popup_tabs.scss';
interface Popups {
    children?: any;
    activeTab?: string | 'solid' | 'gradient';
    tabName?: string;
    popupWidth?: number;
    onClick?: () => void;
}
export declare const PopupTabs: FC<Popups>;
export declare const PopupTabsHeaderLabel: FC<Popups>;
export declare const PopupTabsHeader: FC<Popups>;
export declare const PopupTabsBody: FC<Popups>;
export declare const PopupTabsBodyItem: FC<Popups>;
export {};
