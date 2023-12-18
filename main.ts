input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("E B - C5 B - A F ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("E D C D E - E - ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("E5 D C D E - E - E - E D - D - D - E - G - G E D C D E - E - E - E D D E D C C5 C", 200), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
