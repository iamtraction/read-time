/*!
 * @author Sankarsan Kampa (iamtraction)
 * @copyright 2021 - Sankarsan Kampa
 */

interface Options {
    /** Reading speed in words per minute. */
    wpm?: number;
}

const calculateReadTime = (text: string, options: Options): string => {
    options = Object.assign<Options, Options>({ wpm: 250 }, options);

    const wordCount = text.trim().split(/\s+/g).length;
    const minutes = wordCount / options.wpm;

    if (minutes < 1) return "About a minute";

    const readTime = Math.ceil(minutes);
    return readTime + " minute" + (readTime > 1 ? "s" : "");
};

export {
    calculateReadTime as calculate,
};
