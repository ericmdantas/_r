export class Product {
  liked: boolean = false;
  likes: number = 0;

  constructor(public image: string) {

  }

  addLikes() {
    this.liked = true;
    this.likes++;
  }
}
