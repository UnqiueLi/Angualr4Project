import { Product, ProductService } from './../shared/product.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    // providers: [ProductService],
    encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

    // products: Array<Product>;
    private keyword: string;
    private titleFilter: FormControl = new FormControl();

    private products: Product[];
    private imgUrl = "http://images.xiustatic.com/cms/noregular/2017/11/07/hd_mainVenue_171107/enter_02.jpg";

    constructor(private productSer: ProductService, ) {
        this.titleFilter.valueChanges
          .debounceTime(500)
            .subscribe(
            value => this.keyword = value
            )
    }

    ngOnInit() {
        this.products = this.productSer.getProducts();
    }

}
