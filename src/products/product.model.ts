export class Product {
  // id: string;
  // title: string;
  // description: string;
  // price: number;

  // constructor(id: string, title: string, desc: string, price: number) {
  //   this.id = id;
  //   this.title = title;
  //   this.description = desc;
  //   this.price = price;
  // }

  // MEMO publicを使えばconstructorのbodyを書かなくてもショートハンドに実装できる
  constructor(
    public id: string,
    public title: string,
    public desc: string,
    public price: number,
  ) {}
}
