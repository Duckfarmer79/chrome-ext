document.addEventListener('DOMContentLoaded', function() {
  var printForm = document.getElementById('printForm');
  printForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var toAddress = document.getElementById('to').value;
    var fromAddress = document.getElementById('from').value;

    var url = 'http://localhost:11180/api/v1/print' +
              '?design=tofrom' +
              '&variables=' + encodeURIComponent(JSON.stringify({
                "TO": toAddress,
                "FROM": fromAddress
              })) +
              '&printer=Zebra-USB-28J152801038' +
              '&window=hide' +
              '&copies=1';

    fetch(url, { method: 'POST' })
      .then(function(response) {
        // Handle the response if needed
      })
      .catch(function(error) {
        // Handle errors if any
      });
  });
});
