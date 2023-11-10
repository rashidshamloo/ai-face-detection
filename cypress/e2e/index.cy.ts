// API intercept
import { intercept } from '../intercept/intercept';

describe('Testing if elements render properly', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Testing if sample image buttons render properly', () => {
    cy.get('button').then((button) => expect(button.length).to.eq(4));
  });
  it('Testing if upload drop zone renders properly', () => {
    cy.get('input[type="file"]').should('exist');
  });
});

describe('Testing face detection workflows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Testing with sample image', () => {
    // click the sample image #1 button
    cy.get('button[aria-label="Sample 1"').trigger('click');
    // result image should exist
    cy.get('img[alt="Result Image"]').should('exist');
  });
  it('Testing with upload drop zone', () => {
    // intercept API requests and provide pre-saved responses
    intercept();
    // attach file to the file input
    cy.get('input[type="file"]').attachFile('sample.jpg');
    // click the upload button
    cy.get('button[data-state="ready"]').trigger('click');
    // result image should exist
    cy.get('img[alt="Result Image"]', { timeout: 10000 }).should('exist');
  });
  it('Testing "Use another Image" button', () => {
    // click the sample image #1 button
    cy.get('button[aria-label="Sample 1"').trigger('click');
    // clicking on the "Use another image" button
    // should navigate back to the main page
    cy.get('button').trigger('click');
    // check if file upload zone exists
    cy.get('input[type="file"]').should('exist');
  });
});
