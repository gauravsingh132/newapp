/// <reference types="cypress" />

describe('this is first test suit',()=>{

    it('Open website',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //check if website contain valid logo or not
        cy.get("img[class='logoClass']").should('have.attr','src','images/rs_logo.png')
    })

    it('working with chekbox',()=>{
        cy.get('#checkBoxOption2').click();
        //verify if second option is checked or not
        cy.get('#checkBoxOption2').should('be.checked')
    })

    it('working with dropdowns',()=>{
        cy.get('#dropdown-class-example').select('Option2');
        //verify if second option is checked or not
        //cy.get('#checkBoxOption2').should('be.checked')

        //issue: get all values form dropdowns
        cy.get('#dropdown-class-example').within(()=>{
            cy.get('option').should('have.attr','value')
        })

        // cy.get('#dropdown-class-example').within(()=>{
        //     cy.get('option').each(($el, index, $list)=>{
        //         console.log($el, index, $list)
        //     })
        // })

        cy.get('#dropdown-class-example').find('option').each(($el, index, $list)=>{
            console.log($el)
            console.log("index  "+index)
            console.log("list  "+$list)
           // cy.wrap($el).click();
            
            // if($el.contains('Option2'))
            // {
            //     console.log($el)
            // }
        })

       

        
            
    })
    it('working with dynamic dropdown OR autoComplete',()=>{
        cy.get('#autocomplete').type('ind')
        cy.contains(/^India$/).click()  //matchs with exact text value just like getText();

        // cy.get('.ui-menu-item').each(($el)=>{
        //     if($el.text()=='India')
        //     {
        //         cy.wrap($el).click();
        //     }
        // })
    })
})