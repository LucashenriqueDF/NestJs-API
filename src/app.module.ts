import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostControllerController } from './controllers/post-controller/post-controller.controller';
import { GetControllerController } from './controllers/get-controller/get-controller.controller';
import { UpadateControllerController } from './controllers/upadate-controller/upadate-controller.controller';
import { DeleteControllerController } from './controllers/delete-controller/delete-controller.controller';
import { PostServiceService } from './services/post-service/post-service.service';
import { UpdateServiceService } from './services/update-service/update-service.service';
import { GetServiceService } from './services/get-service/get-service.service';
import { DeleteServiceService } from './services/delete-service/delete-service.service';

@Module({
  imports: [],
  controllers: [AppController, PostControllerController, GetControllerController, UpadateControllerController, DeleteControllerController],
  providers: [AppService, PostServiceService, UpdateServiceService, GetServiceService, DeleteServiceService],
})
export class AppModule {}
