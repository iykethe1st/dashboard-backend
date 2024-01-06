import { ApiProperty } from "@nestjs/swagger";
import {
  IsDateString,
  IsNotEmpty,
  IsString,
  isNotEmpty,
} from "class-validator";

export class CreateOrderDto {
  @ApiProperty({
    type: "number",
    description: "The user Id",
    default: "0000",
    required: true,
  })
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    type: "number",
    description: "The order Id",
    default: "0000",
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  orderId: string;

  @ApiProperty({
    type: "string",
    description: "The order status, pending, fulfiled or cancelled",
    default: "pending",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  orderStatus: string;

  @ApiProperty({
    type: "date",
    description: "The courier pickup date",
    default: "1/1/2024",
    required: true,
  })
  @IsNotEmpty()
  @IsDateString()
  pickUpDate: Date;

  @ApiProperty({
    type: "date",
    description: "The due date",
    default: "2/1/2024",
    required: true,
  })
  @IsDateString()
  @IsNotEmpty()
  dueDate: Date;
}
