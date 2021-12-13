import { Injectable } from '@nestjs/common';
import { DbConnector } from 'prisma/db';
import { CreateQuestion } from 'src/dto/create.question.dto';
import { UpdateQuestion } from 'src/dto/update.question.dto';
import { Category } from 'src/enum/Category';


@Injectable()
export class DevopsService {

  private db = DbConnector.getInstance()

  async create(createDevopDto: CreateQuestion) {
    try {
      return await this.db.question.create({ data: createDevopDto });
    } catch (error) {

    }
  }

  async findAll() {
    return await this.db.question.findMany({
      select: {
        id: true,
        question: true,
        response: true
      },
      where: {
        category: Category.BACKEND
      }
    });
  }

  async findOne(id: string) {
    return await this.db.question.findFirst({
      select: {
        question: true,
        response: true
      },
      where: {
        id
      }
    });
  }

  async update(id: string, updateDevopDto: UpdateQuestion) {
    return await this.db.question.update({ where: { id }, data: updateDevopDto });
  }

  async remove(id: string) {
    const deleteResponse = this.db.response.deleteMany({
      where: {
        questionId: id,
      },
    })

    const deleteQuestion = this.db.question.delete({
      where: {
        id,
      },
    })

    return await this.db.$transaction([deleteResponse, deleteQuestion])
  }
}
