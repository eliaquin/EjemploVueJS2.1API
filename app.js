new Vue({
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
            var vm = this;
            var url = 'http://app.mopc.gob.do/Utilitario/api/rnc/buscarporcriterio?criterio=' + this.criterio + '&uid=7c9e6679-7425-40de-944b-e07fc1f90ae7';
            axios.get(url)
                .then(function (response) {
                    vm.registros = JSON.parse(response.data.ResponseText);
                });
        }
    }
});