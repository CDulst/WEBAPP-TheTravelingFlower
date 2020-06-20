import Message from './Message';

test('create messages', () => {
    const message = new Message({content: "this is a message"})
    expect(message.content).toBe("this is a message")
})
