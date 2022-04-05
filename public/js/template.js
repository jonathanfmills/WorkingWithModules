const errorMessage = "<p><em>You do not have any list items yet. Try adding one with the form above.</em></p>";

const applyTemplate = (item) => {
    return `<div class="col-xs-12 col-sm-4 col-md-4 adj_text"><h3>${item.title}</h3>
            <p>${item.tagline}</p>
            <img src="${item.img}" alt="${item.alt}" />

            <div class="read-more-btn">
                <a href="${item.link}" class="btn-oval">Learn More</a>
            </div></div>`;
};

const sessionTemplate = (sessions) => {
  // If there are no list items
  if (sessions < 1) return errorMessage;

  return (
    "" +
    sessions.map(applyTemplate)
      .join("") +
    ""
  );
};

export {sessionTemplate, errorMessage};
