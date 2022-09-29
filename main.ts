let a = 0
basic.forever(function () {
    a = randint(5, 10)
    basic.showNumber(a)
    basic.pause(200)
    for (let contador = 0; contador <= a; contador++) {
        basic.showNumber(contador)
        for (let index = 0; index < contador; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(200)
        }
    }
    basic.showString("a buscar!!!")
    music.playMelody("- C5 B A G F E D ", 120)
})
