//Instancia Vue
new Vue({
    el: 'main',
    data: {
        tipoInput: 'class1'
    },
    methods: {
        clickChangeClass: function () {
            this.tipoInput = (this.tipoInput == 'class1') ? 'class2' : 'class1';
        }
    }
});