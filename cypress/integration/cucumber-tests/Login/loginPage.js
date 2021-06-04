const URL ='http://zero.webappsecurity.com/login.html'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const REMEMBER_ME = '#user_remember_me'
const SUBMIT_BUTTON = 'input[type="submit"]'
const ERROR_MESSAGE_ALERT = '.alert-error'

class LoginPage {

    static visit(){
        cy.visit(URL)
    }

    static fillUsername(name){
        cy.get(USERNAME_INPUT).type(name)
    }

    static fillPassword(password){
        cy.get(PASSWORD_INPUT).type(password)
    }

    static submit(){
        cy.get(REMEMBER_ME).click()
        cy.get(SUBMIT_BUTTON).click()
    }

    static showErrorMessage(message){

        cy.get(ERROR_MESSAGE_ALERT).should('contain',message)
    }
}

export default LoginPage 