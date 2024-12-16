import { IsString, IsOptional, IsInt, Min, Max } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsOptional() 
    name?: string;

    @IsInt()
    @Min(18)
    @Max(100)
    @IsOptional()
    age?: number;
}
