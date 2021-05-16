
const ElementsPage = require('./ElementsPage')

class HomePage {
  get elementsPage () {
    	element.all(by.css('.category-cards .card')).get(0).click()
    	return new ElementsPage()
  }

  open () {
    browser.waitForAngularEnabled(false)
    browser.get('https://demoqa.com')
  }
}
module.exports = HomePage
