class Record {
  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  add () {
    const EC = protractor.ExpectedConditions
    element(by.css('[id ="addNewRecordButton"]')).click()
    browser.wait(
      EC.visibilityOf(
        element(by.css('.modal-dialog.modal-lg'))
      )
    )
    var firstname = element(By.id('firstName'))
    firstname.sendKeys('Alex')
    expect(firstname.getAttribute('value')).toEqual('Alex')
    var laststname = element(By.id('lastName'))
    laststname.sendKeys('YOLO')
    expect(laststname.getAttribute('value')).toEqual('YOLO')
    var useremail = element(By.id('userEmail'))
    useremail.sendKeys('Alex@example1.com')
    expect(useremail.getAttribute('value')).toEqual('Alex@example1.com')
    var age = element(By.id('age'))
    age.sendKeys('32')
    expect(age.getAttribute('value')).toEqual('32')
    var salary = element(By.id('salary'))
    salary.sendKeys('777')
    expect(salary.getAttribute('value')).toEqual('777')
    var department = element(By.id('department'))
    department.sendKeys('IT')
    expect(department.getAttribute('value')).toEqual('IT')

    element(by.css('#submit')).click()
  }

  search()
  {
    var self = this
    let desiredRow = null;
    element.all(by.css('.ReactTable.-striped.-highlight .rt-tr-group')).each(function(row, i){
      console.log('row #'+i)
          var isSameFirstName = false;
          var isSameLastName = false;


          var firstTd = null;
          var secondTd = null;
          row.all(by.css('.rt-td')).each(function(td, index) {
            console.log(index)
            if (index == 0) {
                firstTd = td;
            }
            if (index == 1) {
                secondTd = td
            }
          })
console.log('--------')

            return [firstTd, secondTd]
       
      }).then(function(tds) {
        

          var firstTd = tds[0];
          var secondTd = tds[1];
        firstTd.getText().then(function(firstTdText){
              if (firstTdText == self.firstName) {
                isSameFirstName = true
              }
              secondTd.getText().then(function(secondTdText){
                if (secondTdText == self.lastName) {
                  isSameLastName = true
                }
                
              })
            })

          if (isSameFirstName && isSameLastName) {
            desiredRow = row
          }
      });
      return desiredRow
  }

  update () {
    let row = this.search();
    return
    row.get(by.css('.action-buttons [title="Edit"]')).click()

browser.wait(
      EC.visibilityOf(
        element(by.css('.modal-dialog.modal-lg'))
      )
    )


//expect(foo.getText()).toEqual(['1a', '2a']);

  }

  remove () {
    // search this.firstName last
    // drop
  }
}

module.exports = Record
