function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 5) {
        //BOA MADRUGADA!
        img.src = 'fotomadruga.jpg'
        document.body.style.background = '#2F4F4F'
    } else if (hora >= 5 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#3CB371'
    } else if (hora >=12 && hora < 18 ) {
        //BOA TARDE!
        img.src = 'fototarde.jpg'
        document.body.style.background = '#CD853F'
    } else {
        //BOA NOITE!
        img.scr = 'fotonoite.jpg'
        document.body.style.background = '#1C1C1C'
    }
}