import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from "class-validator";

export class EditCourierDto {
  @ApiProperty({
    type: "string",
    description: "The courier email",
    default: "user@email.com",
    required: false,
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    type: "string",
    description: "The courier firstname",
    default: "John",
    required: false,
  })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({
    type: "string",
    description: "The courier lastname",
    default: "Doe",
    required: false,
  })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({
    type: "string",
    description: "The daily courier orders so far",
    default: 0,
    required: false,
  })
  @IsNumberString()
  @IsOptional()
  dailyOrderCount?: string;
}
