function addingEventListener() {

    const input = document.getElementById('input');

    function clickAlert() {
        alert('I was clicked!');
      }

      input.addingEventListener('click', clickAlert);

}
addingEventListener();