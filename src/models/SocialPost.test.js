import SocialPost from './SocialPost';

test('creating a socialpost', () => {
    const post = new SocialPost({userName: "yorben"})
    expect(post.userName).toBe("yorben");
})
