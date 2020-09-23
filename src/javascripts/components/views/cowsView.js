import cowData from '../../helpers/data/cowData';
import cowCard from '../cards/cowCard';

const cowsView = () => {
  cowData.getCows().then((response) => {
    response.forEach((item) => {
      $('#app').append(cowCard.cowMaker(item));
    });
  });
};

export default { cowsView };
