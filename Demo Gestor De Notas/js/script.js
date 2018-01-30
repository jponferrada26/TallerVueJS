Vue.component('nota', {
    props: ['titulonota', 'textonota', 'index','notas'],
    template: `
    <div class="nota" >
        <p class="tituloTarea">{{ titulonota }}</p>
        <p class="textoTarea">{{ textonota }}</p>
        <div class="containerButton">
            <button class="btnBorrar" v-on:click="borrarNota(index)">Borrar
                <figure class="backgroundEfect"></figure>
            </button>
        </div>
    </div>
    `,
    methods: {
        borrarNota: function (indice) {
            this.notas.splice(indice, 1);
        }
    }
});

new Vue({
    el: '#main',
    data: {
        tituloNotaACrear: '',
        textoNotaACrear: '',
        textoBusqueda: '',
        notas: [{
            tituloNota: 'Preparar Symana 2017-18',
            textoNota: '¡Ésta Sysmana va a ser la mejor!.'
        }, {
            tituloNota: 'Hacer tarea BBDD',
            textoNota: 'La mejor asignatura de todas :).'
        }, {
            tituloNota: 'Llamar a mi madre',
            textoNota: 'Que siempre se me olvida.'
        }]
    },
    methods: {
        nuevaNota: function () {
            if (this.checkTituloNota &&  this.checkTextoNota) {
                this.notas.push({
                    tituloNota: this.tituloNotaACrear,
                    textoNota: this.textoNotaACrear
                });
                this.borrarFormulario();

            }

        },
        borrarFormulario: function () {
            this.tituloNotaACrear = '';
            this.textoNotaACrear = '';
        }

    },
    computed: {
        checkTituloNota: function () {
            return this.tituloNotaACrear != '';
        },
        checkTextoNota: function () {
            return this.textoNotaACrear != '';
        },
        buscarNotas: function () {
            return this.notas.filter(elemento => elemento.tituloNota.toLowerCase().includes(this.textoBusqueda.toLowerCase()));
        }
    }
});