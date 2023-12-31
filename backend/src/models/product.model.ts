import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { timestamps: true } })


@modelOptions({ schemaOptions: { timestamps: true } })
export class Product {
  public _id?: string;
  @prop({ required: true })
  public name!: string;
  @prop({ required: true, unique: true })
  public slug!: string;
  @prop({ required: true })
  public image!: string;
  @prop({ required: true })
  public brand!: string;
  @prop({ required: true })
  public category!: string;
  @prop({ required: true })
  public carmodel!: number;
  @prop({ required: true, default: 0 })
  public price!: number;
  @prop({ required: true, default: 0 })
  public seats!: number;
  @prop({ required: true })
  public odometer!: number;
 
}
export const ProductModel = getModelForClass(Product);
