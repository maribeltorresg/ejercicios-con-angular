import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
})
export class MypipePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    const date = new Date(value);
    const now = new Date();

    const segundo = 1000;
    const minuto = 60 * segundo;
    const hora = 60 * minuto;
    const dia = 24 * hora;
    const mes = 30 * dia;

    const milisegundosQuePasaron = now.getTime() - date.getTime();

    let result = '';

    // 1 a 59 minutos => min ago
    if (milisegundosQuePasaron < hora) {
      result =
        Math.floor(milisegundosQuePasaron / minuto).toString() + ' min ago';
    }

    // 1 a 23 horas => hrs ago
    else if (milisegundosQuePasaron < dia) {
      result =
        Math.floor(milisegundosQuePasaron / hora).toString() + ' hrs ago';
    }

    // 1 a 9 dias => days ago
    else if (milisegundosQuePasaron < 10 * dia) {
      result =
        Math.floor(milisegundosQuePasaron / dia).toString() + ' days ago';
    }

    // de 10 a mas dias => dia y mes
    else {
      result = date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
      });
    }

    return result;
  }
}
