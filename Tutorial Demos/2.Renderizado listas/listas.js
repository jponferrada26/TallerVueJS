//creamos la instancia de vue
new Vue({
  //asignamos sobre que estructura del html vamos a trabajar
  el: 'main',

  
  data: {

    // creamos un array de string, para almacenar los string de los productos
    listaCompra: ['Manzana', 'Pera'],

    // creamos un array de objetos, con productos y sus campos
    listaCompraObj: [
      {
        nombre: 'Manzana',
        precio: 4
      },

      {
        nombre: 'Pera',
        precio: 3,
      },
    ]

  },

});
