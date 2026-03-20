# AGENTS

Mudancas feitas pelo agente (logging, docs, higiene).

## 2026-03-20

- Remove `console.*` do backend em `backend-portifolioArq/src` (evita vazar email/id e reduz ruido em producao)
- Ajusta tratamento de erro em controllers para nao logar stack em resposta normal
- Remove imports nao usados em `backend-portifolioArq/src/server.ts`
- Melhora `DeleteProjectService` para ignorar `ENOENT` sem warn (e falhar para outros erros)
- Adiciona documentacao do backend em `backend-portifolioArq/README.md`
