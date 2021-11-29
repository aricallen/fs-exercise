const buildCard = (card) => {
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

const render = (cards) => {
  const markup = cards.map(buildCard);
  const output = document.querySelector('#output');
  if (output) {
    output.innerHTML = markup.join('');
  }
};

const onClick = async () => {
  fetch('/users')
    .then((res) => res.json())
    .then((json) => {
      const cards = json.results.map((user) => {
        return {
          firstName: user.name.first,
          lastName: user.name.last,
          avatar: user.picture.thumbnail,
        };
      });
      render(cards);
    });
};

document.querySelector('button')?.addEventListener('click', onClick);
