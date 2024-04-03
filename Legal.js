function changeContent(article) {
    const leftColumn = document.getElementById('left-column-content');
    const rightColumn = document.getElementById('right-column-content');
  
    // Clear existing content
    leftColumn.innerHTML = '';
    rightColumn.innerHTML = '';
  
    if (article === 'article1') {
      leftColumn.innerHTML = `
        <p>This is an introductory paragraph for Article 1 in the left column.</p>
        <h2 style="font-size: 24px;">Subheading for Article 1</h2>
        <p>Paragraph 1 under Article 1 subheading.</p>
        <p>Paragraph 2 under Article 1 subheading.</p>
        <p>Paragraph 3 under Article 1 subheading.</p>
      `;
      rightColumn.innerHTML = `
        <p>Content for Article 1, Paragraph 1 in the right column.</p>
        <p>Content for Article 1, Paragraph 2 in the right column.</p>
        <p>Content for Article 1, Paragraph 3 in the right column.</p>
      `;
    } else if (article === 'article2') {
      leftColumn.innerHTML = `
        <p>This is an introductory paragraph for Article 2 in the left column.</p>
        <h2 style="font-size: 24px;">Subheading for Article 2</h2>
        <p>Paragraph 1 under Article 2 subheading.</p>
        <p>Paragraph 2 under Article 2 subheading.</p>
        <p>Paragraph 3 under Article 2 subheading.</p>
      `;
      rightColumn.innerHTML = `
        <p>Content for Article 2, Paragraph 1 in the right column.</p>
        <p>Content for Article 2, Paragraph 2 in the right column.</p>
        <p>Content for Article 2, Paragraph 3 in the right column.</p>
      `;
    } else if (article === 'article3') {
      leftColumn.innerHTML = `
        <p>This is an introductory paragraph for Article 3 in the left column.</p>
        <h2 style="font-size: 24px;">Subheading for Article 3</h2>
        <p>Paragraph 1 under Article 3 subheading.</p>
        <p>Paragraph 2 under Article 3 subheading.</p>
        <p>Paragraph 3 under Article 3 subheading.</p>
      `;
      rightColumn.innerHTML = `
        <p>Content for Article 3, Paragraph 1 in the right column.</p>
        <p>Content for Article 3, Paragraph 2 in the right column.</p>
        <p>Content for Article 3, Paragraph 3 in the right column.</p>
      `;
    }
  }
  