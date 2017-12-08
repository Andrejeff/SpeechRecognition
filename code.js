console.log("Init")

if (annyang) {
    // Let's define a command.
    var commands = {
        'slayer skip': () => {
            alert('Skip')
        },
        'slayer leave': () => {
            alert('Leave')
        }
    };

    annyang.addCommands(commands);
    annyang.addCallback('result', e => {
        let speech = (data) => {
            return e[0].toLowerCase().includes(data)
        }

        if(speech('slayer play')) {
            let array = e[0].trim().split(' ')
            delete array[0]
            delete array[1]
            let final = array.join(' ').trim()
        }
    })
    
    annyang.start();
}