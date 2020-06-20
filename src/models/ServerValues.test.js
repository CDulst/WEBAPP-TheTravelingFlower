import ServerValues from './ServerValues';

test('creating serverValues', () => {
    const serverValues = new ServerValues({donation: 2000})
    expect(serverValues.donation).toBe(2000)
})
