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
  console.log('READYSTATE', xhr.readyState); // 1: Server connection established

  // old onLoad syntax
  // xhr.onreadystatechange = function () {
  //   console.log('READYSTATE', xhr.readyState); // goes through states 1 - 4
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }
  // we check for state 4 to make sure the state change has run through
  // all of the states, and is now in the ready state, before we do anything

  // Optional - used for spinner/loaders
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState); // 3: processing request
  }
  // this can be used for running code during the processing of the request
  // as data is being fetched

  // Only runs if an erorr occurs
  xhr.onerror = function () {
    console.log('Request error...');
  }


  // Running onLoad instead you will see the state is already at 4
  // by the time onLoad itself runs, this is why we no longer need to
  // check for readyState 4.
  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `
        <tr>
          <th>Text: ${xhr.responseText}</th><br>
          <th>URL: ${xhr.responseURL}</th><br>
          <th>ReadyState: ${xhr.readyState}</th>
        </tr>
      `
    }
  }

  // Send XHR request
  xhr.send();

  // ReadyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // When onLoad loads we are at step 4 of the readyState values

}