const app = Vue.createApp({
    data() {
        return {
            gustaProgramar: '',         // Almacena la respuesta de si le gusta programar
            aniosProgramando: '',        // Almacena los años programando
            experiencia: '',             // Almacena la experiencia del usuario
            lenguajes: [],               // Almacena los lenguajes de programación
            lenguajeNuevo: '',           // Lenguaje nuevo para agregar a la lista
            mostrarResultadosEncuesta: false,  // Bandera para mostrar resultados
            mensaje: ''                  // Mensaje de agradecimiento
        }
    },
    methods: {
        agregarLenguaje() {
            if (this.lenguajeNuevo) {
                this.lenguajes.push(this.lenguajeNuevo);//añade un elemento al final de un array
                this.lenguajeNuevo = ''; // Limpiar input de nuevo lenguaje
            }
        },
        mostrarResultados() {
            this.mostrarResultadosEncuesta = true;
        }
    },
    watch: {//observa y detecta cambios en la propiedad y ejecuta codigo 
        gustaProgramar(valor) {
            // Si el usuario selecciona "No", muestra mensaje de agradecimiento
            if (valor === 'No') {
                this.mensaje = "Gracias por participar :)";
            } else {
                this.mensaje = ''; // Limpiar el mensaje si selecciona otra opción
            }
        }
    }
});

app.mount('#app');//montaje de la aplicacion en el html, vue conecta la logica con el dom.
