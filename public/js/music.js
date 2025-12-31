fetch("/src/assets/music.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("music-container");

    data.songs.forEach(song => {
      const card = document.createElement("div");

      card.className = `
        border border-primary
        rounded-xl
        p-4
        transition
        duration-300
        hover:bg-primary
        hover:text-black
      `;

      card.innerHTML = `
        <h2 class="text-2xl font-bold mb-1">
          ${song.title}
        </h2>

        ${
          song.translation
            ? `<h3 class="text-sm italic opacity-80 mb-2">${song.translation}</h3>`
            : ""
        }

        <p class="mb-4 text-sm">
          ${song.description}
        </p>

        <iframe
          class="w-full rounded-xl"
          src="${song.spotify_embed}"
          height="152"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Failed to load music.json", err);
  });

