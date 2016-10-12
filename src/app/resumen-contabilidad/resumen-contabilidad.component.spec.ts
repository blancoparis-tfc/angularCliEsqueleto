/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { ResumenContabilidadComponent } from './resumen-contabilidad.component';
import { MaterialModule } from '@angular/material';
import {InMemoryWebApiModule} from 'angular2-in-memory-web-api'
import {InMemoryResumenService} from '../in-memory/InMemoryResumenService'
import {ResumenService} from '../services/resumen.service'
import {MockBackend} from '@angular/http/testing';
import {httpMockProviders, crearRespuestaMockInMemory, assertText} from '../utils.test'
import {By} from '@angular/platform-browser'


describe('Component: ResumenContabilidad', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule.forRoot()]
      ,providers: [httpMockProviders,ResumenService]
      ,declarations:[ResumenContabilidadComponent]
    });
  });
 
  it('Creación de la instancia', inject([ResumenService], (resumenService: ResumenService)=> {
    let fixture = TestBed.createComponent(ResumenContabilidadComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('Mirar el saldo', inject([ResumenService], (resumenService: ResumenService)=> {
      let fixture = TestBed.createComponent(ResumenContabilidadComponent);
      let app = fixture.debugElement.componentInstance;
      //console.info('APP',app.saldo);
      expect(app.saldo).toEqual(10000);
  }));

  it('Mirar los meses', inject([ResumenService,MockBackend], (resumenService: ResumenService, mockBacked: MockBackend)=> {
      crearRespuestaMockInMemory(mockBacked,new InMemoryResumenService(),"resumenes");
      let fixture = TestBed.createComponent(ResumenContabilidadComponent);
      let app = fixture.debugElement.componentInstance;
      //console.info('APP',app.saldo);
      
      console.info('meses',app.meses);
      expect(app.saldo).toEqual(10000);
      expect(app.meses.length).toEqual(3);
      
  }));

  it('Mirar La pantalla', inject([ResumenService,MockBackend], (resumenService: ResumenService, mockBacked: MockBackend)=> {
      crearRespuestaMockInMemory(mockBacked,new InMemoryResumenService(),"resumenes");
      let fixture = TestBed.createComponent(ResumenContabilidadComponent);
      let app = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      assertText(fixture,'md-card md-card-subtitle','Aqui tenemos toda nuestra situación contable, agrupada por mes');
      assertText(fixture,'md-card md-card-title','La situación contable');
      assertText(fixture,'md-card md-card-content p','Partimos del saldo inicial: 10000 €');
      //md-list
      let listItem=fixture.debugElement.query(By.css("md-list")).children;
      expect(listItem[0].query(By.css("p")).nativeElement.textContent).toEqual(' Agosto 2500/850 = 450 ')
      expect(listItem[1].query(By.css("p")).nativeElement.textContent).toEqual(' Septiembre 2500/850 = 450 ')
      expect(listItem[2].query(By.css("p")).nativeElement.textContent).toEqual(' Octubre 2500/850 = 450 ')
}));

});
