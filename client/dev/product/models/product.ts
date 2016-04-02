export interface IProduct {
  liked: boolean;
  likes: number;

  addLikes():void;
}

export class Product implements IProduct {
  liked: boolean = false;
  likes: number = 0;

  constructor(public image: string) {

  }

  addLikes() {
    this.liked = true;
    this.likes++;
  }
}
