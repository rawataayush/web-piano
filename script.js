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

keyQ.addEventListener('click', () => {
    audioQ.currentTime = 0;
    audioQ.play()

    setTimeout(() => {
        audioQ.pause();
    }, 1000);
})

keyW.addEventListener('click', () => {
    audioW.currentTime = 0;
    audioW.play()
    setTimeout(() => {
        audioW.pause();
    }, 1000);
})

keyE.addEventListener('click', () => {
    audioE.currentTime = 0;
    audioE.play()
    setTimeout(() => {
        audioE.pause();
    }, 1000);
})

keyR.addEventListener('click', () => {
    audioR.currentTime = 0;
    audioR.play()
    setTimeout(() => {
        audioR.pause();
    }, 1000);
})

keyT.addEventListener('click', () => {
    audioT.currentTime = 0;
    audioT.play()
    setTimeout(() => {
        audioT.pause();
    }, 1000);
})

keyY.addEventListener('click', () => {
    audioY.currentTime = 0;
    audioY.play()

    setTimeout(() => {
        audioY.pause();
    }, 1000);
})

keyU.addEventListener('click', () => {
    audioU.currentTime = 0;
    audioU.play()
    setTimeout(() => {
        audioU.pause();
    }, 1000);
})

keyI.addEventListener('click', () => {
    audioI.currentTime = 0;
    audioI.play()
    setTimeout(() => {
        audioI.pause();
    }, 1000);
})

keyO.addEventListener('click', () => {
    audioO.currentTime = 0;
    audioO.play()
    setTimeout(() => {
        audioO.pause();
    }, 1000);
})

keyP.addEventListener('click', () => {
    audioP.currentTime = 0;
    audioP.play()
    setTimeout(() => {
        audioP.pause();
    }, 1000);
})