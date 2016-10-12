/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing'
import {By} from '@angular/platform-browser'



describe('App: AngularCliEsqueleto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule.forRoot()
      ,RouterTestingModule.withRoutes([])]
      ,declarations: [
        AppComponent
      ],
    });
  });
  
  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Ejemplo de una aplicación!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(fixture.debugElement.query(By.css('md-toolbar span')).nativeElement.textContent).toBe('Ejemplo de una aplicación!');
  }));
});
