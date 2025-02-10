AOS.init();

const dataDoEvento = new Date("Feb 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval (function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;


    const diasAteOEvento = Meth.floor(distanciaAteOEvento / diaEmMs)
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs)
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horaEmMs / minutoEmMs)
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutoEmMs / 1000)
}, 1000);