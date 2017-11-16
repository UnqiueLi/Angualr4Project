import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'app-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class StarsComponent implements OnInit {

    @Input()
    private rating: number = 0;
    private stars: boolean[];
    @Input()
    private readonly:boolean=true;

    constructor() { }

    ngOnInit() {
        this.stars = [];
        for (let i = 1; i <= 5; i++) {
            this.stars.push(i > this.rating);
        }
        // this.stars=[true,true,true,true,true];
    }

    clickStar(index: number) {
        if(!this.readonly){
            this.rating = index + 1;
            this.ngOnInit()
        }else{
            
        }
 
    }
}
