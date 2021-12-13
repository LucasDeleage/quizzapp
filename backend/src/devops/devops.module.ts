import { Module } from '@nestjs/common';
import { DevopsService } from './devops.service';
import { DevopsController } from './devops.controller';

@Module({
  controllers: [DevopsController],
  providers: [DevopsService]
})
export class DevopsModule {}
