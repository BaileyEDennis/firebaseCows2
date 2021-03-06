import farmersView from '../components/views/farmersView';
import cowsView from '../components/views/cowsView';
import addCowsView from '../components/views/addCowView';
import updateCowsView from '../components/views/updateCowView';

const viewHelper = (id, arg) => {
  $('#app').html('');
  switch (id) {
    case 'farmers-link':
      return farmersView.farmersView();
    case 'cows-link':
      return cowsView.cowsView();
    case 'add-cow-link':
      return addCowsView.addCowView();
    case 'update-cow-link':
      return updateCowsView.updateCowView(arg);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('.nav-item').on('click', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('#body').on('click', '.update-cow', (e) => {
    viewHelper('update-cow-link', e.currentTarget.id);
  });
};

export default { viewListener };
