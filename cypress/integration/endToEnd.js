describe('End to end test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should render 3 products and an empty basket', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-cy=products-list]').children().should('have.length', 3);

    cy.get('[data-cy=products-list]').children().eq(0).within(() => {
      cy.contains('Beans').end();
      cy.contains('£0.5');
    });

    cy.get('[data-cy=products-list]').children().eq(1).within(() => {
      cy.contains('Coke').end();
      cy.contains('£0.7');
    });

    cy.get('[data-cy=products-list]').children().eq(2).within(() => {
      cy.contains('Oranges').end();
      cy.contains('£1.99/Kg');
    });

    cy.get('[data-cy=sub-total]').contains('£0');
    cy.get('[data-cy=total-to-pay]').contains('£0');
  });

  it('Should add a product', () => {
    cy.get('[data-cy=products-list]').children().first().within(() => {
      cy.get('[data-cy=add-product]').click();
    });

    cy.get('[data-cy=products-items]').children().should('have.length', 1);

    cy.get('[data-cy=sub-total]').contains('£0.5');
    cy.get('[data-cy=total-to-pay]').contains('£0.5');
  });

  it('Should add a product and delete it', () => {
    cy.get('[data-cy=products-list]').children().first().within(() => {
      cy.get('[data-cy=add-product]').click();
    });

    cy.get('[data-cy=products-items]').children().should('have.length', 1);
    cy.get('[data-cy=products-items]').children().get('[data-cy=delete-product]').click();

    cy.get('[data-cy=sub-total]').contains('£0');
    cy.get('[data-cy=total-to-pay]').contains('£0');
  });

  it('Should add a 3 different products', () => {
    cy.get('[data-cy=products-list]').children().eq(0).within(() => {
      cy.get('[data-cy=add-product]').click();
    });

    cy.get('[data-cy=products-list]').children().eq(1).within(() => {
      cy.get('[data-cy=add-product]').click();
    });

    cy.get('[data-cy=products-list]').children().eq(2).within(() => {
      cy.get('[data-cy=add-product]').click();
    });

    cy.get('[data-cy=products-items]').children().should('have.length', 3);

    cy.get('[data-cy=sub-total]').contains('£3.19');
    cy.get('[data-cy=total-to-pay]').contains('£3.19');
  });

  it('Should add a product with offer', () => {
    cy.get('[data-cy=products-list]').children().eq(0).within(() => {
      cy.get('[data-cy=add-product]').click();
      cy.get('[data-cy=add-product]').click();
      cy.get('[data-cy=add-product]').click();
    });

    cy.get('[data-cy=products-items]').children().should('have.length', 1);
    cy.get('[data-cy=offers-items]').children().should('have.length', 1);

    cy.get('[data-cy=sub-total]').contains('£1.5');
    cy.get('[data-cy=total-savings]').contains('£-0.5');
    cy.get('[data-cy=total-to-pay]').contains('£1');
  });

  it('Should add an other product with offer', () => {
    cy.get('[data-cy=products-list]').children().eq(1).within(() => {
      cy.get('[data-cy=add-product]').click();
      cy.get('[data-cy=add-product]').click();
      cy.get('[data-cy=add-product]').click();
      cy.get('[data-cy=add-product]').click();
      cy.get('[data-cy=add-product]').click();
      cy.get('[data-cy=add-product]').click();
      cy.get('[data-cy=add-product]').click();
    });

    cy.get('[data-cy=products-items]').children().should('have.length', 1);
    cy.get('[data-cy=offers-items]').children().should('have.length', 1);

    cy.get('[data-cy=sub-total]').contains('£4.9');
    cy.get('[data-cy=total-savings]').contains('£-1.2');
    cy.get('[data-cy=total-to-pay]').contains('£3.7');
  });

  it('Should add multiple products with offers', () => {
    cy.get('[data-cy=products-list]').children().eq(0).within(() => {
      cy.get('[data-cy=add-product]').click();
      cy.get('[data-cy=add-product]').click();
      cy.get('[data-cy=add-product]').click();
      cy.get('[data-cy=add-product]').click();
    });

    cy.get('[data-cy=products-list]').children().eq(1).within(() => {
      cy.get('[data-cy=add-product]').click();
      cy.get('[data-cy=add-product]').click();
      cy.get('[data-cy=add-product]').click();
    });

    cy.get('[data-cy=products-list]').children().eq(2).within(() => {
      cy.get('[data-cy=add-product]').click();
    });

    cy.get('[data-cy=products-items]').children().should('have.length', 3);
    cy.get('[data-cy=offers-items]').children().should('have.length', 2);

    cy.get('[data-cy=sub-total]').contains('£6.09');
    cy.get('[data-cy=total-savings]').contains('£-0.9');
    cy.get('[data-cy=total-to-pay]').contains('£5.19');
  });

  it('Should add product with different quantity value', () => {
    cy.get('[data-cy=products-list]').children().eq(0).within(() => {
      cy.get('input').type('{uparrow}');
      cy.get('[data-cy=add-product]').click();
    });

    cy.get('[data-cy=products-items]').children().should('have.length', 1);

    cy.get('[data-cy=sub-total]').contains('£1');
    cy.get('[data-cy=total-to-pay]').contains('£1');
  });

  it('Should add multiple product with different quantities values', () => {
    cy.get('[data-cy=products-list]').children().eq(0).within(() => {
      cy.get('input').type('{uparrow}');
      cy.get('[data-cy=add-product]').click();
      cy.get('[data-cy=add-product]').click();
    });

    cy.get('[data-cy=products-list]').children().eq(1).within(() => {
      cy.get('input').type('{backspace}3');
      cy.get('[data-cy=add-product]').click();
    });

    cy.get('[data-cy=products-list]').children().eq(2).within(() => {
      cy.get('input').type('{backspace}-1');
      cy.get('[data-cy=add-product]').click();
    });

    cy.get('[data-cy=products-items]').children().should('have.length', 2);
    cy.get('[data-cy=offers-items]').children().should('have.length', 2);

    cy.get('[data-cy=sub-total]').contains('£4.1');
    cy.get('[data-cy=total-savings]').contains('£-0.9');
    cy.get('[data-cy=total-to-pay]').contains('£3.2');
  });
});
