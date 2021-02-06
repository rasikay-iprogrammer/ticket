# Ticket

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.


## Steps for running the project 

1. git clone using cmd (https://github.com/rasikay-iprogrammer/ticket.git)
2. cd ticket
3. npm install
4. ng serve


## Steps for running unit test cases : 

1. cd ticket
2. npm install
3. ng test

## Steps for running e2e test cases : 

1. cd ticket
2. npm install
3. ng e2e

## Points to be taken into consideration 
1. I have created global constant file to maintain config variable
2. Implemented Lazy Loading in Project.
3. Created Directives like,
     appCardNumberMask  - Add space after 4 digits in Credit/Debit card number
     mask               - Separate month and year by / in same textbox
     appOnlyAlphabets   - Restrict user to enter only alphabets and space in textbox
     appOnlyDigits      - Restrict user to enter only number in textbox
4. Implemented Date,Async Pipe in Project.
5. Created Generic Model file .
6. For Designing, I have used Bootstrap4 and Angular Material Both.
7. I didn't receive any API endpoint so, I have created on my own by using  REST API Provider 
  for getting Booked ticket information.
8. I have used Auth Guard to protect the routes.
     For demo purpose i have applied restriction on booking-success. 
     User can not access booking-success routing without bookingId in localstorage.
9. Created separate module to import all material modules.
9. Contact Information
     As per templated created 2 form field email and phone number
     Validations on Email - Required,pattern (check valid email format)
     Validations on Phone - Required,Min Max length (10), pattern (Valid indian mobile),Allows only numbers
9. Payment Options
     As per templated created 4 form field card number,name on card, expiry date,cvv
     Validations on Credit Card - Required,Min Max length(16), Allows only numbers,
     Validations on Name on card - Required, Allows only Characters & white space
     Validations on expiry date  - Required, Allows only numbers
     Validations on cvv          - Required
10. Create page no found page. If user enter any other url then it will navigate to 404