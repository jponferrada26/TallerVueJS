
//Templates que se mostrarán al acceder a la ruta
const cInicio = Vue.component('inicio',{
    template:'<p>Inicio</p>'
});

const cSobreMi = Vue.component('sobreMi',{
    template:'<p>Sobre mi</p>'
});

//--------------------

//Asignación de rutas(path) a la template correspondiente
const listRouters = [
    {path:'/',component:cInicio},
    {path:'/sobreMi',component:cSobreMi}
];

//Instancia de Vue Router
const router = new VueRouter({
    routes: listRouters
})

//-------------------

//Instancia Vue
new Vue({
    router:router, //instancia de vue Router
    el: '#containerAll'

});