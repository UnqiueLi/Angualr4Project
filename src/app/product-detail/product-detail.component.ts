import { Product, ProductService, Comment } from './../shared/product.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {

    product: Product;
    // productTitle:string;
    comments: Comment[];
    newRating:number=5;
    newComment:string="";
    constructor(private routeInfo: ActivatedRoute, private productSer: ProductService) { }

    ngOnInit() {
        let productId: number = this.routeInfo.snapshot.params['productId'];
        this.product = this.productSer.getProduct(productId);
        // this.productTitle=this.routeInfo.snapshot.params["prodTitle"]
        this.comments=this.productSer.getCommentsForProductId(productId);
    }

}
