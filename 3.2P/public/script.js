document.addEventListener('DOMContentLoaded', function () {
  const modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  loadCards();
});

function loadCards() {
  fetch('/api/items')
    .then(response => response.json())
    .then(data => {
      const cardSection = document.getElementById('card-section');
      cardSection.innerHTML = '';

      data.forEach(item => {
        const cardHTML = `
          <div class="col s12 m4">
            <div class="card medium">
              <div class="card-image">
                <img src="${item.image}" alt="${item.title}">
                <span class="card-title">${item.title}</span>
              </div>
              <div class="card-content">
                <p>${item.description}</p>
              </div>
              <div class="card-action">
                <a href="#info-modal" class="modal-trigger">Open Modal</a>
              </div>
            </div>
          </div>
        `;
        cardSection.innerHTML += cardHTML;
      });

      const modals = document.querySelectorAll('.modal');
      M.Modal.init(modals);
    })
    .catch(error => {
      console.error('Error loading cards:', error);
    });
}