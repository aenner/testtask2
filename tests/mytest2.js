
/* Open web site https://demoqa.com
  select Element menu
  Select Web Tables menu
  Edit field using First and Last name (Create function that able to edit or delete records from table by)
  Delete field using  First and Last name
  Verify deleted and edited item
  */

const HomePage = require('../pages/HomePage')

const Record = require('../entities/Record')

describe('angularjs homepage todo list', function () {
  it('should add a todo', function () {
    // const EC = protractor.ExpectedConditions
    const homePage = new HomePage()
    homePage.open()
    const e = homePage.elementsPage.webTablesPage

    var firstName = 'alex'
    var lastName = 'eee'
    const record = new Record(firstName, lastName)

    record.add()
    record.update()
  })
})
