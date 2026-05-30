# Refrigeração Edir — Site Institucional

Site institucional da **Refrigeração Edir**, desenvolvido conforme o documento de arquitetura do projeto.

## Stack

- **Front-end:** React (JavaScript) + Vite
- **Estilização:** Tailwind CSS
- **Hospedagem sugerida:** Vercel ou Netlify
- **Back-end:** Não aplicável nesta fase (100% front-end)

## Funcionalidades

- Layout responsivo com dados fictícios (Unsplash)
- Dupla audiência: **B2B** (PMOC) e **B2C** (orçamento residencial)
- Componentes: `ServiceCard`, `TestimonialCard`, `MultiStepForm`
- Wizard de orçamento em 3 passos com integração WhatsApp (`wa.me`)

## Como executar

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

## Build para produção

```bash
npm run build
npm run preview
```

## Deploy

O projeto está pronto para deploy na **Vercel** ou **Netlify** — basta conectar o repositório e apontar o build command para `npm run build` e o output para `dist`.
