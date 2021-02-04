const read = require("../");

const cases = [
    {
        text: `Many resources indicate that the average reading speed of most adults is around 200 to 250 words per minute. College students, probably because they must practice reading, move that pace up a notch to around 300 words per minute. To put this into perspective we can turn to public speaking and the comparison of the rate of speaking and the rate at which people can comprehend the spoken word.
            An experienced public speaker will deliver his or her message at a rate of about 160 words per minute. It is possible to speak more rapidly, but it is recommended that readers for recorded books speak at around this pace because it is comfortable for most listeners. However, some speakers – such as auctioneers – can speak at a rate of up to 400 words per minute. By comparison, we form thoughts at around 1000 – 3000 words per minute, which gives the average listener lots of time to wool-gather, plan menus, and argue with the speaker
            Now, let’s bring these statistics back and apply them to reading speed. Reading is a complex process that involves a variety of factors. These include being able to discern different sounds as they make up a word and to interpret the various combinations of letters, especially when “sounding out” new or unfamiliar words. Reading teachers will use buzz words such as “sight words” or words that readers recognize without having to sound out the letters phonetically.Many resources indicate that the average reading speed of most adults is around 200 to 250 words per minute. College students, probably because they must practice reading, move that pace up a notch to around 300 words per minute. To put this into perspective we can turn to public speaking and the comparison of the rate of speaking and the rate at which people can comprehend the spoken word.
            An experienced public speaker will deliver his or her message at a rate of about 160 words per minute. It is possible to speak more rapidly, but it is recommended that readers for recorded books speak at around this pace because it is comfortable for most listeners. However, some speakers – such as auctioneers – can speak at a rate of up to 400 words per minute. By comparison, we form thoughts at around 1000 – 3000 words per minute, which gives the average listener lots of time to wool-gather, plan menus, and argue with the speaker.
            Now, let’s bring these statistics back and apply them to reading speed. Reading is a complex process that involves a variety of factors. These include being able to discern different sounds as they make up a word and to interpret the various combinations of letters, especially when “sounding out” new or unfamiliar words. Reading teachers will use buzz words such as “sight words” or words that readers recognize without having to sound out the letters phonetically.
            Students who have difficulty associating sounds with letters might have difficulty learning to read.`,
        output: "2 minutes"
    },
    {
        text: "Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet.",
        output: "1 minute"
    },
    {
        text: "Ad quibusdam nisi assumenda perferendis officia vero reiciendis odit. Laborum doloribus in eaque illo ratione. Quia et vel earum quaerat. Qui cumque aliquid omnis.",
        output: "About a minute"
    },
];

for (const c of cases) {
    test("returns proper read time", () => {
        expect(read.calculate(c.text)).toBe(c.output);
    });
}
