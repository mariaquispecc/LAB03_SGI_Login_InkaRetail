UNIVERSIDAD NACIONAL DE SAN CRISTÓBAL DE HUAMANGA
FACULTAD DE INGENIERÍA DE MINAS, GEOLOGÍA Y CIVIL
ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS

NOMBRE: QUISPE CCAHUANA, Maria Leonela
CÓDIGO: 27210513

SISTEMA: Falabella
URL: https://www.falabella.com.pe 

FECHA: 18/05/2026

Descripción del sistema: Sistema integral para un E-commerce con presencia a nivel nacional e internacional.
Es una plataforma transaccional de tipo Business-to-Consumer (B2C) de alta concurrencia que integra el inventario de múltiples tiendas asociadas (Saga Falabella, Sodimac, Tottus) y vendedores independientes (Marketplace). La plataforma está diseñada para ofrecer una experiencia omnicanal, permitiendo a los usuarios buscar productos de manera intuitiva, gestionar un carrito de compras dinámico y realizar transacciones de pago seguras mediante diversas tarjetas y modalidades de despacho físico o retiro en tienda.

Descripción de Funcionalidades Evaluadas

A. Funcionalidad: Búsqueda y Filtros de Productos
Este módulo constituye el punto de inicio del embudo de conversión. Permite a los usuarios localizar artículos específicos dentro de una base de datos de millones de registros (SKUs). Incorpora:
- Barra de búsqueda predictiva: Interpreta términos de texto, marcas y categorías.
- Sanitización de entradas: Procesa y neutraliza caracteres no permitidos o código malicioso.
- Módulo de filtros avanzados: Permite refinar la galería de productos por rango numérico de precios (mínimo y máximo), marcas, colores y tallas.
B. Funcionalidad: Bolsa de Compras (Carrito de Compras)
Área del sistema encargada de consolidar y persistir temporalmente la selección de productos del usuario antes de proceder al pago. Administra reglas de negocio cruciales como:
- Verificación de stock e inventario: Valida la disponibilidad de productos en tiempo real.
- Control de variantes: Obliga a seleccionar parámetros clave como color o talla antes de permitir la adición del producto.
- Ajuste dinámico de cantidades: Gestiona el incremento o decremento de ítems respetando los límites mínimos ($N=1$) y los límites máximos disponibles en almacén.
C. Funcionalidad: Checkout (Proceso de Pago)
Módulo final de conversión transaccional de alta seguridad. Comprende las siguientes actividades críticas:
- Captura de datos de contacto: Registro de correos electrónicos para el envío de comprobantes electrónicos de pago.
- Motor de promociones: Validación y aplicación de cupones de descuento vigentes sobre el subtotal de la compra.
- Pasarela de facturación financiera: Captura y valida de forma cifrada la información de las tarjetas de crédito o débito, impidiendo el envío de datos en blanco o con formatos incorrectos.

URL MATRIZ: https://docs.google.com/spreadsheets/d/1Vb3crPgEwhuOyzJvh5qdDSYKm6h83vPOsK3HTjXn150/edit?usp=sharing 
