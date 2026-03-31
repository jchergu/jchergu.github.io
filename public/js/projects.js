fetch("/src/assets/projects.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects-container");

    data.projects.forEach(project => {
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
          ${project.title}
        </h2>

        <p class="mb-4 text-sm">
          ${project.description}
        </p>

        <a
          href="${project.github_link}"
          target="_blank"
          class="inline-block bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary-dark transition duration-300"
        >
          View on GitHub
        </a>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Failed to load projects.json", err);
  });