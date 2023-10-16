import { Controller, Get, Post } from '@nestjs/common'
import { PostService } from 'src/services/post/post.service'
@Controller('post')
export class PostController {
    constructor(private readonly postservice: PostService) {}

    @Post()
    PostMessenger() {
        return this.postservice.PostMessenger()
    }
}
