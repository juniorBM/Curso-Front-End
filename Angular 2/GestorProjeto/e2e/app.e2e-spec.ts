import { GestorProjeoPage } from './app.po';

describe('gestor-projeo App', () => {
  let page: GestorProjeoPage;

  beforeEach(() => {
    page = new GestorProjeoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
