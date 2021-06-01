import { Color, IColor } from 'enta';
import IColorRange from './IColorRange';

export default class ColorRange implements IColorRange {
    public opacity100: IColor;
    public opacity80: IColor;
    public opacity60: IColor;
    public opacity40: IColor;
    public opacity20: IColor;
    public opacity10: IColor;

    public constructor(color: IColor) {
        this.opacity100 = new Color(color.hue, color.saturation, color.lightness, 1.0);
        this.opacity80 = new Color(color.hue, color.saturation, color.lightness, 0.8);
        this.opacity60 = new Color(color.hue, color.saturation, color.lightness, 0.6);
        this.opacity40 = new Color(color.hue, color.saturation, color.lightness, 0.4);
        this.opacity20 = new Color(color.hue, color.saturation, color.lightness, 0.2);
        this.opacity10 = new Color(color.hue, color.saturation, color.lightness, 0.1);
    }
}
