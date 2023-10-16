import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PostController } from './controllers/post-controller/post-controller.controller'
import { GetController } from './controllers/get-controller/get-controller.controller'
import { UpadateController } from './controllers/upadate-controller/upadate-controller.controller'
import { DeleteController } from './controllers/delete-controller/delete-controller.controller'
import { PostService } from './services/post-service/post.service'
import { UpdateService } from './services/update-service/update.service'
import { GetService } from './services/get-service/get.service'
import { DeleteService } from './services/delete-service/delete.service'

@Module({
    imports: [],
    controllers: [
        AppController,
        PostController,
        GetController,
        UpadateController,
        DeleteController,
    ],
    providers: [
        AppService,
        PostService,
        UpdateService,
        GetService,
        DeleteService,
    ],
})
export class AppModule {}
