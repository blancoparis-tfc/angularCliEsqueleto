import { AngularCliEsqueletoPage } from './app.po';

describe('angular-cli-esqueleto App', function() {
  let page: AngularCliEsqueletoPage;

  beforeEach(() => {
    page = new AngularCliEsqueletoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
