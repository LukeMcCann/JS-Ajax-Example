// OnClick #button loadData
document.querySelector('#button').addEventListener('click', loadData);

function loadData() {

  // Create XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  // Specify the type of request to make
  // and the URL or filename to make it to 
  // Params: REQUEST, URL, ASYNC
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  }

  // Send XHR request
  xhr.send();

}