import { IColor, ILabelElement, IPathElement, LabelElement, PathElement } from 'enta';
import Theme from '../design/Theme';

export default class Factory {
    public static getBoldLabel(fontSize: number, text: string, color: IColor, width = NaN): ILabelElement {
        const labelElement: ILabelElement = new LabelElement();
        labelElement.width = width;
        labelElement.typeFace = Theme.typography.bold;
        labelElement.fontWeight = 700;
        labelElement.fontSize = fontSize;
        labelElement.text = text;
        labelElement.textColor = color;
        labelElement.enabled = false;
        return labelElement;
    }

    public static getLabel(fontSize: number, text: string, color: IColor, width = NaN): ILabelElement {
        const labelElement: ILabelElement = new LabelElement();
        labelElement.width = width;
        labelElement.typeFace = Theme.typography.regular;
        labelElement.fontWeight = 400;
        labelElement.fontSize = fontSize;
        labelElement.text = text;
        labelElement.textColor = color;
        labelElement.enabled = false;
        return labelElement;
    }

    public static getIcon(icon: string, color: IColor): IPathElement {
        const pathElement: IPathElement = new PathElement();
        pathElement.size(24, 24);
        pathElement.pathData = icon;
        pathElement.fillColor = color;
        return pathElement;
    }

    public static getBold24Black100Label(text: string): ILabelElement {
        return Factory.getBoldLabel(24, text, Theme.colors.black.opacity100);
    }

    public static getBoldBlack100Label(fontSize: number, text: string): ILabelElement {
        return Factory.getBoldLabel(fontSize, text, Theme.colors.black.opacity100);
    }
}
