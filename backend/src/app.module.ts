import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevopsModule } from './devops/devops.module';
import { FrontendsModule } from './frontends/frontends.module';
import { BackendsModule } from './backends/backends.module';

@Module({
  imports: [DevopsModule, FrontendsModule, BackendsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
