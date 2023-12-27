const { add, err, promiseTest, app } = require('../index')
const supertest = require('supertest')


test('toBe', () => {
    expect(add(1, 2)).toBe(3)
})

test('toEqual', () => {
    expect(add(1, 2)).toEqual(3)
})

test('toBeEqual', () => {
    expect(add(1, 2)).toBeDefined()
})

test('toBeNull', () => {
    expect(add(1, 2)).not.toBeNull()
})

test('toBeGreaterThan', () => {
    expect(add(1, 2)).toBeGreaterThan(1)
})

test('toBeLessThan', () => {
    expect(add(1, 2)).toBeLessThan(4)
})

test('toMatch', () => {
    expect(add('Hello', 'World')).toMatch(/Hello/)
})

test('toThrow', () => {
    expect(() => err()).toThrow('I am new error')
})

test('promiseTest hard/old way', () => {
    promiseTest(1, 2)
        .then(data => {
            expect((data).toBe('+ve'))
        }).catch(e => {
            expect(e).toBe('-ve')
        })
})

test('promiseTest easy way', () => {
    expect(promiseTest(2, 1)).resolves.toBe('+ve')
})

test('promiseTest easy way', () => {
    expect(promiseTest(1, 2)).rejects.toBe('-ve')
})

test('promiseTest easy way', () => {
    expect(promiseTest(1, 2)).rejects.toBe('-ve')
})

test('Test Get User API', async () => {
    await supertest(app)
        .get('/users')
        .expect(200)
        .then(result => {
            expect(result && result.body && typeof result.body === 'object')
        })

})