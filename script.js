let buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (event) => {
    console.log('event - ', event, '\n', 'event.target - ', event.target);

    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'white') {
      body.style.backgroundColor = 'lightgrey';
    } else if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
  });
});
