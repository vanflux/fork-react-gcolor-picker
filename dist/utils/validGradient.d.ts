interface IGradientStop {
    color: string;
    position?: number;
}
interface IParsedGraient {
    stops: IGradientStop[];
    angle: string;
    original: string;
    line: string;
    side?: string;
    sideCorner?: string;
    parseWarning?: boolean;
}
declare const _default: (input: string) => string | IParsedGraient;
export default _default;
