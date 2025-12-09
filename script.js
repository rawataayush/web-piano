const keyQ = document.querySelector('.keyQ')
const keyW = document.querySelector('.keyW')
const keyE = document.querySelector('.keyE')
const keyR = document.querySelector('.keyR')
const keyT= document.querySelector('.keyT')
const keyY= document.querySelector('.keyY')
const keyU = document.querySelector('.keyU')
const keyI = document.querySelector('.keyI')
const keyO = document.querySelector('.keyO')
const keyP = document.querySelector('.keyP')

const audioQ = new Audio('assets/audio/A0.mp3')
const audioW = new Audio('assets/audio/A1.mp3')
const audioE= new Audio('assets/audio/A2.mp3')
const audioR = new Audio('assets/audio/A3.mp3')
const audioT = new Audio('assets/audio/A4.mp3')
const audioY = new Audio('assets/audio/A5.mp3')
const audioU = new Audio('assets/audio/Fs5.mp3')
const audioI = new Audio('assets/audio/A7.mp3')
const audioO = new Audio('assets/audio/C1.mp3')
const audioP = new Audio('assets/audio/C2.mp3')

const audioList = [audioQ, audioW, audioE, audioR, audioT, audioY, audioU, audioI, audioO, audioP]
const keyList = [keyQ, keyW, keyE, keyR, keyT, keyY, keyU, keyI, keyO, keyP]

keyList.forEach((key) => {
    key.addEventListener('click', () => {
        audioList[keyList.indexOf(key)].currentTime = 0;
        audioList[keyList.indexOf(key)].play()
    })
})

document.addEventListener('keydown', (event) => {
    switch(event.key.toLowerCase()) {
        case 'q':
            audioQ.currentTime = 0;
            audioQ.play();
            break;
        case 'w':
            audioW.currentTime = 0;
            audioW.play();
            break; 
        case 'e':
            audioE.currentTime = 0;
            audioE.play();
            break;
        case 'r':
            audioR.currentTime = 0;
            audioR.play();
            break;
        case 't':
            audioT.currentTime = 0;
            audioT.play();
            break;
        case 'y':
            audioY.currentTime = 0;
            audioY.play();
            break;
        case 'u':
            audioU.currentTime = 0;
            audioU.play();
            break;
        case 'i':
            audioI.currentTime = 0;
            audioI.play();
            break;
        case 'o':
            audioO.currentTime = 0;
            audioO.play();
            break;
        case 'p':
            audioP.currentTime = 0;
            audioP.play();
            break;
        default:
            break;
    }
})