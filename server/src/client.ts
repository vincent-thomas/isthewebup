import express, { Express } from 'express';

export class Server {
  #port: number;

  #app: Express;

  constructor() {
    this.#port = null;
    this.#app = express();
  }

  setPort(port: number) {
    this.#port = port;
    return this;
  }

  start(callback: () => void) {
    return this.#app.listen(this.#port, callback);
  }

  getServer() {
    return this.#app;
  }
}
