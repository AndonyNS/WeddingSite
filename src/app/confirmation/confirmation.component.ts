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
    name: string;
    notFound: boolean;
    loading: boolean;
    constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {}

    ngOnInit() {
        this.loading = true;
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.getNames();
        });
    }

    getNames() {
        const items = this.db.list('/invitations');
        items.subscribe(result => {
            const item = result.find(i => i.id === this.id);
            if (item) {
                this.name = item.name;
            } else {
                this.notFound = true;
            }
            this.loading = false;
        });
    }

    confirm() {
        alert('Confirmando');
    }
}
