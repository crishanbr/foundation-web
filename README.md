# Proyecto Sistema de Gestión para la Inclusión de Profesionales con Discapacidad

Este proyecto consiste en una plataforma para la gestión de actividades de una fundación inclusiva que trabaja con profesionales con discapacidades.

## Índice

1. [TODOs](#todos)
   - [Frontend](#frontend)
   - [Backend](#backend)
2. [Instalación](#instalación)
   - [Frontend (Next.js)](#frontend-nextjs)
   - [Backend (Nest.js)](#backend-nestjs)
3. [Licencia](#licencia)

## TODOs

### Frontend

- [ ] Implementar la página de inicio con información de la fundación.
- [x] Desarrollar la funcionalidad de registro para nuevos usuarios.
- [x] Implementar la funcionalidad de inicio de sesión.
- [ ] Mejorar la accesibilidad para usuarios con discapacidades visuales.
- [ ] ... por definir

### Backend

- [x] Configurar la base de datos para almacenar la información de los usuarios.
- [ ] Crear endpoints para gestionar los datos de los usuarios registrados.
- [x] Implementar autenticación y autorización utilizando JWT.
- [ ] ... por definir

## Instalación

Se utiliza [Yarn](https://yarnpkg.com/) como gestor de paquetes (puedes usar cualquier otro gestor de paquetes de tu elección).

> El frontend está desarrollado utilizando [Next.js](https://nextjs.org/), los componentes de [NextUI](https://nextui.org/), [Tailwind CSS](https://tailwindcss.com/) para los estilos e [iconify.design](https://iconify.design/) para los iconos.

> El backend está desarrollado utilizando [Nest.js](https://nestjs.com/), [TypeORM](https://typeorm.io/), [PostgreSQL](https://www.postgresql.org/) como base de datos, ademas de Json Web Tokens ([JWT](https://jwt.io/)) para la autenticación y autorización.

### Frontend (Next.js)

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/crishanbr/foundation-web.git
   cd foundation-web/frontend
   ```

2. **Instalar las dependencias:**

   ```bash
   yarn install
   ```

3. **Configurar las variables de entorno:**

   Crea un archivo `.env` en la raíz del directorio `frontend` con las siguientes variables:

   ```plaintext
   NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
   NEXTAUTH_SECRET=MIPALABRASECRETA
   ```

   Reemplaza `MIPALABRASECRETA` con tu propia clave secreta para NextAuth.

4. **Ejecutar la aplicación:**

   ```bash
   yarn dev
   ```

   La aplicación estará disponible en `http://localhost:3000`.

### Backend (Nest.js)

1. **Ir al directorio del backend:**

   ```bash
   cd ../backend
   ```

2. **Instalar las dependencias:**

   ```bash
   yarn install
   ```

3. **Configurar las variables de entorno:**

   Crea un archivo `.env` en el directorio `backend` con las siguientes variables (valores dummy):

   ```plaintext
   POSTGRES_URL="postgres://usuario:contraseña@host/nombre_basedatos"
   POSTGRES_SSL="true"
   JWT_SECRET="tu_clave_secreta_jwt"
   NODE_ENV="development"
   ```

   Asegúrate de reemplazar `usuario`, `contraseña`, `host` y `nombre_basedatos` con la configuración de tu base de datos PostgreSQL. También cambia `tu_clave_secreta_jwt` por una clave secreta segura para JWT.

4. **Configurar el servidor en `backend/src/main.ts`:**

   Abre el archivo `backend/src/main.ts` y ajusta las siguientes líneas según sea necesario:

   ```typescript
   const PORT = process.env.PORT || 5000;
   const HOST = process.env.HOST || '192.168.100.4';

   await app.listen(PORT, HOST, () => {
     console.log(`🚀 Application is running on: http://${HOST}:${PORT}`);
     // swagger docs
     console.log(`📖 Swagger UI is available at http://${HOST}:${PORT}/docs`);
     console.log('📦 Press Ctrl+C to quit.');
   });
   ```

   - `PORT`: El puerto en el que deseas que el servidor escuche. Puedes cambiarlo según tus necesidades locales o de producción.
   - `HOST`: La dirección IP o el nombre de host donde deseas que el servidor escuche. Ajusta esto según el entorno (Para produccion es mejor eliminarlo).

5. **Iniciar el servidor de desarrollo:**

   ```bash
   yarn start:dev
   ```

   El servidor estará escuchando en `http://localhost:5000` por defecto.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
