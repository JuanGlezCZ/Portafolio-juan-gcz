// ═══════════════════════════════════════════════════════════
// PROYECTOS — Edita este archivo para agregar nuevos proyectos
// ═══════════════════════════════════════════════════════════
//
// Campos disponibles:
//   title      — Nombre del proyecto
//   about      — Descripción (acepta HTML básico con <strong> y <em>)
//   tech       — Array de tecnologías usadas
//   img        — URL de imagen de portada (Unsplash o ruta local como 'projects/mi-proyecto/cover.jpg')
//   links      — { demo: 'URL o #', repo: 'URL o #', video: 'URL o ""' }
//                  Usa '#' para ocultar el botón. Usa ruta relativa para demos locales.
//   impact     — Métrica de impacto (texto corto, ej: '+40% eficiencia')
//   category   — Categoría para el filtro (ej: 'ERP', 'Mobile', 'CRM', 'Web', 'BI')
//   status     — 'En producción' | 'Open Source' | 'Case Study' | 'NDA'
//   featured   — true para mostrar como "Proyecto Destacado" (solo uno a la vez)
//
// Para agregar un proyecto:
//   1. Copia uno de los objetos de abajo
//   2. Modifica los campos
//   3. Si tienes demo local, crea la carpeta en projects/nombre-proyecto/
//   4. Apunta links.demo a 'projects/nombre-proyecto/'

const projects = [
  {
    title: 'Agente IA — Clasificación y Automatización',
    about: '<strong class="text-white">Trabajo manual eliminado con IA.</strong> Tareas repetitivas de clasificación consumían horas del equipo diariamente. Implementé agentes inteligentes con <em>OpenAI API</em> integrados al ERP: clasifican tickets, priorizan solicitudes y responden consultas frecuentes sin intervención humana. Reducción drástica en tiempo operativo.',
    tech: ['OpenAI API', 'PHP/Laravel', 'n8n', 'REST APIs', 'MySQL', 'Webhooks'],
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    links: { demo: '#', repo: '#', video: '' },
    impact: 'IA en producción',
    category: 'IA',
    status: 'En producción',
    featured: false
  },
  {
    title: 'Automatización Empresarial con n8n',
    about: '<strong class="text-white">Pipelines 100% automáticos.</strong> Procesos manuales entre sistemas desconectados generaban errores y retrasos. Diseñé flujos de automatización con <em>n8n</em>: sincronización HubSpot ↔ ERP, notificaciones en tiempo real, generación automática de reportes y triggers basados en eventos de negocio. Cero intervención manual.',
    tech: ['n8n', 'HubSpot API', 'REST APIs', 'Webhooks', 'MySQL', 'PHP'],
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop',
    links: { demo: '#', repo: '#', video: '' },
    impact: '0 procesos manuales',
    category: 'Automatización',
    status: 'En producción',
    featured: false
  },
  {
    title: 'ERP + Rastreo GPS en Tiempo Real',
    about: '<strong class="text-white">+40% eficiencia operativa.</strong> Flota sin visibilidad → despachos manuales con retrasos críticos. Diseñé ERP end-to-end con Webhooks REST para GPS en vivo (sub-500ms de latencia), almacenamiento de evidencias en <em>AWS S3 Buckets</em> y app móvil Ionic para operadores en campo. Middleware JWT en todos los endpoints.',
    tech: ['PHP', 'MySQL', 'Ionic', 'Angular', 'REST APIs', 'AWS S3', 'GPS Webhooks'],
    img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop',
    links: { demo: 'projects/erp-gps/', repo: '#', video: '' },
    impact: '+40% eficiencia',
    category: 'ERP',
    status: 'En producción',
    featured: true
  },
  {
    title: 'Integración CRM HubSpot ↔ ERP',
    about: '<strong class="text-white">Pipeline 100% automatizado.</strong> Datos duplicados entre ventas y operaciones generaban errores y fricción. Conecté HubSpot CRM v3 con el ERP via REST + Webhooks bidireccionales. Un lead nuevo dispara automáticamente la orden de servicio. Cero entrada manual entre sistemas.',
    tech: ['HubSpot API v3', 'Webhooks', 'PHP', 'REST', 'MySQL', 'Middleware'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    links: { demo: '#', repo: '#', video: '' },
    impact: '0 datos duplicados',
    category: 'CRM',
    status: 'En producción',
    featured: false
  },
  {
    title: 'Sistema de Requisiciones Web',
    about: '<strong class="text-white">-60% en ciclo de compra.</strong> Proceso 100% manual por email sin trazabilidad. Digitalicé el flujo completo: solicitud → aprobación multi-nivel → notificaciones en tiempo real con PHP/MySQL. Auditoría completa con historial y responsables asignados.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS3', 'REST APIs'],
    img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1200&auto=format&fit=crop',
    links: { demo: '#', repo: '#', video: '' },
    impact: '-60% tiempo',
    category: 'Web',
    status: 'En producción',
    featured: false
  },
  {
    title: 'App de Liquidaciones (Android/iOS)',
    about: '<strong class="text-white">-80% consultas presenciales.</strong> Operadores viajaban físicamente a la oficina para consultar pagos. App Ionic/Angular con autenticación JWT, endpoints REST seguros y UI optimizada para campo. Disponibilidad 24/7 desde cualquier dispositivo.',
    tech: ['Ionic', 'Angular', 'JWT', 'REST APIs', 'Android', 'iOS'],
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
    links: { demo: '#', repo: '#', video: '' },
    impact: '-80% consultas',
    category: 'Mobile',
    status: 'En producción',
    featured: false
  },
  {
    title: 'Dashboards BI — KPIs en Tiempo Real',
    about: '<strong class="text-white">De semanas a horas.</strong> Gerencia tomaba decisiones con datos de semanas de antigüedad. Power BI conectado directamente a SQL Server on-premise con DAX avanzado para KPIs de flota, ventas y finanzas. Actualización horaria automatizada sin intervención manual.',
    tech: ['Power BI', 'DAX', 'SQL Server', 'MySQL'],
    img: 'https://images.unsplash.com/photo-1551281044-8d8d9041f0b5?q=80&w=1200&auto=format&fit=crop',
    links: { demo: '#', repo: '#', video: '' },
    impact: 'Datos en tiempo real',
    category: 'BI',
    status: 'En producción',
    featured: false
  },
  {
    title: 'Control de Acceso con QR',
    about: '<strong class="text-white">100% trazabilidad digital.</strong> Control de acceso manual en papel sin auditoría posible. Sistema de generación y validación de QR en tiempo real con Ionic 6/Angular. Backend Slim Framework REST API. Eliminó registros físicos y habilitó auditorías digitales completas.',
    tech: ['Ionic 6', 'Angular', 'Slim Framework', 'REST APIs', 'QR'],
    img: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?q=80&w=1200&auto=format&fit=crop',
    links: { demo: '#', repo: '#', video: '' },
    impact: '100% trazabilidad',
    category: 'Mobile',
    status: 'Case Study',
    featured: false
  }
];
