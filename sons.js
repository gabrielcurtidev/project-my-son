document.getElementById('somAmbiente').volume = '0.02'



var dogSom = document.getElementById('dog-sound').addEventListener('click', () => {
    var dogAudio = document.getElementById('dog-audio')
    dogAudio.currentTime = 0
    dogAudio.play()

    setTimeout(() => {
        dogAudio.pause();
        dogAudio.currentTime = 0;
    }, 1200);
})