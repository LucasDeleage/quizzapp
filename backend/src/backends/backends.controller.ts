import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BackendsService } from './backends.service';
import { CreateBackendDto } from './dto/create-backend.dto';
import { UpdateBackendDto } from './dto/update-backend.dto';

@Controller('backends')
export class BackendsController {
  constructor(private readonly backendsService: BackendsService) {}

  @Post()
  create(@Body() createBackendDto: CreateBackendDto) {
    return this.backendsService.create(createBackendDto);
  }

  @Get()
  findAll() {
    return this.backendsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backendsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBackendDto: UpdateBackendDto) {
    return this.backendsService.update(+id, updateBackendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backendsService.remove(+id);
  }
}
