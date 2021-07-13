/// <reference types="cypress" />

describe('Orange CRM verification', () => {

    it('Open website and login', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('.quickLinkText').contains('Leave List').click()
        // cy.get('#calFromDate').siblings('.ui-datepicker-trigger').click()
        // cy.get("td[data-event='click']").find('a').contains('16').click()
        cy.get('#leaveList_chkSearchFilter_checkboxgroup').find('label').each(($ele,$index)=>{
            if($ele.text()==='All')
            {
                cy.get('#leaveList_chkSearchFilter_checkboxgroup').find('input').eq($index).click()
            }

        })
    })
})