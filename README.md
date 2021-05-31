# poc-flat-data

### POC
Basicamente o **flat data** é uma GitHub action que torna mais fácil o processo de fetch e commit de dados para um repositório como `flatfiles`.  
A ideia dessa POC é validar a integração `Google Forms` > `Google Sheet` > `Flat Data` > `GitHub`.

**Forms**  
- Múltipla escolha
- Texto livre com qtde máxima caracteres
- Todas perguntas obrigatórias
- Habilitada opção de visualizar resposta no Google Sheet

**Planilha**  
- Arquivo > Publicar na Web > Documento inteiro (permitir que fique público)

> O link gerado será utilizado no `flat.yml`

**Flat.yml**  
- Define de quanto em quanto tempo o "sync" de dados deve ser feito, padrão `cron`
- Fetch data via HTTP
    - Downloaded filename
    - Endpoint url (link do csv do Google Sheets)

**Fetch.js**  
- Arquivo de postprocessing, utiliza deno 🦖.
- Converte o `csv` para `json`

Mais detalhes sobre o processo de postprocessing:  
https://github.com/githubocto/flat#postprocessing


### **Fontes:**
- https://octo.github.com/projects/flat-data
- https://github.com/marketplace/actions/flat-data
- https://marketplace.visualstudio.com/items?itemName=GitHubOCTO.flat
