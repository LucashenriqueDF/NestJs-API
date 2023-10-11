import { Test, TestingModule } from '@nestjs/testing';
import { GetControllerController } from './get-controller.controller';

describe('GetControllerController', () => {
  let controller: GetControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetControllerController],
    }).compile();

    controller = module.get<GetControllerController>(GetControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
