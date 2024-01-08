import { ApiProperty } from "@nestjs/swagger";
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  isNotEmpty,
} from "class-validator";

export class EditOrderDto {
  // @ApiProperty({
  //   type: "number",
  //   description: "The user Id",
  //   default: "00",
  //   required: true,
  // })
  // @IsNotEmpty()
  // userId: number;

  // @ApiProperty({
  //   type: "number",
  //   description: "The order Id",
  //   default: "dash-00000000",
  //   required: true,
  // })
  // @IsNotEmpty()
  // @IsString()
  // orderId: string;

  @ApiProperty({
    type: "date",
    description: "The order Status (Pending, Fulfilled or Cancelled)",
    default: "Pending",
    required: false,
  })
  @IsString()
  @IsOptional()
  orderStatus?: string;

  @ApiProperty({
    type: "date",
    description: "The due date",
    default: "2/1/2024",
    required: false,
  })
  @IsDateString()
  @IsOptional()
  dueDate?: Date;
}
