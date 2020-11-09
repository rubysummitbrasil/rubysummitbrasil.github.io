fetch("partials/header.html")
.then(response => {
  return response.text();
})
.then(data => {
  document.querySelector("#header").innerHTML = data;
});

fetch("partials/rubysummitbr.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("#rubysummitbr").innerHTML = data;
});

fetch("partials/speakers.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("#speakers").innerHTML = data;
});

fetch("partials/schedule.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("#schedule").innerHTML = data;
});

fetch("partials/sponsors.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("#sponsors").innerHTML = data;
});

fetch("partials/footer.html")
.then(response => {
  return response.text();
})
.then(data => {
  document.querySelector("#footer").innerHTML = data;
});
