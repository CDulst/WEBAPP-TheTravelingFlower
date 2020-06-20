import Application from './Application';


test('create application', () => {
    const application = new Application({name:"yorben", email:"yorben.goor@student.howest.be"})
    expect(application.name).toBe("yorben");
    expect(application.email).toBe("yorben.goor@student.howest.be")
})
