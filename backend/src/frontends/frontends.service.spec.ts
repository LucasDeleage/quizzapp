import { Test, TestingModule } from '@nestjs/testing';
import { FrontendsService } from './frontends.service';

describe('FrontendsService', () => {
  let service: FrontendsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrontendsService],
    }).compile();

    service = module.get<FrontendsService>(FrontendsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
