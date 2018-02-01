//Instancia Vue
new Vue({
    el: 'main',
    mounted(){//(Ciclo de vida) Se ejecuta cuando se ha terminado la instancia de Vue
        this.getEmpleados();
    },
    data: {
        empleados:[]
    },
    methods: {
        getEmpleados: function () {//Cargar los empleados en el array
            axios.get('https://randomuser.me/api/?results=100').then((respuesta) => {
                this.empleados = respuesta.data.results;
            })
        }
    }
});