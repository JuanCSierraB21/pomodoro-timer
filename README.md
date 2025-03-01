# React + Vite

# Pomodoro Timer

Una aplicación de temporizador Pomodoro desarrollada con React y Vite, siguiendo el patrón de arquitectura MVC (Modelo-Vista-Controlador).

## Descripción

Este Pomodoro Timer es una herramienta de gestión del tiempo basada en la técnica Pomodoro, un método que utiliza intervalos de trabajo de 25 minutos seguidos de períodos de descanso cortos. La aplicación permite:

- Iniciar, pausar y reiniciar el temporizador
- Cambiar entre modos: Pomodoro, Descanso Corto y Descanso Largo
- Personalizar la duración de cada intervalo
- Seguimiento de ciclos completados
- Notificaciones sonoras cuando los temporizadores finalizan

## Características

- 🟢 Diseño con tema verde para una experiencia visual relajante
- 🔊 Efectos de sonido para iniciar, pausar y completar temporizadores
- ✨ Animaciones suaves utilizando Framer Motion
- 📱 Diseño responsivo que se adapta a diferentes tamaños de pantalla
- 🧱 Arquitectura MVC para una estructura de código limpia y mantenible

## Tecnologías utilizadas

- React + Vite
- Styled Components para los estilos
- Framer Motion para animaciones
- use-sound para efectos de sonido
- Arquitectura MVC

## Demostración en vivo

Puedes ver la aplicación en funcionamiento [aquí](https://pomodoro-timer-vercel-url.vercel.app/).

## Instalación y ejecución local

### Prerrequisitos
- Node.js (v14.0.0 o superior)
- npm (v6.0.0 o superior)

### Pasos de instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/pomodoro-timer.git
   cd pomodoro-timer
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:5173`

## Estructura del proyecto

El proyecto sigue el patrón Modelo-Vista-Controlador (MVC):

- **Modelo**: Contiene la lógica de negocio y el estado del temporizador.
- **Vista**: Componentes de React que representan la interfaz de usuario.
- **Controlador**: Maneja las interacciones del usuario y actualiza el modelo y la vista en consecuencia.

```
/src
  /models        # Lógica de negocio y datos
  /views         # Componentes de la interfaz de usuario
  /controllers   # Conecta modelos y vistas
  /assets        # Sonidos e iconos
  /constants     # Constantes y configuración
```

## Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz fork del repositorio
2. Crea una rama para tu función (`git checkout -b feature/amazing-feature`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
5. Haz push a la rama (`git push origin feature/amazing-feature`)
6. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
