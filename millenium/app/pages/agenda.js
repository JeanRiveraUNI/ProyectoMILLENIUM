import styles from '../styles.module.css';
export default function Agenda() {
    return (
        <!DOCTYPE html>
        <html lang="es">
            <head>
                <title>AGENDA</title>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <header>
            <nav>
            <br>
            <div>
            <ul>
                <li class="nav-item">
                    <a class="nav-link" href="#">Agenda</a></li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Lista de Empleados</a></li>
                    </ul>
                    <br>
            </div>
            <br>
            </nav>
            </header>
            <br>
            <br>
            <br>
            <body>
                <div class="div-titulo">
                    <h1>AGENDA DE EMPLEADOS</h1>
                    </div>
                    <div class="contenedor">
                        <div class="div-formulario">
                            <h2>Formulario</h2>
                            <form action="#" id="formulario">
                                <input type="text" id="nombre" placeholder="Ingresa un nombre">
                                <input type="text" id="apellido" placeholder="Ingresa el apellido">
                                <input type="text" id="telefono" placeholder="Ingresa un telefono">
                                <input type="text" id="email" placeholder="Ingresa el email">
                                <br>
                                <button type="submit" id="btnAgregar">Agregar</button>
                            </form>
                        </div>
                        <div class="div-listado">
                            <h2>Listado de contactos</h2>
                            <div class="div-empleados">
                        </div>
                    </div>
                </div>
                <footer>
                    <div class="footer-bottom container-fluid py-1 text-white ">
                    <br>
                    <nav>
                        <div>
                            <ul>
                                <li><a  href="./index.html">Politica de privacidad</a></li>
                                <li><a  href="./index.html">Condiciones del sitio web</a></li>
                                <li><a  href="./index.html">Preguntas frecuentes</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="footer-end">
                    <br>
                    <ul>
                        <li><label class="2023">2023 Mex.</label></li>
                    </ul>
                    <br>
                </div>
            </nav>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script>
    </body>
    </html>
    );
}