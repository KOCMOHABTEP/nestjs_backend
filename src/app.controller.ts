import {Body, Controller, Get, Param, ParseIntPipe, Post, Redirect, Render} from '@nestjs/common';
import {articles} from "./article/articles";
import {Article} from "./article/article.model";

@Controller()
export class AppController {

    @Get()
    @Render("index")
    index() {
        return {
            posts: articles
        }
    }

    @Get("create")
    @Render("create-article")
    getForm() {
        return;
    }

    @Get(":id")
    @Render("article")
    getById(@Param("id", ParseIntPipe) id: number) {
        return articles.find(article => article.id === id);
    }

    @Post("articles")
    @Redirect("/", 301)
    create(@Body() body: any): void {
        const id = articles.length + 1;
        const article = new Article(body.title, body.content, id);
        articles.push(article);
    }
}
