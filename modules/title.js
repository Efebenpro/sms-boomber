function console_title(x) {
    if (process.platform == 'win32') {
        process.title = x + " / FLC EVENTS SMS BOOMBER V1.0 ";
    } else {
        process.stdout.write('\x1b]2;' + x + " / FLC EVENTS SMS BOOMBER V1.0 " + '\x1b\x5c');
    }
}

module.exports = console_title;