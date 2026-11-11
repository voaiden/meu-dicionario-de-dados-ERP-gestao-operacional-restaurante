# Don Carlini Ristorante | Sistema de Gestão Operacional e Vendas

---

## Índice de Navegação

1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Arquitetura de Diretórios](#arquitetura-de-diretórios)
3. [Equipe de Desenvolvimento e Governança](#equipe-de-desenvolvimento-e-governança)
4. [Tecnologias & Ferramentas](#tecnologias--ferramentas)
5. [Governança e Uso de Inteligência Artificial](#governança-e-uso-de-inteligência-artificial)

---

## Visão Geral do Projeto

O projeto desenvolvido para a matéria de Banco de Dados trata-se de uma elicitação de requisitos para um sistema `ERP` de gestão operacional e vendas para o restaurante italiano: `Don Carlini Ristorante`, uma empresa real do varejo no bairro da Mooca - SP.
<br>
O objetivo conferido ao grupo era investigar e entender deteminado ramo real de negócio, para um levantamento de requisitos detalhados, regras de negócio e políticas de restrições para a modelagem conceitual, lógica e física(implementação) de um banco de dados para suportar tal sistema documentado.
<br>
O site a seguir representa de forma intuitiva um dicionário de dados, funcionando como um "manual de instruções" ou uma enciclopédia que descreve o significado, a estrutura,g a oriem e o uso de cada elemento de informação armazenado.

---

## Arquitetura de Diretórios



```text
/meu-dicionario
├── index.html  # Interface principal do Dicionário de Dados
├── style.css   # Estilização customizada
├── script.js   # Lógica de busca em tempo real, Panzoom/Dark Mode
├── docs/   # Documentação oficial e relatórios do projeto
│   └── Especificacao_Requisitos_Regras_Negocio_BD.pdf
└── assets/ # Ativos visuais e diagramas do sistema
    └── der_mysql_ristorante2.png # Diagrama (DER)

```

---

## Equipe de Desenvolvimento e Governança

* **Vinicius Ramiro dos Santos Cunha** – Database Analyst (Analista de Banco de Dados)
* **Thiago Pereira Sampaio** – Data Architect (Arquiteto de Dados)
* **Victor Ribeiro Perillo** – Domain Expert (Especialista de Domínio)
* **Antonio Nsona Senga** – Business Analyst (Analista de Negócios)
* **Luís Henrique Lopes Gomes** – Data Quality Analyst (Analista de Qualidade de Dados)
* **Rogério Duarte Lira** – Data Quality Analyst (Analista de Qualidade de Dados)
* **Robert Aparecido Bezerra de Freitas** – Process Analyst (Analista de Processos)

**Orientação Acadêmica:** Prof. Dr. Diego Carvalho

---

## Tecnologias & Ferramentas:
- SGBD: MySQL 8.0+ (InnoDB, UTF-8 MB4);
- [Mermaid](https://mermaid.js.org/) (geração inicial de `DER`);
- Google Docs(documentação);
- IAs Generativas: ChatGPT, Gemini, Claude(apoio no desenvolvimento);
- Visual Studio Code, Git, GitHub;
- Linguagens: `HTML`, `CSS`, `Js`, `MarkDown`;
- Framework: Bootstrap( via CDN) 5.3.2.

---

## Governança e Uso de Inteligência Artificial
Declaramos o uso de `IA Generativa` como: GPT, Gemini e Claude no apoio ao desenvolvimento do projeto, do inicio ao fim, relacionado a atividades como:
- Revisão e ajustes da documentação;
- Adequação do Modelo-Entidade-Relacionamentos(padronização, consistência);
- Geração do script para criação de DER na plataforma Mermaid
- Elaboração integral da `IA` do dicionário de dados como página web, como ajustes pontuais no código feito a mão;
- Apoio no script DDL de geração das tabelas, atributos e relacionamentos.


---

[Voltar ao Topo](#índice-de-navegação)
