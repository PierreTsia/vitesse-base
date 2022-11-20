context("Profile Page", () => {
  const BASE_API_URL = "https://ayfkzjkikyewseeewwve.supabase.co/rest/v1/";
  const GET_USER_BY_ID = "users?select=*&id=eq.1";
  const GET_USER_API_URL = BASE_API_URL + GET_USER_BY_ID;

  beforeEach(() => {
    cy.visit("/profile/1");
  });

  it("profile-page base elements", () => {
    cy.url().should("eq", "http://localhost:3333/profile/1");

    cy.intercept("GET", GET_USER_API_URL, {
      fixture: "users.json",
    }).as("getUserById");

    cy.get("[data-test-id='']").should("exist");
  });
});
