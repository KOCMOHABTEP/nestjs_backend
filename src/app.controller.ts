import {Controller, Get} from '@nestjs/common';

@Controller()
export class AppController {

    @Get()
    index() {
        return {
            articles: ["one", "two", "three"]
        }
    }
}
