context("Profile Page", () => {
  const BASE_API_URL = "https://ayfkzjkikyewseeewwve.supabase.co/rest/v1/";
  const GET_USER_BY_ID = "users?select=*&id=eq.1";
  const GET_SKILLS_TRACKS =
    "skills?select=id%2Cdescription%2Cindicators%2Ctracks%28id%2Cdescription%2Csteps%28description%2Cscore%2Cexamples%29%29";
  const GET_USER_API_URL = BASE_API_URL + GET_USER_BY_ID;
  const GET_SKILLS_API_URL = BASE_API_URL + GET_SKILLS_TRACKS;

  const SKILLS = ["building", "executing", "supporting", "strengthening"];

  beforeEach(() => {
    cy.visit("/profile/1");
    cy.intercept("GET", GET_USER_API_URL, {
      fixture: "users.json",
    }).as("getUserById");

    cy.intercept("GET", GET_SKILLS_API_URL, {
      fixture: "skills-tracks.json",
    }).as("getSkillsTracks");
  });

  it("should display user profile", () => {
    cy.url().should("eq", "http://localhost:3333/profile/1");

    cy.get("[data-test-id='user-profile']").should("be.visible");
    cy.get("[data-test-id='user-profile']").should(
      "contain.text",
      "Cersei Lannister"
    );
  });

  it("should display skills", () => {
    cy.get("[data-test-id='skills']").should("be.visible");

    SKILLS.forEach((skillId) => {
      cy.get(`[data-test-id='skill-${skillId}']`).should("be.visible");
      cy.get(`[data-test-id='skill-${skillId}']`).should(
        "contain.text",
        skillId.charAt(0).toUpperCase() + skillId.slice(1)
      );
    });
  });

  it("should display 19 tracks", () => {
    cy.get(".track").should("have.length", 19);
  });

  it("should set the selected track on click", () => {
    cy.get("[data-test-id='track-front-end']").should("be.visible");
    cy.get("[data-test-id='track-front-end']").trigger("click");

    cy.get("[data-test-id='selected-track-details']").should("be.visible");
    cy.get("[data-test-id='selected-track-details']").should(
      "contain.text",
      "Front-end"
    );
    cy.get("[data-test-id='selected-track-details']").should(
      "contain.text",
      "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript"
    );

    cy.get("[data-test-id='track-initiative']").trigger("click");
    cy.get("[data-test-id='selected-track-details']").should(
      "contain.text",
      "Challenges the status quo and effects positive organizational change outside of mandated work"
    );
  });

  it("should display the track levels info", () => {
    cy.get("[data-test-id='track-front-end']").trigger("click");
    cy.get("[data-test-id='steps-ladder']").should("be.visible");
    cy.get("[data-test-id='steps-ladder'] .step").should("have.length", 5);

    cy.get("[data-test-id='active-step-details']").should("be.visible");
    cy.get("[data-test-id='active-step-details']").should(
      "contain.text",
      "Works effectively within established web client architectures, following current best practices"
    );

    cy.get("[data-test-id='steps-ladder'] .step").first().trigger("click");
    cy.get("[data-test-id='active-step-details']").should(
      "contain.text",
      "Is an industry-leading expert in web client or sets strategic web client direction for an eng team"
    );
  });
});
