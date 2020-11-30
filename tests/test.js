
test('Sanity Check', () => {
  expect(2+2).toBe(4)
})

const sl = require('../index')

  test('Test capitalize', () => {
    expect('hello'.capitalize()).toBe('Hello')
    expect('hi'.capitalize()).toBe('Hi')
    expect('cat'.capitalize()).toBe('Cat')
    expect('dog'.capitalize()).toBe('Dog')
  })

  test('Test allCaps', () => {
    expect('hello'.allCaps()).toBe('HELLO')
    expect('hi'.allCaps()).toBe('HI')
    expect('cat'.allCaps()).toBe('CAT')
    expect('dog'.allCaps()).toBe('DOG')
  })

  test('Test capitalizeWords', () => {
    expect('hello hello hello'.capitalizeWords()).toBe('Hello Hello Hello')
    expect('hi hi hi'.capitalizeWords()).toBe('Hi Hi Hi')
    expect('cat Cat Cat'.capitalizeWords()).toBe('Cat Cat Cat')
    expect('dog Dog Dog'.capitalizeWords()).toBe('Dog Dog Dog')
  })


  test('Test removeExtraSpaces', () => {
    expect('   hello  world     hello  world     '.removeExtraSpaces()).toBe('hello world hello world')
    expect('  Cat Cat Cat  Cat'.removeExtraSpaces()).toBe('Cat Cat Cat Cat')
    expect('        Dog Dog      Dog     Dog'.removeExtraSpaces()).toBe('Dog Dog Dog Dog')
    expect('Green Red     Blue'.removeExtraSpaces()).toBe('Green Red Blue')
  })

  test('Test kabobCase', () => {
    expect('HELLO HELLO!@:#$ Hello'.kabobCase()).toBe('hello-hello-hello')
    expect('cat Cat cat'.kabobCase()).toBe('cat-cat-cat')
    expect('dog dog! Dog'.kabobCase()).toBe('dog-dog-dog')
    expect('RED! BLUE! GREEN!'.kabobCase()).toBe('red-blue-green')
  })

  test('Test snakeCase', () => {
    expect('HELLO HELLO!@:#$ Hello'.snakeCase()).toBe('hello_hello_hello')
    expect('cat Cat cat'.snakeCase()).toBe('cat_cat_cat')
    expect('dog dog! Dog'.snakeCase()).toBe('dog_dog_dog')
    expect('RED! BLUE! GREEN!'.snakeCase()).toBe('red_blue_green')
  })

  test('Test camelCase', () => {
    expect('HELLO HELLO!@:#$ Hello'.camelCase()).toBe('helloHelloHello')
    expect('cat Cat cat'.camelCase()).toBe('catCatCat')
    expect('dog dog! Dog'.camelCase()).toBe('dogDogDog')
    expect('RED! BLUE! GREEN!'.camelCase()).toBe('redBlueGreen')
  })

  test('Test shift', () => {
    expect('Hello World'.shift()).toBe('ello WorldH')
    expect('Cat World'.shift()).toBe('at WorldC')
    expect('dog World'.shift()).toBe('og Worldd')
    expect('Green World'.shift()).toBe('reen WorldG')

  })