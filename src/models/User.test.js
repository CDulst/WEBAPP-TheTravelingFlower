import User from './User';

test('creating users', () => {
    const user = new User({name: "Yorben"})
    expect(user.name).toBe("Yorben");
    expect(user.avatar).toBe(`https://avatars.dicebear.com/v2/identicon/${user.name}.svg`)
})
