/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResumenService } from './resumen.service';
import {MockBackend} from '@angular/http/testing';
import {Resumen} from './resumen.service'
import {InMemoryResumenService} from '../in-memory/InMemoryResumenService'

import {httpMockProviders, crearRespuestaMockInMemory} from '../utils.test'

describe('Service: Resumen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [httpMockProviders,ResumenService]
    });
  });

  it('Si esta', inject([ResumenService], (service: ResumenService) => {
    expect(service).toBeTruthy();
  }));

  it('obtener resumenes',inject([ResumenService, MockBackend], (resumenService: ResumenService, mockBacked: MockBackend)=> {
    crearRespuestaMockInMemory(mockBacked,new InMemoryResumenService(),"resumenes");
    resumenService.getResumenes().subscribe((res:Resumen[])=>{
      console.info(res)
      expect(res.length).toEqual(3)
      expect(res[0].id).toBe(1);
      expect(res[0].saldo).toEqual(450)
      expect(res[1].id).toBe(2);
      expect(res[1].saldo).toEqual(450)
    });
  }));
});