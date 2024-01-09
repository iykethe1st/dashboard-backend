import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthUserDto {
  @ApiProperty({
    type: "email",
    description: "The user email",
    default: "user@email.com",
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: "password",
    description: "The user password",
    default: "password",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
