const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 7, listar = false, hasta = 10 ) => {

    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base*i}\n`;
        consola += `${colors.cyan(base)} ${'x'.red} ${i} = ${colors.cyan(base*i)}\n`;
    }

    if (listar == true){
        console.log('================================'.blue);
        console.log('         Tabla del:'.yellow, colors.bgMagenta(base));
        console.log('================================'.blue);
        console.log(consola);
    }

    // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
    //     if (err) throw err;
    //     console.log(`tabla-${base}.txt creado`);
    // });

    try{
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
    

    // console.log(`tabla-${base}.txt creado`);

}

module.exports = {
    crearArchivo
}

