import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateQuestion } from 'src/dto/create.question.dto';
import { UpdateQuestion } from 'src/dto/update.question.dto';
import { DevopsService } from './devops.service';


@Controller('devops')
export class DevopsController {
  constructor(private readonly devopsService: DevopsService) { }

  @Post()
  create(@Body() createDevopDto: CreateQuestion) {
    return this.devopsService.create(createDevopDto);
  }

  @Get()
  findAll() {
    return this.devopsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devopsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDevopDto: UpdateQuestion) {
    return this.devopsService.update(id, updateDevopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devopsService.remove(id);
  }
}
