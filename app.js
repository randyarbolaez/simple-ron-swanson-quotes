let ronSwansonText = document.getElementById('ron-swanson-text');

function thingsRonSwansonSays() {
  fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(res => res.json())
    .then(res => {
      ronSwansonText.innerHTML = res;
      console.log(res);
    });
}
