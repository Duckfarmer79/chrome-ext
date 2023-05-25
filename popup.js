document.addEventListener('DOMContentLoaded', function() {
    var printForm = document.getElementById('printForm');
    printForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var item = document.getElementById('item').value;
      var quantity = document.getElementById('quantity').value;
      var uom = document.getElementById('uom').value;
      var tag = document.getElementById('tag').value;
  
      var url = 'http://localhost:11180/api/v1/print' +
                '?design=metrctags' +
                '&variables=' + encodeURIComponent(JSON.stringify({
                  "ITEM": item,
                  "QUANTITY": quantity,
                  "UOM": uom,
                  "TAG": tag
                })) +
                '&printer=Zebra-USB-18J194704422' +
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
  