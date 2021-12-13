import { Module } from '@nestjs/common';
import { BackendsService } from './backends.service';
import { BackendsController } from './backends.controller';

@Module({
  controllers: [BackendsController],
  providers: [BackendsService]
})
export class BackendsModule {}
