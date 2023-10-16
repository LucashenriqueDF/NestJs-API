import { Controller, Get } from '@nestjs/common';

@Controller('get-controller')
export class GetController {

    @Get()
    GetMessage(){
        
    }
}
