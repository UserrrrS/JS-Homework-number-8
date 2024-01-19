
async function fetchData() {
  const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=9&_gender=male');
  const { data: users } = await response.json();

  const cardsContainer = document.getElementById('cards-container');

  users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('card');

    const userHeading = document.createElement('h3');
    userHeading.innerText = 'User';

    const nameParagraph = document.createElement('p');
    nameParagraph.innerText = `Name: ${user.firstname} ${user.lastname}`;

    const emailParagraph = document.createElement('p');
    emailParagraph.innerText = `Email: ${user.email}`;


    const textParagraph = document.createElement('p');
    textParagraph.innerText = `username: ${user.username}`;

    card.appendChild(userHeading);
    card.appendChild(nameParagraph);
    card.appendChild(emailParagraph);
    card.appendChild(textParagraph);

    cardsContainer.appendChild(card);
  });
}

fetchData();
