//your code here
cy.get("div").then(span => {
  const text = span.text().trim();
  expect(text).to.eq("Welcome to the world of Web development"); // Remove the backticks
});

