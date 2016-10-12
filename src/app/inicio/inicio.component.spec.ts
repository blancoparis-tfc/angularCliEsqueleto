/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InicioComponent } from './inicio.component';
import { MaterialModule } from '@angular/material';
import { assertText} from '../utils.test'



describe('Component: Inicio', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[MaterialModule.forRoot()],
      declarations:[InicioComponent]
    });
  });
 it('Creación de la instancia', inject([], ()=> {
    let fixture = TestBed.createComponent(InicioComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
 it('Pintar', inject([], ()=> {
    let fixture = TestBed.createComponent(InicioComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    assertText(fixture,'md-card','Es la aplicación de ejemplo. ')
    expect(app).toBeTruthy();
  }));
});
