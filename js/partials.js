const RubySummit = {
  renderSpeakerInfo: function(talk) {
    const speakerInfo = talk.name.map((name,index) => {
      speaker = talk.socialMedia[index] ? `
      <a
        href="${talk.socialMedia[index]}" target="_blank"
        class="speaker-name" title="${name}">
        ${name || ""}
      </a>` : `${name || ""}`

      if(talk.name.length === 1 && talk.position[index]) {
        speaker += `<br>${talk.position[index]}`

        if (talk.company[index]) {
          speaker += ` @ ${talk.company[index]}`
        }
      }

      return speaker
    }).join(", ")

    return speakerInfo
  },
  renderSchedule: function() {
    fetch("data/schedule.json")
    .then(response => {
      return response.json()
    })
    .then(schedule => {
      schedule.map(track => {
        const trackDay = document.querySelector(`.track[data-day="${track.day}"]`)

        const table = trackDay.querySelector('tbody')

        track.talks.forEach(talk => {
          table.innerHTML +=
            `
              <tr class="talk-info">
                <td>
                  <span title="${talk.hour}"><strong>${talk.hour}</strong></span>
                </td>
                <td>
                  <span class="title" title="${talk.title}"><strong>${talk.title}</strong></span>
                  <br>
                  ${this.renderSpeakerInfo(talk)}
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
  }
}

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

fetch("partials/schedule.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("#schedule").innerHTML = data;

  RubySummit.renderSchedule();
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
