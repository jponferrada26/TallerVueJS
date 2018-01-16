new Vue({
    el: '#main',
    data: {
        tituloNota: '',
        textoNota: '',
        errorForm: '',
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
                    tituloNota: this.tituloNota,
                    textoNota: this.textoNota
                });
                this.borrarFormulario();
            }

        },
        borrarFormulario: function () {
            this.tituloNota = '';
            this.textoNota = '';
        },
        borrarNota: function (indice) {
            this.notas.splice(indice, 1);
        }
    },
    computed: {
        checkTituloNota: function () {
            return this.tituloNota != '';
        },
        checkTextoNota: function () {
            return this.textoNota != '';
        },
        buscarNotas: function () {
            return this.notas.filter(elemento => elemento.tituloNota.toLowerCase().includes(this.textoBusqueda.toLowerCase()));
        }
    }
});