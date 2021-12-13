
import { IsOptional, IsString } from "class-validator";
import { Category } from "src/enum/Category";

export class UpdateQuestion {
    @IsString()
    @IsOptional()
    question: string
    @IsString()
    @IsOptional()
    category: Category
}