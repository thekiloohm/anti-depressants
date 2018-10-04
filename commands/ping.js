module.exports = {
    args: false,
    name: 'ping',
    description: 'Tests if the bot is online.',
    //usage: '<role> <action>',
    //guildOnly: true,
    //cooldown: 5,
    aliases: ['test', 'beep'],
    execute(message) {
        message.channel.send('Pongpongpong.');
    },
};