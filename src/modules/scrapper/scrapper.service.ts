import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common'

@Injectable()
export class ScraperService {
  private logger: Logger

  constructor() {
    this.logger = new Logger('Scraper.Service')
  }

  /**
   * root query
   */
  public getStatus() {
    return {
        message: 'healthy!'
    }
  }
}
