import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'wedding-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
    id: string;
    items;
    constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.getNames();
        });
    }

    getNames() {
        this.items = this.db.list('/invitations');
        this.items.subscribe(result => {
            console.log(result[0]);
        });
    }
}
