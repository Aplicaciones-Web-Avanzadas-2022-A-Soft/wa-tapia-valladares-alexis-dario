import { Test, TestingModule } from '@nestjs/testing';
import { ElegidoService } from './elegido.service';

describe('ElegidoService', () => {
  let service: ElegidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElegidoService],
    }).compile();

    service = module.get<ElegidoService>(ElegidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
