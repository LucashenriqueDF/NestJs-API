import { Test, TestingModule } from '@nestjs/testing';
import { UpadateController } from '../../src/controllers/upadate-controller/upadate-controller.controller';

describe('UpadateController', () => {
  let controller: UpadateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpadateController],
    }).compile();

    controller = module.get<UpadateController>(UpadateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
