import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
  HttpException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
import { measureMemory } from 'vm';
@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;
  constructor() {
    //dont do this on real apps use dependec yinjections
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    const message = this.messagesService.findAll();
    if (!message) {
      throw new NotFoundException('The mmessage is not found');
    }
    return message;
  }
  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException(`Message not Found with that id: ${id}`);
    }
    return message;
  }
}
