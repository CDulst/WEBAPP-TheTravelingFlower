import Route from './Route';

test('creating routes', () => {
    const route = new Route({startCoordinate:"n01"})
    expect(route.startCoordinate).toBe("n01");
})
