import { MessagesRepository } from './messages.repository';
export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor() {
    //service is creating its own dependencies
    //Dont do this on real apps
    this.messagesRepo = new MessagesRepository();
  }
  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
