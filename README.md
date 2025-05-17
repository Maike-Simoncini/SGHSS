
# Sistema de Gestão Hospitalar e de Serviços de Saúde (SGHSS)
Projeto Multidisciplinar com ênfase no Desenvolvimento Back-end.

## 🎯 Objetivo
Desenvolvido para a instituição VidaPlus, centralizando o cadastro de pacientes, agendamento de consultas, telemedicina, gestão de profissionais de saúde e administração hospitalar.

## 🚀 Tecnologias 
- Node.js
- Express.js
- MySQL/PostgreSQL
- JWT para autenticação
- Bcrypt para criptografia
- Sequelize (ORM)

## ⚙️ Configuração 
1. Clone o repositório:
   ```bash
   git clone https://github.com/Maike-Simoncini/SGHSS.git 
   cd SGHSS
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env` com suas credenciais.

4. Execute as migrações do banco de dados:
   ```bash
   node migrations/create_tables.sql
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

## 🔧 Funcionalidades 
- **Cadastro e Atendimento de Pacientes**: Cadastro, histórico clínico, agendamento e telemedicina.
- **Gestão de Profissionais de Saúde**: Gerenciamento de agendas e prontuários.
- **Administração Hospitalar**: Controle de leitos, suprimentos e relatórios financeiros.
- **Telemedicina**: Videochamadas seguras e prontuários online.
- **Segurança e Compliance**: Autenticação segura e criptografia de dados.

## 📂 Estrutura
```
SGHSS/
├── Node.js0                    # Documentação do projeto
├── package.json                # Configuração do Node.js
├── server.js                   # Arquivo principal do servidor
├── models/                     # Modelos de dados
├── routes/                     # Rotas da API
├── controllers/                # Controladores
└── migrations/                 # Scripts de migração do banco de dados
```

## 🔗 Link do Repositório 
https://github.com/Maike-Simoncini/SGHSS.git
