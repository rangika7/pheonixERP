import { Erpsystem1Page } from './app.po';

describe('erpsystem1 App', function() {
  let page: Erpsystem1Page;

  beforeEach(() => {
    page = new Erpsystem1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
