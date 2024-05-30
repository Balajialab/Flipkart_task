$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/YOGARAJ S P/Desktop/MavenCucumber/src/test/resources/Flipkart/Flipkarts.feature");
formatter.feature({
  "name": "Automate Flipkart Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Launch the URL \u0026 Do a Product search",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I open the Flipkart website",
  "keyword": "Given "
});
formatter.match({
  "location": "Flipkarts.i_open_the_Flipkart_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for a product",
  "keyword": "When "
});
formatter.match({
  "location": "Flipkarts.i_search_for_a_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select a product",
  "keyword": "And "
});
formatter.match({
  "location": "Flipkarts.i_select_a_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the product to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "Flipkarts.i_add_the_product_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I proceed to checkout",
  "keyword": "And "
});
formatter.match({
  "location": "Flipkarts.i_proceed_to_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login to the application and enter otp",
  "keyword": "And "
});
formatter.match({
  "location": "Flipkarts.i_login_to_the_application_and_enter_otp()"
});
formatter.result({
  "error_message": "org.openqa.selenium.JavascriptException: javascript error: {\"status\":32,\"value\":\"Unable to locate an element with the xpath expression ///span[text()\u003d\u0027Login\u0027] because of the following error:\\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027///span[text()\u003d\u0027Login\u0027]\u0027 is not a valid XPath expression.\"}\n  (Session info: chrome\u003d125.0.6422.113)\nBuild info: version: \u00274.18.1\u0027, revision: \u0027b1d3319b48\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a141afd3f5a35417d7462c745343b2f4, findElement {using\u003dxpath, value\u003d///span[text()\u003d\u0027Login\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 125.0.6422.113, chrome: {chromedriverVersion: 125.0.6422.78 (14db42ec38ad..., userDataDir: C:\\Users\\YOGARA~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:65047}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:65047/devtoo..., se:cdpVersion: 125.0.6422.113, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a141afd3f5a35417d7462c745343b2f4\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:190)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:519)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy18.click(Unknown Source)\r\n\tat org.base.BaseClass.click(BaseClass.java:69)\r\n\tat org.stepdefinition.Flipkarts.i_login_to_the_application_and_enter_otp(Flipkarts.java:112)\r\n\tat ✽.I login to the application and enter otp(C:/Users/YOGARAJ S P/Desktop/MavenCucumber/src/test/resources/Flipkart/Flipkarts.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should be able to place the order successfully",
  "keyword": "And "
});
formatter.match({
  "location": "Flipkarts.i_should_be_able_to_place_the_order_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select the delivery address",
  "keyword": "And "
});
formatter.match({
  "location": "Flipkarts.i_select_the_delivery_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select the payment option",
  "keyword": "And "
});
formatter.match({
  "location": "Flipkarts.i_select_the_payment_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I have products in the cart",
  "keyword": "And "
});
formatter.match({
  "location": "Flipkarts.i_have_products_in_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I remove a product from the cart",
  "keyword": "And "
});
formatter.match({
  "location": "Flipkarts.i_remove_a_product_from_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The cart should be empty",
  "keyword": "And "
});
formatter.match({
  "location": "Flipkarts.the_cart_should_be_empty()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Flipkarts.i_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});