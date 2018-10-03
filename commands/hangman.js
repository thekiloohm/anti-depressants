module.exports = {
    args: true,
    name: 'hangman',
    description: 'Play a game of hangman.',
    usage: '[<start> <your phrase or word>][<guess>][<stop>]',
    //guildOnly: true,
    //cooldown: 5,
    aliases: ['hm'],
    execute(message, args) {
        message.channel.send(`${message.author} has started a game of hangman! Place your guesses now!`);
    },
};