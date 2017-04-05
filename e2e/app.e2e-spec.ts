import { MychatappPage } from './app.po';

describe('mychatapp App', function() {
  let page: MychatappPage;

  beforeEach(() => {
    page = new MychatappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
