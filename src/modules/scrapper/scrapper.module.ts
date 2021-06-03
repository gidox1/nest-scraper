import { Module } from '@nestjs/common';
import { ScraperService } from './scrapper.service';
import { ScraperResolver } from './scraper.resolver'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  providers: [ScraperService, ScraperResolver],
})
export class ScraperModule {}
