describe('автотесты на форму логина', function () {
   it('верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.contains('Форма логина').should('be.visible'); // проверка, что форма логина виден
        cy.get('#loginButton').should('be.disabled'); // проверка что кнопка войти задизейблена
        cy.get('#forgotEmailButton').should('be.enabled'); // кнопка забыли пароль активна
        cy.get('#mail').type ('german@dolnikov.ru'); // ищу импут ввода имейла и ввоже логин
        cy.get('#forgotEmailButton').should('be.enabled'); // кнопка забыли пароль активна
        cy.get('#loginButton').should('be.disabled'); // проверка что кнопка войти задизейблена после ввода логин
        cy.get('#pass').type ('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').should('be.enabled'); // проверям, что кнопка доступна для нажатия 
        cy.get('#loginButton').click (); // кликаем по кнопке 
        cy.contains('Авторизация прошла успешно').should('be.visible'); // выходит сообщение авторизация произошла успешно, его видно
        cy.get('#exitMessageButton > .exitIcon').click (); // кликаем по кнопке крестика
    })

   it('верный логин и верный пароль', function () { // по аналогии делаем все оставшееся
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.contains('Форма логина').should('be.visible'); // проверка, что форма логина виден
        cy.get('#loginButton').should('be.disabled'); // проверка что кнопка войти задизейблена
        cy.get('#mail').type ('german@dolnikov.ru'); // ищу импут ввода имейла и ввоже логин
        cy.get('#loginButton').should('be.disabled'); // проверка что кнопка войти задизейблена после ввода логин
        cy.get('#pass').type ('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').should('be.enabled'); // проверям, что кнопка доступна для нажатия 
        cy.get('#loginButton').click (); // кликаем по кнопке 
        cy.contains('Авторизация прошла успешно').should('be.visible'); // выходит сообщение авторизация произошла успешно, его видно
        cy.get('#exitMessageButton > .exitIcon').click (); // кликаем по кнопке крестика
    })
})