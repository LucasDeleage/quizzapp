import { Test, TestingModule } from '@nestjs/testing';
import { FrontendsController } from './frontends.controller';
import { FrontendsService } from './frontends.service';

describe('FrontendsController', () => {
  let controller: FrontendsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrontendsController],
      providers: [FrontendsService],
    }).compile();

    controller = module.get<FrontendsController>(FrontendsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
