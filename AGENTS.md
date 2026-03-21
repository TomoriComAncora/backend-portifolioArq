# AGENTS

Mudancas feitas pelo agente (logging, docs, higiene).

## 2026-03-20

- Remove `console.*` do backend em `backend-portifolioArq/src` (evita vazar email/id e reduz ruido em producao)
- Ajusta tratamento de erro em controllers para nao logar stack em resposta normal
- Remove imports nao usados em `backend-portifolioArq/src/server.ts`
- Melhora `DeleteProjectService` para ignorar `ENOENT` sem warn (e falhar para outros erros)
- Adiciona documentacao do backend em `backend-portifolioArq/README.md`

## 2026-03-20 (Uploads -> Supabase Storage)

- Troca upload local em `tmp/` por upload no Supabase Storage (bucket publico) e passa a salvar URL publica no banco
- `multer` agora usa `memoryStorage` (nao persiste mais arquivos localmente)
- Remove rota static `GET /files/*` (nao e mais usada)
- Adiciona utilitarios: `backend-portifolioArq/src/lib/supabaseAdmin.ts` e `backend-portifolioArq/src/lib/supabaseStorage.ts`
- Atualiza controllers para enviar arquivos ao Supabase:
  - `backend-portifolioArq/src/controller/user/CreateUserController.ts`
  - `backend-portifolioArq/src/controller/user/UpdateUserPhotoController.ts`
  - `backend-portifolioArq/src/controller/projects/CreateProjectController.ts`
  - `backend-portifolioArq/src/controller/projects/UpdateProjectController.ts`
- Atualiza doc de variaveis de ambiente em `backend-portifolioArq/README.md`
