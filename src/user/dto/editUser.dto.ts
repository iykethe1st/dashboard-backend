import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";

export class EditUserDto {
  @ApiProperty({
    type: "string",
    description: "The user address",
    default: "user@email.com",
    required: false,
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    type: "string",
    description: "The user firstname",
    default: "John",
    required: false,
  })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({
    type: "string",
    description: "The user lastname",
    default: "Doe",
    required: false,
  })
  @IsString()
  @IsOptional()
  lastName?: string;
}
