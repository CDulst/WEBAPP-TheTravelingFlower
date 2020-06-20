import Carrier from './Carrier';

test('creating a carrier', () => {
    const carrier = new Carrier({name: "yorben", journeys: []})
    expect(carrier.name).toBe("yorben");
    expect(carrier.journeys.length).toBe(0);
})
