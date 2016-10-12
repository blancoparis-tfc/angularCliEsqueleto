import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class ResumenService {

  private pathResumen = 'app/resumenes';

  constructor(private http: Http) { }

    getResumenes() {
    return this.http.get(this.pathResumen)
               .map(response => 
               response.json().data
               .map(dato=>Resumen.parse(dato)) )
    }
}

export class Resumen{
  constructor(public id:number,public mes:string,public ingresos:number,public gastos:number,public gastosFijos:number){}
  static parse(dato:any):Resumen{
    return new Resumen(
      parseInt(dato.id)
      ,dato.mes
      ,parseFloat(dato.ingresos)
      ,parseFloat(dato.gastos)
      ,parseFloat(dato.gastosFijos));
  }
  get saldo():number {
    return this.ingresos-this.gastos-this.gastosFijos;
  }
}