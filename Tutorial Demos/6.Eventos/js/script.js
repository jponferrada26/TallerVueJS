//Instancia Vue
new Vue({
    el: 'main',
    data: {
        arrayElementos : ['nuevo elemento']//array de elementos
    },
    methods: {
        clickButton: function () {//Inserta un elemento al array
            this.arrayElementos.push('nuevo elemento');
        },
        deleteHover: function (index) {//Borra un elemento del array
            this.arrayElementos.splice(index,1);
        }
    }
});