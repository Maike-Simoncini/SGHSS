
# Sistema de Gestão Hospitalar e de Serviços de Saúde (SGHSS)
*Projeto Multidisciplinar com ênfase no Desenvolvimento Back-end.*

## 🎯 Objetivo
O Sistema de Gestão Hospitalar e de Serviços de Saúde (SGHSS) foi desenvolvido para atender às necessidades da instituição VidaPlus, centralizando as operações de gestão hospitalar e serviços de saúde.

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

3. Configure as variáveis de ambiente:

- Renomeie o arquivo .env.example para .env.
  
- Preencha as variáveis com suas credenciais de banco de dados e segredo JWT:
   ```bash
     PORT=3000
     DB_NAME=sgdss_db
     DB_USER=root
     DB_PASSWORD=senha123
     DB_HOST=localhost
     JWT_SECRET=segredo_jwt_supersecreto
   ```

     
5. Execute as migrações do banco de dados:
   ```bash
   node migrations/create_tables.sql
   ```

6. Inicie o servidor:
   ```bash
   npm start
   ```

## 🚀 Tecnologias 
- Node.js
- Express.js
- MySQL/PostgreSQL
- JWT para autenticação
- Bcrypt para criptografia
- Sequelize (ORM)

## 🔧 Funcionalidades 
### Cadastro e Atendimento de Pacientes
   - Cadastro de Pacientes: Permite o cadastro de dados pessoais e clínicos dos pacientes.
   - Histórico Clínico: Visualização do histórico médico, incluindo consultas, exames e prontuários.
   - Agendamento de Consultas: Agendamento e cancelamento de consultas presenciais e online.
   - Notificações: Envio de lembretes e notificações sobre consultas e exames.
   - Acesso à Telemedicina: Acesso a teleconsultas e visualização de prescrições online.

### Gestão de Profissionais de Saúde
   - Gerenciamento de Agendas: Controle das agendas de médicos, enfermeiros e outros profissionais.
   - Atualização de Prontuários: Atualização e manutenção dos prontuários dos pacientes.
   - Emissão de Receitas Digitais: Prescrição de medicamentos e emissão de receitas digitais.
   - Acompanhamento de Pacientes: Acesso ao histórico clínico dos pacientes.

### Administração Hospitalar
   - Gestão de Leitos: Controle de alocação e disponibilidade de leitos hospitalares.
   - Relatórios Financeiros: Geração de relatórios financeiros e operacionais.
   - Controle de Suprimentos: Monitoramento de estoque de medicamentos e materiais hospitalares.
   - Gestão de Usuários: Cadastro e gerenciamento de perfis de pacientes, profissionais e administradores.

### Telemedicina
   - Videochamadas Seguras: Realização de atendimentos online com criptografia de dados.
   - Prontuários Online: Registro de prontuários e prescrições durante teleconsultas.
   - Marcação de Consultas e Exames: Agendamento de consultas presenciais e exames a partir da telemedicina.

### Segurança e Compliance
   - Autenticação Segura: Login e autenticação com JWT (JSON Web Token).
   - Criptografia de Dados Sensíveis: Proteção de dados pessoais e clínicos conforme LGPD.
   - Registros de Auditoria: Logs de todas as ações realizadas no sistema para auditoria e conformidade.
   - Controle de Acesso por Perfil: Restrição de acesso com base no perfil do usuário (paciente, profissional, administrador).

### Requisitos Não Funcionais
   - Escalabilidade: Suporte a múltiplas unidades hospitalares.
   - Desempenho: Tempo de resposta rápido em consultas críticas.
   - Acessibilidade: Interface amigável e responsiva, seguindo padrões W3C/WCAG.
   - Disponibilidade: Garantia de 99,5% de uptime, com backups e logs robustos.

## 📂 Estrutura
```
SGHSS/
├── README.md                     # Documentação básica do projeto
├── package.json                  # Arquivo de configuração do Node.js
├── .1. 0                         # Modelo de variáveis de ambiente
├── server.js                     # Arquivo principal do servidor
├── config/                       # Configurações globais
│   └── db.js                     # Configuração da conexão com o banco de dados
├── models/                       # Modelos de dados (entidades)
│   ├── Paciente.js               # Modelo de Paciente
│   ├── Profissional.js           # Modelo de Profissional
│   ├── Consulta.js               # Modelo de Consulta
│   ├── LogAuditoria.js           # Modelo de Logs de Auditoria
│   └── ...                       # Outros modelos
├── routes/                       # Rotas da API
│   ├── 1. 7                      # Rotas relacionadas a pacientes
│   ├── profissionalRoutes.js     # Rotas relacionadas a profissionais
│   ├── consultaRoutes.js         # Rotas relacionadas a consultas
│   ├── 2. 0                      # Rotas de autenticação
│   └── logRoutes.js              # Rotas de logs de auditoria
├── controllers/                  # Controladores (lógica de negócio)
│   ├── pacienteController.js     # Lógica para pacientes
│   ├── profissionalController.js # Lógica para profissionais
│   ├── consultaController.js     # Lógica para consultas
│   ├── authController.js         # Lógica de autenticação
│   └── logController.js          # Lógica de logs de auditoria
├── middlewares/                  # Middlewares
│   └── authMiddleware.js         # Middleware de autenticação JWT
└── migrations/                   # Scripts de migração do banco de dados
    └── create_tables.sql         # Script SQL para criação das tabelas
```

## 🔗 Repositório 
https://github.com/Maike-Simoncini/SGHSS.git
