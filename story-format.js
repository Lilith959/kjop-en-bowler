document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll('.story-article');

  const splitIntoChunks = (text, targetLength = 420) => {
    const clean = text.replace(/\s+/g, ' ').trim();
    if (!clean) {
      return [];
    }

    const sentences = clean
      .split(/(?<=[.!?])\s+(?=[A-ZÆØÅ"“])/u)
      .map((value) => value.trim())
      .filter(Boolean);

    if (sentences.length < 2) {
      return [clean];
    }

    const chunks = [];
    let current = '';

    for (const sentence of sentences) {
      const combined = current ? `${current} ${sentence}` : sentence;

      if (combined.length > targetLength && current) {
        chunks.push(current);
        current = sentence;
      } else {
        current = combined;
      }
    }

    if (current) {
      chunks.push(current);
    }

    return chunks;
  };

  articles.forEach((article) => {
    const paragraphs = Array.from(article.querySelectorAll('p'));

    paragraphs.forEach((paragraph) => {
      const text = paragraph.textContent || '';

      if (text.trim().length < 900) {
        return;
      }

      const chunks = splitIntoChunks(text, 420);
      if (chunks.length < 2) {
        return;
      }

      const fragment = document.createDocumentFragment();
      chunks.forEach((chunk) => {
        const nextParagraph = document.createElement('p');
        nextParagraph.textContent = chunk;
        fragment.appendChild(nextParagraph);
      });

      paragraph.replaceWith(fragment);
    });
  });
});
