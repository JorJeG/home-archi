import Actions from './Flux/Actions';
import NewStore from './Flux/Store'; // eslint-disable-line no-unused-vars

const sendServer = document.querySelector('.view-stub__apply');
const input = document.querySelector('.view-stub__input');

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && input.value !== '') {
    Actions.sendData(input.value);
    input.value = '';
  } else {
    Actions.typing(input.value);
  }
});

sendServer.addEventListener('click', () => {
  if (input.value !== '') {
    Actions.sendData(input.value);
  }
});
