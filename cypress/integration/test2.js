/// <reference types="cypress" />
require('cypress-iframe');



describe('validation amazon website', () => {

    it('open amazon website and validate if it opened correct', () => {
        cy.visit("https://www.amazon.in/");
        cy.get("#nav-logo-sprites").should("have.attr", "href", "/ref=nav_logo")
    })

    it.skip('trigger mousehover on signin and validate', () => {
        cy.contains("Account & Lists").trigger("mouseover")
        cy.get('.nav-text').eq(0).should("have.text", "Create a Wish List")
        cy.get("#nav-al-container .nav-text").eq(0).invoke('text').then((text) => {
            cy.log(text)
        })
    })
    it.skip('get content of navigation bar', () => {
        // cy.get('#nav-xshop')
        //  cy.get('#nav-xshop').find('a')
        cy.get('#nav-xshop a').each((ele) => {
            //cy.wrap(ele).click()
            if (ele.text() === 'Mobiles') {
                cy.wrap(ele).click()
            }
        })
    })

    it.skip('check searchbar and verify the serach details', function () {
        cy.get('#twotabsearchtextbox').type('mobile')
        cy.get('.s-suggestion').each(($ele, index) => {
            cy.wrap($ele).first('span').invoke('text').then(($text) => {
                console.log($text)
                cy.fixture("search_mobile").then(function ($data) {
                    console.log($data.mobile[index])
                    assert.equal($text, $data.mobile[index])
                })

            })
        })
    })

    it('select any mobile, add to cart and verify the price', () => {
        cy.get('.nav-a').contains(/^Mobiles$/).click()
        // const iframetxt= cy.get('.aut-iframe')
        // .its('0.contentDocument.body')
        // .should('be.visible')
        // .then(cy.wrap);


        cy.frameLoaded(".aut-iframe")

        cy.fixture("mobileprice").then(function ($data) {
            //  cy.get('.a-truncate-full.a-offscreen').contains($data.name)
            //  .siblings('.a-truncate-cut').click()

            //frame code
            cy.iframe('.aut-iframe').find('.a-truncate-full.a-offscreen').contains($data.name)
                .siblings('.a-truncate-cut').click()



            //assertion to match price
            cy.writeFile("mobileprice.json", "1234")
            cy.get('#priceblock_dealprice').invoke('text').then(function ($text) {

                    assert.equal($text.replace(/\s/, " "), "₹ 24,999.00")
                })
           
        })

    })
})