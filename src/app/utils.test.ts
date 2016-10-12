
import { ComponentFixture } from '@angular/core/testing';
import { Http, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {InMemoryDbService} from 'angular2-in-memory-web-api'
import {By} from '@angular/platform-browser'

export var httpMockProviders = [ MockBackend,  BaseRequestOptions, {provide: Http, useFactory: (backend, options) => { return new Http(backend, options); }, deps: [MockBackend, BaseRequestOptions]}] 

export function crearRespuestaMockInMemory(mockBacked: MockBackend, inMemoryDbService:InMemoryDbService,nombre:String ){
  const json2=`{"data":`+JSON.stringify(inMemoryDbService.createDb()[""+nombre])+`}`
  crearRespuestaMock(mockBacked,new ResponseOptions({ body: json2}));
}

export function crearRespuestaMock(mockBacked: MockBackend, responseOptions:ResponseOptions ){
      mockBacked.connections.subscribe(connection => {
        connection.mockRespond(new Response(responseOptions));
      });
}

export  function assertText(fixture:ComponentFixture<any>, path:string, textAssert:string){
    expect(fixture.debugElement.query(By.css(path)).nativeElement.textContent).toEqual(textAssert);
}