import { browser, by, element } from 'protractor';

export class ContactPage {

  private contactInfo = {
    email: 'rasika@gil.com',
    phone: '9598222222'
  };

  private paymentInfo = {
    creditCardNumber: '888833434343343',
    nameOnCard: 'Rasika Yadav',
    expiryDate: '02/30',
    cvv: '123'
  };
  navigateTo() {
    return browser.get('/');
  }
  navigateToSuccess() {console.log('sdsd')
    return browser.get('booking-success');
  }
  async getTitleText(): Promise<string> {
    return element(by.css('app-header .header span')).getText();
  }
  setContactPaymentInfo(contactInfo: any = this.contactInfo, paymentInfo: any = this.paymentInfo) {
    element(by.name('email')).sendKeys(contactInfo.email);
    element(by.name('phoneNumber')).sendKeys(contactInfo.phone);
    element(by.name('creditCardNumber')).sendKeys(paymentInfo.creditCardNumber);
    element(by.name('nameOnCard')).sendKeys(paymentInfo.nameOnCard);
    element(by.name('expiryDate')).sendKeys(paymentInfo.expiryDate);
    element(by.name('cvv')).sendKeys(paymentInfo.cvv);
  }
  emptyIno() {
    element(by.name('email')).sendKeys('');
    element(by.name('phoneNumber')).sendKeys('');
    element(by.name('creditCardNumber')).sendKeys('');
    element(by.name('nameOnCard')).sendKeys('');
    element(by.name('expiryDate')).sendKeys('');
    element(by.name('cvv')).sendKeys('');
  }
  getSubmitButton() {
    return element(by.css('#btnSubmit'));
  }
  getPageTitleText() {
    return element(by.css('app-header .header span')).getText();
  }

  markTouch(){
    // Object.keys(objectControl).forEach(controlName =>
    //   objectControl[controlName].markAsTouched()
    // );
    // element(by.name('email')).markAsTouched()

  }
  async getErrorMessage(){
    return element(by.cssContainingText('mat-error', 'alert')).getText();

    // return element(by.css('mat-error span')).getText();
    // return element(by.css('mat-error span'));


  }
  getPasswordTextbox() {  
    return element(by.tagName('mat-error'));  
}  
}
