# 📱 Titon App - Aplicativo de Agendamento

Um aplicativo móvel moderno desenvolvido com **React Native** e **Expo** para agendamento de serviços e gerenciamento de usuários.

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **Redux** - Gerenciamento de estado da aplicação
- **Redux Saga** - Middleware para operações assíncronas
- **React Navigation** - Navegação entre telas
- **Styled Components** - Estilização de componentes
- **Axios** - Cliente HTTP para APIs
- **AsyncStorage** - Armazenamento local
- **Reactotron** - Debugging e monitoramento

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) (para desenvolvimento Android)
- [Xcode](https://developer.apple.com/xcode/) (para desenvolvimento iOS - apenas macOS)

## 🛠️ Instalação

1. **Clone o repositório**

   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd titon-app-1
   ```

2. **Instale as dependências**

   ```bash
   yarn install
   # ou
   npm install
   ```

3. **Configure o ambiente**
   ```bash
   # Para iOS (apenas macOS)
   cd ios && pod install && cd ..
   ```

## 🚀 Como Executar

### Desenvolvimento

1. **Inicie o servidor de desenvolvimento**

   ```bash
   yarn start
   # ou
   npm start
   ```

2. **Execute no dispositivo/emulador**

   ```bash
   # Para Android
   yarn android

   # Para iOS
   yarn ios

   # Para web
   yarn web
   ```

### Build de Produção

```bash
# Build para Android
expo build:android

# Build para iOS
expo build:ios
```

## 📱 Funcionalidades

### 🔐 Autenticação

- **Login** - Acesso ao sistema com email e senha
- **Cadastro** - Criação de nova conta de usuário
- **Persistência** - Manutenção do estado de autenticação

### 🏠 Dashboard

- **Boas-vindas** - Saudação personalizada ao usuário
- **Visão geral** - Resumo das informações principais
- **Navegação rápida** - Acesso às funcionalidades principais

### 📅 Agendamento

- **Seleção de Prestador** - Escolha do profissional de serviço
- **Seleção de Data/Hora** - Escolha do horário disponível
- **Confirmação** - Revisão e confirmação do agendamento

### 👤 Perfil do Usuário

- **Informações pessoais** - Visualização e edição de dados
- **Configurações** - Preferências da conta
- **Histórico** - Registro de atividades

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Appointment/    # Componente de agendamento
│   ├── Background/     # Componente de fundo
│   ├── Button/         # Botões personalizados
│   ├── DateInput/      # Input de data/hora
│   └── Input/          # Campos de entrada
├── pages/              # Telas da aplicação
│   ├── Dashboard/      # Tela principal
│   ├── New/            # Fluxo de agendamento
│   ├── Profile/        # Perfil do usuário
│   ├── SignIn/         # Tela de login
│   └── SignUp/         # Tela de cadastro
├── services/           # Serviços externos
│   └── api.js         # Configuração da API
├── store/              # Gerenciamento de estado
│   ├── modules/        # Módulos do Redux
│   │   ├── auth/       # Autenticação
│   │   └── user/       # Usuário
│   └── index.js        # Configuração da store
└── routes.js           # Configuração de navegação
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
API_URL=sua_url_da_api
API_KEY=sua_chave_da_api
```

### Configuração do Expo

O arquivo `app.json` contém as configurações principais:

- **Nome**: Titon App
- **Versão**: 1.0.0
- **Orientação**: Portrait
- **Plataformas**: iOS, Android, Web

## 📱 Compatibilidade

- **iOS**: 12.0+
- **Android**: 5.0+ (API 21+)
- **Web**: Navegadores modernos

## 🧪 Testes

```bash
# Executar testes
yarn test

# Executar testes em modo watch
yarn test --watch

# Executar linting
yarn lint
```

## 📦 Scripts Disponíveis

- `yarn start` - Inicia o servidor de desenvolvimento
- `yarn android` - Executa no Android
- `yarn ios` - Executa no iOS
- `yarn web` - Executa na web
- `yarn test` - Executa os testes
- `yarn lint` - Verifica o código

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

## 👨‍💻 Desenvolvedores

- **Equipe Titon** - Desenvolvimento e manutenção

## 📞 Suporte

Para suporte e dúvidas:

- 📧 Email: suporte@titon.com
- 📱 App: Abra o aplicativo e vá em Configurações > Suporte
- 🌐 Website: [www.titon.com](https://www.titon.com)

## 🔄 Atualizações

Para manter o projeto atualizado:

```bash
# Atualizar Expo CLI
npm install -g @expo/cli@latest

# Atualizar dependências
yarn upgrade

# Verificar atualizações do Expo
expo doctor
```

---

**⭐ Se este projeto te ajudou, considere dar uma estrela!**
