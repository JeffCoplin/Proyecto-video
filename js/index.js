const $video= document.querySelector('#video')
const $play= document.querySelector('#play')
const $pause= document.querySelector('#pause')
const $backward= document.querySelector('#backward') 
const $forward= document.querySelector('#forward') 

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$pause.hidden = true

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false


}


function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false

}

$backward.addEventListener('click', handleBackward)

function handleBackward() {
// $video.currentTime = $video.currentTime - 10;
$video.currentTime -= 10
console.log('Para atras 10 segundos', $video.currentTime);
}

$forward.addEventListener('click', handleForward)

function handleForward() {
    //$video.currentTime =  $video.currentTime + 10;
    $video.currentTime += 10
    console.log('Para adelante 10 segundos', $video.currentTime);
}
const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeupdate)


function handleLoaded() {
    $progress.max = $video.duration
}

function handleTimeupdate() {
    $progress.value = $video.currentTime

}
$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}