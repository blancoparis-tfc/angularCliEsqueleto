import { AngularCliEsqueletoPage } from './app.po';
import {  element, by } from 'protractor';


describe('angular-cli-esqueleto App', function() {
  let page: AngularCliEsqueletoPage;

  beforeEach(() => {
    page = new AngularCliEsqueletoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
     expect(element(by.css('md-toolbar span')).getText()).toEqual('Ejemplo de una aplicación!');
  });
});
