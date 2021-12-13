import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FrontendsService } from './frontends.service';
import { CreateFrontendDto } from './dto/create-frontend.dto';
import { UpdateFrontendDto } from './dto/update-frontend.dto';

@Controller('frontends')
export class FrontendsController {
  constructor(private readonly frontendsService: FrontendsService) {}

  @Post()
  create(@Body() createFrontendDto: CreateFrontendDto) {
    return this.frontendsService.create(createFrontendDto);
  }

  @Get()
  findAll() {
    return this.frontendsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frontendsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFrontendDto: UpdateFrontendDto) {
    return this.frontendsService.update(+id, updateFrontendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frontendsService.remove(+id);
  }
}
