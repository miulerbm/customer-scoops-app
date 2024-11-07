# Customer Scoops App (by @miulerbm)

Este proyecto es una prueba técnica que consiste en una aplicación web diseñada para gestionar el envío de datos mediante un formulario en diferentes pantallas.

## Enlace al Despliegue

La aplicación está desplegada en Vercel y puedes acceder a ella desde el siguiente enlace: [Customer Scoops App en Vercel](https://customer-scoops-app.vercel.app/).

## Estructura del Proyecto

El repositorio cuenta con dos ramas principales:

- **main**: Esta es la versión principal desplegada en Vercel. No incluye la funcionalidad de envío de correos.
- **develop**: Esta rama contiene la funcionalidad de envío de correos utilizando **Resend**. Es ideal para pruebas de funcionalidad adicional.

## Instrucciones para Ejecutar el Proyecto Localmente

1. Clona el repositorio:

   ```bash
   git clone git@github.com:miulerbm/customer-scoops-app.git
   ```

2. Cambia a la rama `develop` para acceder a la funcionalidad completa:

   ```bash
   git checkout develop
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Para habilitar el envío de correos, ejecuta el servidor desde la carpeta `server`:

   ```bash
   node server/server.js
   ```

5. En una nueva terminal, inicia el proyecto:
   ```bash
   npm run dev
   ```

## Tecnologías Utilizadas

- **Styled Components**: Para la creación de estilos modulares y componentes reutilizables.
- **Interfaces TypeScript**: Mejora la tipificación y organización del código.
- **Vite**: Herramienta rápida y moderna de desarrollo para construir la aplicación.
- **Vercel**: Plataforma de despliegue utilizada para alojar la versión de producción de la aplicación.

## Enfoque de Maquetación

El diseño se centró en crear un layout general que se adaptara a las especificaciones proporcionadas en el Figma, asegurando que fuera completamente responsivo y mantuviera una experiencia de usuario consistente en diferentes tamaños de pantalla.

### Notas Adicionales

- La funcionalidad de envío de correo solo está disponible en la rama `develop`.
- El diseño modular permite el fácil mantenimiento y extensión de la aplicación, facilitando la adición de nuevas pantallas o componentes en el futuro.

## Contacto

- **GitHub**: [miulerbm](https://github.com/miulerbm)
- **Sitio Web**: [miulerbm.vercel.app](https://miulerbm.vercel.app/es)
- **LinkedIn**: [miulerbm](https://www.linkedin.com/in/miulerbm/)

Para cualquier pregunta o retroalimentación, no dudes en abrir un issue o contactarme directamente en cualquiera de mis perfiles.
