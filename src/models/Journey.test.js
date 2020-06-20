import Journey from './Journey';

test('Creating a journey', () => {
    const journey = new Journey({location:"at your moma's place"})
    expect(journey.location).toBe("at your moma's place");
})
