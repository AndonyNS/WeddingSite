import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'wedding-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
    id: string;
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => (this.id = params['id']));
    }
}
