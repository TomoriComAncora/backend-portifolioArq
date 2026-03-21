# Backend - PortifolioArq

API em Node.js + Express + Prisma para autenticacao, portfolio publico e CRUD de projetos com upload de arquivos.

## Stack

- Node.js (>= 18)
- Express
- Prisma + Postgres
- Multer (upload)
- JWT (auth)
- Passport Google OAuth 2.0 (login com Google)

## Scripts

- `npm run dev`: roda em modo dev (tsx watch)
- `npm run start`: roda a build (`dist/`)
- `npx tsc -p tsconfig.json --noEmit`: typecheck local sem rodar migrations

## Variaveis de ambiente

Arquivo: `backend-portifolioArq/.env` (nao commitar)

- `DATABASE_URL`: string de conexao do Postgres
- `JWT_SECRET`: segredo para assinar tokens
- `FRONTEND_URL`: base URL do frontend (usado no redirect do Google)
- `BACKEND_URL`: base URL do backend (usado no callback do Google)
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`: credenciais do Google OAuth
- `PORT` (opcional): porta do servidor (padrao 3333)

## Uploads / arquivos

Em producao, os uploads (foto de perfil e imagens de projetos) sao enviados para o Supabase Storage (bucket publico).

Variaveis necessarias:

- `SUPABASE_URL`: Project URL do Supabase
- `SUPABASE_SERVICE_ROLE_KEY`: chave `service_role` (somente backend)
- `SUPABASE_BUCKET`: nome do bucket (ex.: `portifolio-files`)

Observacoes:

- Nunca exponha `SUPABASE_SERVICE_ROLE_KEY` no frontend.
- Como o bucket e publico, o backend salva no banco a URL publica do arquivo.

## Rotas principais

Auth

- `POST /users` (multipart/form-data): cria usuario; campo de arquivo `fotoPerfil` (opcional)
- `POST /session` (application/json): login email/senha; retorna JWT
- `GET /me` (Bearer): detalhes do usuario autenticado
- `PUT /me/photo` (Bearer + multipart/form-data): atualiza `fotoPerfil`

Google OAuth

- `GET /auth/google`
- `GET /auth/google/callback`

Projetos

- `POST /project` (Bearer + multipart/form-data): cria projeto; campos de arquivo `capa` (1) e `imagens` (N)
- `GET /project` (Bearer): lista projetos do usuario autenticado
- `GET /projects` (publico): lista todos
- `GET /project/:id` (publico): detalha um projeto
- `PUT /project/:project_id` (Bearer + multipart/form-data): atualiza; aceita `imagensRemoveIds` (string JSON com ids)
- `DELETE /project/:id` (Bearer): remove projeto

Publico

- `GET /category` (publico): lista categorias
- `GET /project/search?q=<termo>` (publico)
- `GET /portfolio/:userId` (publico): lista portfolio publico do usuario
