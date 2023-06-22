import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): Bla {
    return { age: 19, name: "Demetre" };
  }
}

export interface Bla {
  age: number;
  name: string;
}
