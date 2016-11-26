Vue.filter('porRNC', function (value) {
    return value.RNC === '01300397963';

});

var app = new Vue({
    el: '#busqueda',
    data: {
        criterio: '',
        filtro: '',
        registros: []
    },
    methods: {
        /*filtroRNC: function (parametro) {
            return this.registros.filter(function (el) { return el.RNC.includes(parametro) });
        },*/
        filtroNombre: function (parametro) {
            return this.registros.filter(function (el) { return el.Nombre.toUpperCase().includes(parametro.toUpperCase()) });
        },
        buscar: function () {

            var url = 'http://app.mopc.gob.do/Utilitario/api/rnc/buscarporcriterio?criterio=' + this.criterio + '&uid=7c9e6679-7425-40de-944b-e07fc1f90ae7';
  
              axios.get(url)
                  .then(function (response) {
                      app.registros = JSON.parse(response.data.ResponseText);
                  })

            /*
            var url = 'http://app.mopc.gob.do/Utilitario/api/rnc/buscarporcriterio?criterio=' + this.criterio + '&uid=7c9e6679-7425-40de-944b-e07fc1f90ae7';
            var xhr = new XMLHttpRequest();
            xhr.open("GET", encodeURI(url), true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send();

            xhr.onload = function () {
                var resultado = JSON.parse(xhr.responseText);

                if (resultado.Success) {
                    app.registros = JSON.parse(resultado.ResponseText);
                }
            }*/
        }
    }
});