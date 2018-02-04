
//Creación componente
Vue.component('card-material', {
    template: `
            <div class="card-material" >
                 <p class="tituloTarjeta"> card-material </p>
            </div>
    `,
})


//Instancia Vue
new Vue({
    el: 'main',
   
    data: {
        //creamos una variable como contador, que actualizaremos con el valor del input
       numtarjetas : 0,
    }
});