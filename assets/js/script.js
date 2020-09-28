const sugerenciaVideos = (() => {

    //Variables Privadas
    let musica = document.getElementById('musica');
    let pelicula = document.getElementById('peliculas');
    let serie = document.getElementById('series');

    //Funciones Privadas
    funcionMusica = (valorM) => {
        musica.insertAdjacentHTML('beforeend', valorM);
    };
    funcionPelicula = (valorP) => {
        pelicula.insertAdjacentHTML('beforeend', valorP);
    };
    funcionSerie = (valorS) => {
        serie.insertAdjacentHTML('beforeend', valorS);
    };

    return {
        musica1: (musicaV) => {
            funcionMusica(musicaV);
        },
        pelicula1: (peliculaV) => {
            funcionPelicula(peliculaV);
        },
        serie1: (seriesV) => {
            funcionSerie(seriesV);
        }
    }
})();

let videoMusica = `<iframe width="560" height="315" src="https://www.youtube.com/embed/qKp1f7Vn9dM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
let videoPelicula = `<iframe width="560" height="315" src="https://www.youtube.com/embed/LEQjVSk92SU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
let videoSerie = `<iframe width="560" height="315" src="https://www.youtube.com/embed/SqoNZwB0NCQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

class Video {
    constructor(videoMusica, videoPelicula, videoSerie){
        this._videoMusica = videoMusica;
        this._videoPelicula = videoPelicula;
        this._videoSerie = videoSerie
    }

    get videoMusica() {
        return this._videoMusica;
    }

    get videoPelicula() {
        return this._videoPelicula;
    }

    get videoSerie() {
        return this._videoSerie;
    }

    mostrarMusica() {

    }
}

