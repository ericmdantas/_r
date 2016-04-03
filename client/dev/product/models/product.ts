export interface IProduct {
  liked: boolean;
  likes: number;
  image: string;
  name: string;

  addLikes():void;
}

export class Product implements IProduct {
  liked: boolean = false;
  likes: number = 0;

  constructor(public name: string, public image: string) {

  }

  addLikes() {
    this.liked = true;
    this.likes++;
  }
}
