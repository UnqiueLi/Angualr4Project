import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    private products: Product[] = [
        new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品", ["电子产品", "硬件设备"]),
        new Product(2, "第二个商品", 2.99, 4.5, "这是第二个商品", ["休闲零食", "哈哈薯片"]),
        new Product(3, "第三个商品", 3.99, 1.5, "这是第三个商品", ["服装专场", "硬件设备"]),
        new Product(4, "第四个商品", 4.99, 3.5, "这是第四个商品", ["电子产品", "软件设备"]),
        new Product(5, "第五个商品", 5.99, 2.5, "这是第五个商品", ["休闲零食", "硬件设备"]),
        new Product(6, "第六个商品", 6.99, 4.5, "这是第六个商品", ["电子产品", "软件设备"]),
    ];
    private comments: Comment[] = [
        new Comment(1, 1, "2017-20-20 20:01:22", "张三", 3, "东西不错"),
        new Comment(2, 2, "2017-21-20 21:01:22", "李四", 2, "东西后期不错"),
        new Comment(3, 3, "2017-22-20 22:01:22", "花花", 4, "东西还不错"),
        new Comment(4, 4, "2017-23-20 23:01:22", "兔兔", 1, "东西挺不错"),
    ]
    constructor() { }

    getAllCategories():string[]{
        return ["电子产品", "硬件设备","休闲零食", "哈哈薯片","服装专场",];
    }

    getProducts() {
        return this.products;
    }
    getProduct(id: number): Product {
        return this.products.find((product) => product.id == id);
    }
    getCommentsForProductId(id: number): Comment[] {
        return this.comments.filter((comment: Comment) => comment.productId == id);
    }
}
export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>
    ) { }
}
export class Comment {
    constructor(
        public id: number,
        public productId: number,
        public timestamp: string,
        public user: string,
        public rating: number,
        public content: string
    ) { }
}