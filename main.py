record.start_recording(record.BlockingState.BLOCKING)
record.play_audio(record.BlockingState.BLOCKING)

def on_forever():
    pass
basic.forever(on_forever)
