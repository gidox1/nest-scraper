import { Query, Mutation, Args, Resolver } from '@nestjs/graphql'
import { ScraperService } from './scrapper.service'
import { Status } from './entities/status'

@Resolver()
export class ScraperResolver {
    constructor(private readonly scraperService: ScraperService) {}

    @Query(() => Status)
    status() {
      return this.scraperService.getStatus()
    }
}