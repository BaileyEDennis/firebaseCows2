import cowData from '../../helpers/data/cowData';

const updateCowView = (cowsFirebaseKey) => {
  $('#app').html('<div id="update-cow-form"></div>');
  cowData.getSingleCow(cowsFirebaseKey).then((response) => {
    console.warn(response);
  });
};

export default { updateCowView };
