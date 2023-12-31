import icons from 'url:../../img/icons.svg';
import View from './View';
import previewView from './previewView';

class ResultView extends View {
  _parentElement = document.querySelector(`.results`);
  _errorMessage = `No recipe found for your query.<br>Pls try another one`;
  _successMessage = ``;

  _generateMarkup() {
    // console.log(this._data);

    return this._data.map(result => previewView.render(result, false)).join();
  }
}

export default new ResultView();
