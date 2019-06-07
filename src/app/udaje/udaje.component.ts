import { ParamsService } from '../_services/params.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { LOGO_200x100 } from '../../assets/params/loga';

@Component({
    selector: 'app-udaje',
    templateUrl: './udaje.component.html',
    styleUrls: ['./udaje.component.css'],
    providers: [ ParamsService ],
    viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class UdajeComponent implements OnInit, OnChanges {
    @Input() data;
    @Input() r;
    @Input() submitted;
    @Input() layout;
    lists = {
        povolani: [],
        profese: [],
    };
    LOGA = LOGO_200x100;

    locale = 'cs';
    bsConfig: Partial<BsDatepickerConfig>;
    minDate: Date;
    maxDate: Date;
    bsValue;

    constructor(private paramsService: ParamsService, private localeService: BsLocaleService) { }

    profeseList( change: boolean = false ): void {
        if (change) { this.data.profese = ''; }
        if (this.data.povolani) {
            let id;
            const options = [];
            const profese = this.paramsService.getPovolaniProfese().find( opt => opt.id === this.data.povolani );
            // console.log(profese);
            profese.opt.forEach( opt => {
                const profese_id = this.paramsService.getProfese().find( prof => prof.label === opt );
                // console.log(opt + ' : ' + profese_id.id);
                id = profese_id.id;
                options.push( {
                    label: opt,
                    value: profese_id.id
                });
            });
            if (profese.opt.length === 1) { this.data.profese = id; }
            this.lists.profese = options;
        }
    }

    ngOnInit() {
        this.localeService.use(this.locale);
        this.bsConfig = Object.assign({}, { containerClass: 'theme-default', dateInputFormat: 'D.M.YYYY' });
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setDate(this.minDate.getDate() + 1);
        this.maxDate.setDate(this.maxDate.getDate() + 91);
        this.lists.povolani = this.paramsService.getPovolani();
        setTimeout(() => {
            this.profeseList();
        }, 50);
    }

    ngOnChanges() {
        // this.r = this.offers.filter( x => x.id === this.data.produkt)[0];
        // console.log('produkt r : ', this.r);
    }
}
