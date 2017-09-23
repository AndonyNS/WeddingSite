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
    constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.getNames();
        });
    }

    getNames() {
        debugger;
        let item = this.db.object('/invitatons');
        console.log(item);
    }
}
