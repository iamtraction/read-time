const read = require("../");

const cases = [
    {
        text: `Many resources indicate that the average reading speed of most adults is around 200 to 250 words per minute. College students, probably because they must practice reading, move that pace up a notch to around 300 words per minute. To put this into perspective we can turn to public speaking and the comparison of the rate of speaking and the rate at which people can comprehend the spoken word.
            An experienced public speaker will deliver his or her message at a rate of about 160 words per minute. It is possible to speak more rapidly, but it is recommended that readers for recorded books speak at around this pace because it is comfortable for most listeners. However, some speakers – such as auctioneers – can speak at a rate of up to 400 words per minute. By comparison, we form thoughts at around 1000 – 3000 words per minute, which gives the average listener lots of time to wool-gather, plan menus, and argue with the speaker
            Now, let’s bring these statistics back and apply them to reading speed. Reading is a complex process that involves a variety of factors. These include being able to discern different sounds as they make up a word and to interpret the various combinations of letters, especially when “sounding out” new or unfamiliar words. Reading teachers will use buzz words such as “sight words” or words that readers recognize without having to sound out the letters phonetically.Many resources indicate that the average reading speed of most adults is around 200 to 250 words per minute. College students, probably because they must practice reading, move that pace up a notch to around 300 words per minute. To put this into perspective we can turn to public speaking and the comparison of the rate of speaking and the rate at which people can comprehend the spoken word.
            An experienced public speaker will deliver his or her message at a rate of about 160 words per minute. It is possible to speak more rapidly, but it is recommended that readers for recorded books speak at around this pace because it is comfortable for most listeners. However, some speakers – such as auctioneers – can speak at a rate of up to 400 words per minute. By comparison, we form thoughts at around 1000 – 3000 words per minute, which gives the average listener lots of time to wool-gather, plan menus, and argue with the speaker.
            Now, let’s bring these statistics back and apply them to reading speed. Reading is a complex process that involves a variety of factors. These include being able to discern different sounds as they make up a word and to interpret the various combinations of letters, especially when “sounding out” new or unfamiliar words. Reading teachers will use buzz words such as “sight words” or words that readers recognize without having to sound out the letters phonetically.
            Students who have difficulty associating sounds with letters might have difficulty learning to read.`,
        output: "5 minutes"
    },
    {
        text: "nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum.",
        output: "1 minute"
    },
    {
        text: "Ad quibusdam nisi assumenda perferendis officia vero reiciendis odit. Laborum doloribus in eaque illo ratione. Quia et vel earum quaerat. Qui cumque aliquid omnis.",
        output: "About a minute"
    },
];

for (const c of cases) {
    test("returns proper read time with custom wpm", () => {
        expect(read.calculate(c.text, { wpm: 100 })).toBe(c.output);
    });
}
