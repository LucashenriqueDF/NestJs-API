import { Controller, Get, Post } from '@nestjs/common'
import { PostService } from 'src/services/post-service/post-service.service'
@Controller('post')
export class PostController {
    constructor(private readonly postservice: PostService) {}

    @Post()
    PostMessenger() {
        return this.postservice.PostMessenger()
    }
}
