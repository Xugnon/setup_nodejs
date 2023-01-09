import Person from '@/views/index'

it('test', () => {
  const person = new Person()
  expect(person.sayMyName()).toBe('Felipe')
})
