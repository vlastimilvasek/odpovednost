import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menaFormatInfo'
})
export class MenaFormatInfoPipe implements PipeTransform {

    transform(value: string): string {
        let res = '';
        if (!isNaN(Number(value)) && Number(value)) {
            const cislo = Math.round( Number(value || ''));
            if (cislo >= 0) {
                if (cislo === 999999) {
                    res = 'neomezeno';
                } else {
                    res = '<div class="text-right">' + cislo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;') + '&nbsp;Kč</div>';
                }
            } else if (cislo === -1) {
                res = '<div class="text-right"><i class="mr-2 fas fa-minus"></i></div>';
            } else if (cislo === -2) {
                res = '<div class="text-right"><i class="mr-2 fas fa-times"></i></div>';
            }
        }
        return res;
    }

}
