// https://docs.cypress.io/api/introduction/api.html
/* eslint-disable */
describe('App running', () => {
  it('should load data from api', () => {
    cy.visit('http://localhost:8000/')
    cy.contains('h1.page-title', 'BRAND')
    cy.get('ul.product-list').should('contain', 'li')
  })
  it('should have not added items', () => {
    cy.get('.header-bag__price').should((el) => {
      expect(el).to.contain.text('0.00')
    })
    cy.get('.bag__item-counter').should((el) => {
      expect(el.eq(0)).to.contain.text('0')
      expect(el.eq(1)).to.contain.text('0')
    })
  })
})

describe('Add item to bag', () => {
  let price, count
  beforeEach(() => {
    cy.get('.product__add-to-cart').first().click({force: true})
  })
  describe('Valid', () => {
    it('should add item to bag', () => {
      cy.get('.header-bag__price').should((el) => {
        price = el.eq(0).text()
        expect(el).to.contain.not.text('0.00')
      })
    })

    it('should update bag count', () => {
      cy.get('.bag__item-counter').should((el) => {
        count = el.eq(0).text()
        expect(el.eq(0)).to.contain.not.text('0')
      })
    })
  })

  describe('Invalid', () => {
    it('should not add item to bag', () => {
      cy.get('.header-bag__price').should((el) => {
        expect(el).to.contain.text(price)
      })
    })

    it('should not update bag count', () => {
      cy.get('.bag__item-counter').should((el) => {
        expect(el.eq(0)).to.contain.text(count)
      })
    })
  })
})

describe('Add item to wishlist', () => {
  let count
  beforeEach(() => {
    cy.get('.product__wishlist-button').first().click()
  })
  describe('Valid', () => {
    it('should add item to wishlist', () => {
      cy.get('.bag__item-counter').should((el) => {
        count = el.eq(0).text()
        expect(el.eq(1)).to.contain.not.text('0')
      })
    })
  })

  describe('Invalid', () => {
    it('should not add item to wishlist', () => {
      cy.get('.bag__item-counter').should((el) => {
        expect(el.eq(1)).to.contain.text(count)
      })
    })
  })
})

describe('Remove item from bag', () => {

  it('should remove item from bag', () => {
    cy.get('.header-bag__button').click()
    cy.get('.bag__modal-list .bag__modal-item button').click()
    cy.get('.header-bag__price').should((el) => {
      expect(el).to.contain.text('0.00')
    })
  })

  it('should update bag count', () => {
    cy.get('.bag__item-counter').should((el) => {
      expect(el).to.contain.text('0')
    })
  })
})

describe('Remove item from wishlist', () => {

  it('should remove item from wishlist', () => {
    cy.get('.header-bag__wishlist-button').click()
    cy.get('.bag__modal-list .bag__modal-item button').click()
    cy.get('.header-bag__price').should((el) => {
      expect(el).to.contain.text('0.00')
    })
  })

  it('should update bag count', () => {
    cy.get('.bag__item-counter').eq(1).should((el) => {
      expect(el).to.contain.text('0')
    })
  })
})
