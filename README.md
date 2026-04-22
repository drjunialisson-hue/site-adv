# Site do Dr. Junialisson Costa

Site institucional do escritório de advocacia do Dr. Junialisson Costa. Focado em direito criminal, mas também atuamos em outras áreas.

## O que tem aqui

Basicamente é uma landing page moderna com todas as informações importantes: serviços, áreas de atuação, sobre o advogado, equipe, FAQ e formulário de contato.

## Como rodar localmente

Primeiro, instala as dependências:

```bash
npm install
```

Depois é só rodar o servidor de desenvolvimento:

```bash
npm run dev
```

O site vai abrir em `http://localhost:8080` (ou a porta que o Vite escolher).

Para gerar o build de produção:

```bash
npm run build
```

E se quiser ver como ficou o build:

```bash
npm run preview
```

## Tecnologias que usei

- **Vite** - Pra build e dev server (bem rápido)
- **React + TypeScript** - Pra estrutura e tipagem
- **Tailwind CSS** - Pra estilização (bem prático)
- **shadcn-ui** - Componentes prontos que adaptei
- **React Router** - Pra navegação entre páginas
- **EmailJS** - Pro formulário de contato funcionar

## Configuração do EmailJS

O formulário de contato usa EmailJS pra enviar os emails. Você precisa criar um arquivo `.env` na raiz do projeto com essas variáveis:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

Se não configurar, o formulário não vai enviar emails (mas o resto do site funciona normal).

## Estrutura das pastas

```
src/
├── components/     # Componentes reutilizáveis (Header, Footer, etc)
├── pages/          # Páginas principais (Index, ServicePage, etc)
├── hooks/          # Hooks customizados
├── lib/            # Funções utilitárias
└── assets/         # Imagens e arquivos estáticos
```

## Deploy

Pode fazer deploy em qualquer lugar que rode React/Vite. Já testei no Vercel e funciona de boa. Só precisa fazer o build e subir os arquivos.

## Observações

- As imagens estão em `.JPEG` (maiúsculo) - configurei o Vite pra aceitar isso
- O scroll to top funciona automaticamente quando muda de página
- Os links com hash (#servicos, #contato, etc) fazem scroll suave até a seção

Qualquer dúvida, só chamar!
