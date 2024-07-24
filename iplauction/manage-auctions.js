function editAuction(auctionId) {
  alert('Edit auction with ID: ' + auctionId);
}

function deleteAuction(auctionId) {
  alert('Delete auction with ID: ' + auctionId);
}

const editButtons = document.querySelectorAll('.edit-button');
editButtons.forEach(button => {
  button.addEventListener('click', function() {
      const auctionId = this.parentNode.parentNode.firstElementChild.textContent; // Get auction ID from the first column of the table row
      editAuction(auctionId);
  });
});

const deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach(button => {
  button.addEventListener('click', function() {
      const auctionId = this.parentNode.parentNode.firstElementChild.textContent; // Get auction ID from the first column of the table row
      deleteAuction(auctionId);
  });
});
