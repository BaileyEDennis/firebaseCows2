import form from '../forms/cowForm';

const addCowView = () => {
  $('#app').html('<div id="cow-form"></div>');
  form.cowForm();
};

export default { addCowView };
