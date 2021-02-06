import { browser, logging } from 'protractor';
import { ContactPage } from './checkout.po';

describe('workspace-project App', () => {
  let page: ContactPage;
  const contactInfo = {
    email: 'rad',
    phone: '34d'
  };

  const paymentInfo = {
    creditCardNumber: '888343343',
    nameOnCard: 'Rasika Yadav',
    expiryDate: '02/30',
    cvv: ''
  };
  let ptor: any;
  beforeEach(() => {
    page = new ContactPage();
  });
  it('checkout form invalid', () => {
    page.navigateTo();
    page.emptyIno();
    page.getSubmitButton().click();
  });

  it('Valid checkout form', () => {

    page.navigateTo();
    page.setContactPaymentInfo(contactInfo, paymentInfo);    
    page.navigateToSuccess();
  });
  

  
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
