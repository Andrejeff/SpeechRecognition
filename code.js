window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
console.log("Init")

const recognition = new SpeechRecognition()
recognition.interimResults = true;

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

    let lowTrans = transcript.toLowerCase()

    if(lowTrans.includes('slayer')) {
        if(lowTrans.includes('play')) {
            console.log("play", transcript)
        }

        if(lowTrans.includes('skip')) {
            console.log("skip", transcript)
        }

        if(lowTrans.includes('leave')) {
            console.log("leave", transcript)
        }
    }
})

recognition.addEventListener('end', recognition.start);

recognition.start();