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

fetch("data/schedule.json")
.then(response => {
  return response.json()
})
.then(schedule => {
  schedule.map(track => {
    const trackDay = document.querySelector('.track[data-day="${track.day}"]')

    const table = trackDay.querySelector('tbody')
    track.talks.forEach(talk => {
      name = talk.name ? `<br /> ${talk.name}` : ''

      table.innerHTML +=
        `
          <tr class="talk-info">
          <td>
            <span title="${talk.hour}"><strong>${talk.hour}</strong></span>
          </td>
          <td>
            <span class="title" title="${talk.title}"><strong>${talk.title}</strong></span>
            <span class="speaker-name" title="${name}">${name}</span>
          </td>
        </tr>
        `
      if(talk.description) {
        table.innerHTML +=
          `
          <tr class="talk-description">
            <td colspan="2">
              <span class="description" title="${talk.description}">${talk.description}</span>
            </td>
          </tr>
          `
      }
    })
  })
})

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
