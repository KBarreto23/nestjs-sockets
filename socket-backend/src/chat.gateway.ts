import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer() server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    console.log(message);

    this.server.emit('message', message);
  }
}
