var origFn = browser.driver.controlFlow().execute;
browser.ignoreSynchronization = true
browser.driver.controlFlow().execute = function () {
    var args = arguments;
    
    origFn.call(browser.driver.controlFlow(), function () {
        //increase or reduce time value, its in millisecond
        return protractor.promise.delayed(1000);
    });
    
    return origFn.apply(browser.driver.controlFlow(), args);
};