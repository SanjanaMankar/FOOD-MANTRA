document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.quantity-selector').forEach(selector => {
      const minusButton = selector.querySelector('#button-minus');
      const plusButton = selector.querySelector('#button-plus');
      const input = selector.querySelector('input');
  
      minusButton.addEventListener('click', function () {
        if (input.value > 1) {
          input.value = parseInt(input.value) - 1;
        }
      });
  
      plusButton.addEventListener('click', function () {
        input.value = parseInt(input.value) + 1;
      });
    });
  
    document.querySelectorAll('.rating-star').forEach(star => {
      star.addEventListener('click', function () {
        const rating = parseInt(this.getAttribute('data-rating'));
        const parent = this.parentNode;
  
        parent.querySelectorAll('.rating-star').forEach(s => {
          s.classList.remove('checked');
        });
  
        for (let i = 1; i <= rating; i++) {
          parent.querySelector(`.rating-star[data-rating="${i}"]`).classList.add('checked');
        }
      });
    });
  });
  