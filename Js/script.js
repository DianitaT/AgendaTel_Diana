Vue.createApp({
    data() {
        return {
            nuevoContacto: {
                nombre: '',
                telefono: '',
                categoria: ''
            },
            contactos: [],
            categorias: ['Familia', 'Trabajo', 'Escuela', 'Otros']
        };
    },
    methods: {
        agregarContacto() {
            if (this.nuevoContacto.nombre && this.nuevoContacto.telefono) {
                let contactoNuevo = {
                    nombre: this.nuevoContacto.nombre,
                    telefono: this.nuevoContacto.telefono,
                    categoria: this.nuevoContacto.categoria,
                    mensajes: 0,
                    llamadas: 0
                };
                this.contactos.push(contactoNuevo);
                this.nuevoContacto = { nombre: '', telefono: '', categoria: '' };
            }
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        },
        calcularTotal(tipo) {
            let total = 0;
            this.contactos.forEach(contacto => {
                total += contacto[tipo];
            });
            return total;
        }
    }
}).mount('#app');
