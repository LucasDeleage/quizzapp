import { IsNotEmpty } from "class-validator";
import { Category } from "src/enum/Category";

export class CreateQuestion {
    @IsNotEmpty()
    question: string
    @IsNotEmpty()
    category: Category
}