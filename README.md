# Site Dr. Ivan Oliveira

SPA (React + Vite + Tailwind v4) com portfólio e chamada para WhatsApp.

## Rodar
```
npm install
npm run dev
```

## Editar conteúdo
Tudo fica em `src/config.js` (textos, FAQ, depoimentos, endereço, foto).
Itens `[PLACEHOLDER]` precisam ser substituídos. Coloque a foto em `public/` e
aponte `doctor.photo` (ex.: `'/ivan.jpg'`).

## Deploy na Vercel
Suba o repositório no GitHub e importe na Vercel (preset Vite detectado
automaticamente), ou rode `npx vercel`. O `vercel.json` já cuida do fallback de SPA.

## Atenção (CFM 2.336/2023)
Depoimentos só reais e autorizados, sem promessa de resultado; evitar "melhor";
manter CRM/RQE visíveis. Confirme com o CRM-PB.
