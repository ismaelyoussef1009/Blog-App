// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type UserDocument = User & Document;

// @Schema()
// export class User {
//   @Prop()
//   userId: string;

//   @Prop()
//   email: string;

//   @Prop()
//   age: number;

//   @Prop([String])
//   favoriteFoods: string[];
// }

// export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  userId: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  age: number;

  @Prop({ type: [String], default: [] })
  favoriteFoods: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
