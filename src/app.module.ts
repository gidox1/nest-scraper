import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { ScraperModule } from './modules/scrapper/scrapper.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    ScraperModule
  ],
  providers: [],
})
export class AppModule {}
