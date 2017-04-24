import { DiscogsScrobblerPage } from './app.po';

describe('discogs-scrobbler App', () => {
  let page: DiscogsScrobblerPage;

  beforeEach(() => {
    page = new DiscogsScrobblerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
