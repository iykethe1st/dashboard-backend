import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateOrderDto {
  @ApiProperty({
    type: "date",
    description: "The customer address",
    default: "1/1/2024",
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  address: string;
}
