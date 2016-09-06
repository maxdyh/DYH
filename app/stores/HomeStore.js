/**
 * Created by daiyingheng on 16/9/6.
 */
import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.articles = [];
  }

  onGetArticlesSuccess(data) {
    this.articles = data;
  }

  onGetArticleFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(HomeStore);