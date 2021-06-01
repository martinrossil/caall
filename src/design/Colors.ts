import { Color } from 'enta';
import ColorRange from './ColorRange';
import IColorRange from './IColorRange';
import IColors from './IColors';

export default class Colors implements IColors {
    readonly black: IColorRange = new ColorRange(new Color(219, 74, 14));
    readonly white: IColorRange = new ColorRange(new Color(0, 100, 100));
    readonly blue: IColorRange = new ColorRange(new Color(218, 87, 55));
    readonly green: IColorRange = new ColorRange(new Color(117, 38, 45));
    readonly yellow: IColorRange = new ColorRange(new Color(38, 90, 61));
    readonly red: IColorRange = new ColorRange(new Color(15, 80, 51));
}
