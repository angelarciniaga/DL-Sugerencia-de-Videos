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

let videoMusica = '<iframe width="560" height="315" src="https://www.youtube.com/embed/qKp1f7Vn9dM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
let videoPelicula = '<iframe width="560" height="315" src="https://www.youtube.com/embed/lMLz-Rag3no" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
let videoSerie = '<iframe width="560" height="315" src="https://www.youtube.com/embed/SqoNZwB0NCQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

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
        return sugerenciaVideos.musica1(this.videoMusica);
    }

    mostrarPelicula() {
        return sugerenciaVideos.pelicula1(this.videoPelicula);
    }

    mostrarSerie() {
        return sugerenciaVideos.serie1(this.videoSerie);
    }
}

class Musica extends Video {
    constructor(videoMusica, videoPelicula, videoSerie) {
        super(videoMusica, videoPelicula, videoSerie);
    }

    mostrarMusica() {
        return sugerenciaVideos.musica1(this.videoMusica);
    }
}

class Pelicula extends Video {
    constructor(videoMusica, videoPelicula, videoSerie) {
        super(videoMusica, videoPelicula, videoSerie);
    }

    mostrarPelicula() {
        return sugerenciaVideos.pelicula1(this.videoPelicula);
    }
}

class Serie extends Video {
    constructor(videoMusica, videoPelicula, videoSerie) {
        super(videoMusica, videoPelicula, videoSerie);
    }

    mostrarSerie() {
        return sugerenciaVideos.serie1(this.videoSerie);
    }
}


let musicaUnico = new Musica(videoMusica, 'videoPelicula', 'videoSerie');
let peliculaUnica = new Pelicula('videoMusica', videoMusica, 'videoSerie');
let serieUnica = new Serie('videoMusica', 'videoMusica', videoSerie);

//let videos = new Video(videoMusica, videoMusica, videoSerie);

musicaUnico.mostrarMusica();
peliculaUnica.mostrarPelicula();
serieUnica.mostrarSerie();