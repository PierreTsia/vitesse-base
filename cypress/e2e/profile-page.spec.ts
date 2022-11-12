context("Profile Page", () => {
  beforeEach(() => {
    cy.visit("/profile/1");
  });

  it("profile-page base elements", () => {
    cy.url().should("eq", "http://localhost:3333/profile/1");

    cy.contains("Cersei Lannister").should("exist");
  });
});
