$ErrorActionPreference = 'Stop'

Write-Host 'Verificando Node.js e npm...'
$nodePath = 'C:\Program Files\nodejs'
if (-not (Test-Path $nodePath)) {
  Write-Error 'Node.js nao encontrado em C:\Program Files\nodejs. Instale Node.js LTS e tente novamente.'
}

$env:Path = "$nodePath;$env:Path"

Set-Location "c:\Users\eduar\projetos\planejamento_docencia\projeto_mobile"

Write-Host 'Instalando dependencias...'
& "C:\Program Files\nodejs\npm.cmd" install

Write-Host 'Validando build web...'
& "C:\Program Files\nodejs\npm.cmd" run build

Write-Host 'Bootstrap concluido com sucesso.'
