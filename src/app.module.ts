import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// https://www.youtube.com/watch?v=GHTA143_b-s 8:59 