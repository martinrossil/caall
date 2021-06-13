import { ITypeFace, TypeFace } from 'enta';
import ITypography from './ITypography';

export default class Typography implements ITypography {
    readonly bold: ITypeFace = new TypeFace('SK-Modernist', 0.69, 0.05, -0.06);
    readonly regular: ITypeFace = new TypeFace('SK-Modernist', 0.69, 0.05, -0.06);
}
