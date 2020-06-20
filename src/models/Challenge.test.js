import Challenge from './Challenge';

test('create a challenge', () => {
    const challenge = new Challenge({title:"This challenge sucks"})
    expect(challenge.title).toBe("This challenge sucks");
})


