describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Resultado 12 y -14', () =>{
    cy.get('[id="1"]').click();
    cy.get('[id="2"]').click();
    cy.get('[id="menos"]').click();
    cy.get('[id="1"]').click();
    cy.get('[id="4"]').click();
    cy.get('[id="igual"]').click();
    cy.contains('-2').should('exist');
  }
  )

  it('Resultado 1.2.5 y -14', () =>{
    cy.get('[id="1"]').click();
    cy.get('[id="punto"]').click();
    cy.get('[id="2"]').click();
    cy.get('[id="punto"]').click();
    cy.get('[id="5"]').click();
    cy.get('[id="menos"]').click();
    cy.get('[id="1"]').click();
    cy.get('[id="4"]').click();
    cy.get('[id="igual"]').click();
    cy.contains('ERROR: Sintaxis incorrecta').should('exist');
  }
  )

  it('Resultado 1.2 + 1.4', () =>{
    cy.get('[id="1"]').click();
    cy.get('[id="punto"]').click();
    cy.get('[id="2"]').click();
    cy.get('[id="mas"]').click();
    cy.get('[id="1"]').click();
    cy.get('[id="punto"]').click();
    cy.get('[id="4"]').click();
    cy.get('[id="igual"]').click();
    cy.contains('2.6').should('exist');
  }
  )

  it('Resultado 1.2 ++ 4', () =>{
    cy.get('[id="1"]').click();
    cy.get('[id="punto"]').click();
    cy.get('[id="2"]').click();
    cy.get('[id="mas"]').click();
    cy.get('[id="mas"]').click();
    cy.contains('ERROR: Operacion no valida').should('exist');
  }
  )

  it('Resultado 1.2 ++ 4', () =>{
    cy.get('[id="1"]').click();
    cy.get('[id="punto"]').click();
    cy.get('[id="2"]').click();
    cy.get('[id="mas"]').click();
    cy.get('[id="mas"]').click();
    cy.contains('ERROR: Operacion no valida').should('exist');
    cy.get('[id="4"]').click();
    cy.get('[id="igual"]').click();
    cy.contains('5.2').should('exist');
  }
  )
})