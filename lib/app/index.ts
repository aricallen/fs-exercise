type CardConfig = {
  firstName: string;
  lastName: string;
  avatar: string;
};

const buildCard = (card: CardConfig) => {
  return `
    <div class="card">
      <div class="top-row">
        <img src="${card.avatar}" />
      </div>

      <div class="bottom-row">
        <span class="first-name">${card.firstName}</span>
        <span class="last-name">${card.lastName}</span>
      </div>
    </div>
  `;
};

const render = (cards: CardConfig[]) => {
  const markup = cards.map(buildCard);
  document.querySelector('#output').innerHTML = markup.join('');
};


const onClick = () => {

};

document.querySelector('.button').addEventListener('click', onClick);