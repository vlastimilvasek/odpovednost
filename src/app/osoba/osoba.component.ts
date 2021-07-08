import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

// Data and Service
import { ParamsService } from '../_services/params.service';

@Component({
    selector: 'app-osoba',
    templateUrl: './osoba.component.html',
    styleUrls: ['./osoba.component.css'],
    providers: [ ParamsService ],
    viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class OsobaComponent implements OnInit {
    @Input() data;
    @Input() submitted;
    @Input() layout;
    @Input() role;    
    lists = {
        pojistnik: [],
    };
    adresy = {
        pojistnik: '',
        korespond: 'kor_'
    };

    constructor(private paramsService: ParamsService) { }

    ngOnInit() {
        this.adresy = {
            pojistnik: '',
            korespond: 'kor_'
        };
        this.paramsService.getOsoby().subscribe( options => {
            this.lists.pojistnik = options;
        });
    }

}
