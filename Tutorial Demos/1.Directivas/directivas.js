//creamos la instancia de vue
new Vue({
  //asignamos sobre que estructura del html vamos a trabajar
  el: 'main',

  
  data: {

    //creamos variables condicionales para mostrar u ocultar h1, puedes probar a cambiar su valor y comprobar su funcionamiento
    
    muestraVshow: false, 
    muestraVif: false,

    // creamos una variables que almacenará una edad

    edad: 19,
    muestraEdad:true,

    // creamos variable condicional para mostrar u ocultar el template

    template:true,

  }

});
