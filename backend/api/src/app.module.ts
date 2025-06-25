import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [TasksModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
