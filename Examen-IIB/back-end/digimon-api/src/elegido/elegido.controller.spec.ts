import { Test, TestingModule } from '@nestjs/testing';
import { ElegidoController } from './elegido.controller';

describe('ElegidoController', () => {
  let controller: ElegidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElegidoController],
    }).compile();

    controller = module.get<ElegidoController>(ElegidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
