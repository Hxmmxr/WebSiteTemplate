fetch("data/templates.json")
  .then(res => res.json())
  .then(templates => {
    const container = document.querySelector("#template-list");
    templates.forEach(t => {
      const card = document.createElement("div");
      card.className = "template-card";
      card.innerHTML = `
        <img src="${t.image}" alt="${t.name}">
        <h2>${t.name}</h2>
        <p>${t.description}</p>
        <a href="${t.preview}" target="_blank">Live Demo</a>
        <a href="${t.download}" download>Download</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    document.querySelector("#template-list").innerHTML = "<p>Failed to load templates.</p>";
    console.error(err);
  });
