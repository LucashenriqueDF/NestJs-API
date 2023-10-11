import { Test, TestingModule } from '@nestjs/testing';
import { DeleteServiceService } from './delete-service.service';

describe('DeleteServiceService', () => {
  let service: DeleteServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteServiceService],
    }).compile();

    service = module.get<DeleteServiceService>(DeleteServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
