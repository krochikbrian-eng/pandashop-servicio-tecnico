# Pandashop — Servicio Técnico

Sitio web del servicio técnico de **Pandashop**. Reparamos celulares, tablets, consolas, controles/joysticks, drones, notebooks y aspiradoras robot. También vendemos productos, accesorios y repuestos.

Pensado para trabajar en conjunto con la tienda principal [www.pandashop.ar](https://www.pandashop.ar): enlaza a la tienda y centraliza los pedidos de presupuesto por WhatsApp.

## Características

- Landing one-page responsive con la marca Pandashop.
- Catálogo de servicios por tipo de equipo.
- Formulario de presupuesto que arma el mensaje y abre WhatsApp listo para enviar.
- Sección de proceso, "por qué nosotros" y preguntas frecuentes.
- Botón flotante de WhatsApp y datos de contacto reales.
- SEO básico + datos estructurados (LocalBusiness).
- Sin dependencias: servidor estático en Node puro.

## Desarrollo local

```bash
npm start
# abre http://localhost:3000
```

## Configuración

El número de WhatsApp se define en `script.js` (constante `WHATSAPP`) y en los enlaces de `index.html`.

## Deploy (Railway)

El proyecto incluye `railway.json`. Railway detecta Node por `package.json` y corre `npm start`, escuchando en el puerto de la variable `PORT`.

## Datos del negocio

- Dirección: Vera 1150, Villa Crespo (CABA)
- WhatsApp: +54 9 11 3380-5700
- Tel: 011 5263-5600
- Instagram: [@Pandashop_ar](https://instagram.com/Pandashop_ar)
- Razón Social: Menta Granizada S.A.S. — CUIT 30-71670182-0
