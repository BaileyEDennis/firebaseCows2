import farmerData from '../../helpers/data/farmerData';

const updateCowForm = (cowObject) => {
  $('#update-cow-form').html(`
    <h2>Add A Horsey Cow to Your Pasture</h2>
    <div id="success-message"></div>
    <form>
      <div id="error-message"></div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" value="${cowObject.name}" placeholder="Example: Betsy">
      </div>
      <div class="form-group">
        <label for="breed">Breed</label>
        <input type="text" class="form-control" value="${cowObject.breed}" id="breed" placeholder="Example: Angus">
      </div>
      <div class="form-group">
        <label for="location">Location</label>
        <input type="text" class="form-control" id="location" value="${cowObject.location}" placeholder="Example: Nashville">
      </div>
      <div class="form-group">
        <label for="weight">Weight</label>
        <input type="number" class="form-control" id="weight" value="${cowObject.weight}" placeholder="Example: 5000">
      </div>
      <div class="form-group">
        <label for="farmer">Farmer</label>
          <select class="form-control" id="farmer">
            <option value="">Select a Farmer</option>
          </select>
      </div>
      <button id="update-cow-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Update Cow</button>
    </form>
  `);
  farmerData.getAllFarmers().then((response) => {
    response.forEach((item) => {
      $('select').append(
        `<option value="${item.uid}" ${
          cowObject.farmerUid === item.uid ? "selected='selected'" : ''
        }>${item.name}</option>`
      );
    });
  });
};
export default { updateCowForm };
