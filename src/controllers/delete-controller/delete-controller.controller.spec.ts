import { Test, TestingModule } from '@nestjs/testing';
import { DeleteControllerController } from './delete-controller.controller';

describe('DeleteControllerController', () => {
  let controller: DeleteControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteControllerController],
    }).compile();

    controller = module.get<DeleteControllerController>(DeleteControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
