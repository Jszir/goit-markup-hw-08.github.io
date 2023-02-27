const openModalBtn = document.getElementById('data-modal-open');
      const closeModalBtn = document.getElementById('data-modal-close');
      const modal = document.getElementById('data-modal');
      openModalBtn.addEventListener('click', () => {
        modal.classList.add('show-modal');
      });
      closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('show-modal');
      });