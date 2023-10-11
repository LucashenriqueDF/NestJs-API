import { Test, TestingModule } from '@nestjs/testing';
import { UpadateControllerController } from './upadate-controller.controller';

describe('UpadateControllerController', () => {
  let controller: UpadateControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpadateControllerController],
    }).compile();

    controller = module.get<UpadateControllerController>(UpadateControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
