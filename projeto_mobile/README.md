# Projeto Mobile Master - Desenvolvimento de Aplicativos Moveis

Aplicativo de referencia da disciplina de Desenvolvimento de Aplicativos Moveis (UNIVEM), planejado para evolucao em 12 semanas.

## Stack oficial
- Ionic 8
- Angular 20
- TypeScript
- Capacitor

## Funcionalidades implementadas nesta base (ate a Semana 12)
- Interfaces com componentes do Ionic e formulários responsivos.
- Navegação entre telas com rotas, tabs e menu lateral.
- Arquitetura estruturada com separação de responsabilidades e serviços Angular.
- Consumo de serviços externos (API REST) e tratamento de erros com toasts.
- Gerenciamento de tarefas (criar, concluir, remover, importar da API externa).
- Detalhe e edicao de tarefas com passagem de parâmetros por rota.
- Persistencia de preferencias com Capacitor Preferences e localStorage.
- Persistencia local de tarefas com Ionic Storage.

## Estrutura principal
- src/app/core: services (TaskService, ApiService, PreferencesService, LocalDatabaseService) e models.
- src/app/features/tabs: navegacao principal com abas.
- src/app/features/tasks: fluxo de tarefas e detalhe/edicao.
- src/app/features/calendar: visao de prazos de tarefas.
- src/app/features/settings: preferencias do usuario (tema escuro e filtros).

## Executar localmente

```powershell
Set-Location "c:\Users\eduar\projetos\copia-dispositivos\projeto_mobile"
$env:Path = "C:\Program Files\nodejs;" + $env:Path
npm install
npm run start
```

## Build de producao

```powershell
npm run build
```

## Mapeamento pedagógico
A matriz de rastreabilidade por semana e o plano de ensino estao em:
- docs/matriz_12_semanas.md
- docs/plano_ensino_12_semanas.json
