import { ApiProperty } from "@nestjs/swagger";
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  isNotEmpty,
} from "class-validator";

export class EditOrderDto {
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
    type: "date",
    description: "The courier pickup date",
    default: "1/1/2024",
    required: true,
  })
  @IsDateString()
  @IsOptional()
  pickUpDate?: Date;

  @ApiProperty({
    type: "date",
    description: "The due date",
    default: "2/1/2024",
    required: true,
  })
  @IsDateString()
  @IsOptional()
  dueDate?: Date;
}
