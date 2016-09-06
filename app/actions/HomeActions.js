/**
 * Created by daiyingheng on 16/9/6.
 */
import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getArticlesSuccess',
      'getArticlesFail'
    );
  }

  getArticles() {
    console.log('11111111');
    $.ajax({
      url: '/api/articles'
    })
    .done(data => {
      this.actions.getArticlesSuccess(data);
    })
    .fail(jqXhr => {
      this.actions.getArticlesFail(jqXhr.responseJSON.message);
    })
  }
}

export default alt.createActions(HomeActions);