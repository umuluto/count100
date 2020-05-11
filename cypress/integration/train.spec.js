describe('TrainGame', () => {
  beforeEach(() => {
    cy.visit('public/train.html')
  })

  function moveWagon($wagon, x, y) {
    return cy.wrap($wagon)
      .trigger('mousedown', 'bottomLeft', { which: 1 })
      .trigger('mousemove', 'bottomLeft', { clientX: x, clientY: y })
      .trigger('mouseup', 'bottomLeft', { force: true })
  }

  function pushWagon($wagon) {
    return cy.get('.holder:not(.holder--dim)')
      .last()
      .then($holder => {
        const {x, y} = $holder[0].getBoundingClientRect()
        moveWagon($wagon, x, y)

        cy.wrap($holder)
      })
  }

  it('chuyển cảnh khi hết màn', () => {
    cy.get('.wagon:not(.wagon--engine)')
      .each($wagon => {
        pushWagon($wagon)
      })
    cy.get('.wagon--finished')
      .should('have.length', 6)
  })

  it('nảy lên khi toa tàu quá thấp', () => {
    cy.get('.wagon:not(.wagon--engine)')
      .each($wagon => {
        const {x, y} = $wagon[0].getBoundingClientRect()
        moveWagon($wagon, x, y + 300)
          .should('have.class', 'wagon--snap')
      })
  })

  it('phản hồi khi toa tàu ở gần', () => {
    cy.get('.wagon:not(.wagon--engine)')
      .each($wagon => {
        cy.get('.holder:not(.holder--dim)')
          .last()
          .then($holder => {
            const {x, y} = $holder[0].getBoundingClientRect()
            cy.wrap($wagon)
              .trigger('mousedown', 'bottomLeft', { which: 1 })
              .trigger('mousemove', 'bottomLeft', { clientX: x, clientY: y })
              .should(() => {
                expect($holder).to.have.class('holder--highlight')
              })
              .trigger('mouseup', 'bottomLeft', { force: true })
          })
      })
  })

  it('phản hồi khi toa tàu đặt sai', () => {
    cy.get('.wagon:not(.wagon--engine)')
      .then($wagons => {
        pushWagon($wagons[4])
          .should('have.class', 'holder--wrong')
        pushWagon($wagons[0])
        pushWagon($wagons[1])
        pushWagon($wagons[3])
          .should('have.class', 'holder--wrong')
      })
  })
})
