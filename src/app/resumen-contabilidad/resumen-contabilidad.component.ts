import { Component, OnInit } from '@angular/core';
import {Resumen,ResumenService} from '../services/resumen.service'

@Component({
  selector: 'app-resumen-contabilidad',
  templateUrl: './resumen-contabilidad.component.html',
  styleUrls: ['./resumen-contabilidad.component.css'],
  providers:[ResumenService]
})
export class ResumenContabilidadComponent implements OnInit {

  meses:Array<Resumen>
  saldo:Number

  constructor(private resumenService:ResumenService) {
    this.saldo = 10000 
    this.meses=new Array<Resumen>();
    resumenService.getResumenes().subscribe(resumenes=>{ this.meses=resumenes; } );
  }


  ngOnInit() {
  }

}


