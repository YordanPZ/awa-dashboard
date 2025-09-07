# Dashboard de Calidad del Agua - AquaCare

Dashboard profesional para el monitoreo de parámetros de calidad del agua en hospitales, desarrollado con Next.js 15, TypeScript, Tailwind CSS y shadcn/ui.

## 🚀 Características

- **Dashboard Interactivo**: Visualización en tiempo real de parámetros de calidad del agua
- **Métricas Clave**: Monitoreo de Cloro Residual, pH, Temperatura y Turbidez
- **Gráficos Avanzados**: Evolución temporal y distribución por ubicación usando Recharts
- **Sistema de Alertas**: Panel de alertas con estados de color para identificación rápida
- **Diseño Responsive**: Optimizado para desktop, tablet y móvil
- **Sidebar Colapsable**: Navegación intuitiva con menú lateral
- **Tema Profesional**: Diseño médico/hospitalario con colores verde agua

## 🛠️ Tecnologías

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Componentes**: shadcn/ui
- **Gráficos**: Recharts
- **Iconos**: Lucide React
- **Fuentes**: Geist Sans & Geist Mono

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/YordanPZ/awa-dashboard.git
cd awa-dashboard

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
```

## 🏥 Funcionalidades

### Dashboard Principal
- Tarjetas de métricas con valores actuales
- Gráfico de líneas para evolución de parámetros (7 días)
- Gráfico de barras para distribución por ubicación
- Panel de alertas con estados críticos

### Parámetros Monitoreados
- **Cloro Residual**: 0.5-2.0 mg/L (rango óptimo)
- **pH**: 6.5-8.5 (rango aceptable)
- **Temperatura**: 15-25°C (rango normal)
- **Turbidez**: <1.0 NTU (límite recomendado)

### Ubicaciones
- Quirófanos 1 y 2
- Unidad de Cuidados Intensivos (UCI)
- Urgencias
- Plantas hospitalarias

## 🎨 Diseño

- **Colores Principales**: Verde agua/esmeralda para tema médico
- **Layout**: Sidebar fijo + área principal responsive
- **Tipografía**: Geist Sans para legibilidad profesional
- **Componentes**: Sistema de diseño consistente con shadcn/ui

## 📱 Responsive Design

- **Desktop**: Layout completo con sidebar visible
- **Tablet**: Sidebar colapsable, grid adaptativo
- **Mobile**: Sidebar offcanvas, stack vertical

## 🔧 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css      # Estilos globales y variables CSS
│   ├── layout.tsx       # Layout raíz con Sidebar
│   └── page.tsx         # Dashboard principal
├── components/ui/       # Componentes shadcn/ui
├── hooks/
│   └── use-mobile.ts    # Hook para detección móvil
└── lib/
    └── utils.ts         # Utilidades (cn helper)
```

## 🚀 Deploy en Vercel

Este proyecto está optimizado para despliegue en Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YordanPZ/awa-dashboard)

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Proyecto desarrollado para monitoreo hospitalario de calidad del agua.

---

**AquaCare Dashboard** - Monitoreo profesional de calidad del agua en entornos hospitalarios.
