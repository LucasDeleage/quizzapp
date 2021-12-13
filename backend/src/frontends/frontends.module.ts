import { Module } from '@nestjs/common';
import { FrontendsService } from './frontends.service';
import { FrontendsController } from './frontends.controller';

@Module({
  controllers: [FrontendsController],
  providers: [FrontendsService]
})
export class FrontendsModule {}
