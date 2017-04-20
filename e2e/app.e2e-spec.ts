import { GithubSearchApiPage } from './app.po';

describe('github-search-api App', () => {
  let page: GithubSearchApiPage;

  beforeEach(() => {
    page = new GithubSearchApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
