# App-Agenda
Este aplicativo é uma simples aplicação web desenvolvida para gerenciar uma lista de contatos. Ele oferece as seguintes funcionalidades:

O aplicativo possui um formulário onde o usuário pode inserir informações de contato, incluindo nome, telefone e e-mail.

Validação de Entrada: Existem funções para validar os dados inseridos no formulário, incluindo validação do nome (que não pode estar vazio, deve conter apenas letras, espaços e hífens, não pode começar com um espaço e não pode conter espaços consecutivos) e validação do e-mail (que deve estar em um formato válido).

Adição de Contatos: Quando o usuário preenche corretamente o formulário e pressiona o botão "Place Order", os detalhes do contato são adicionados às listas nameList, fone e email.

Exibição de Contatos na Tabela: Depois que um contato é adicionado com sucesso, a tabela de contatos é atualizada para exibir os contatos registrados. Cada contato é exibido como uma linha na tabela, mostrando o nome, telefone e e-mail.

Feedback Visual: O botão "Place Order" possui classes CSS que alteram sua aparência para fornecer feedback visual ao usuário, indicando quando um registro está sendo processado ("placing"), quando o registro foi concluído com sucesso ("done") e quando o botão está pronto para ser usado novamente ("default").

Prevenção de Múltiplos Envios: Um mecanismo é implementado para evitar que o usuário envie múltiplos registros enquanto o aplicativo está processando um registro anterior. Isso é feito definindo a variável isAnimating para evitar múltiplos envios durante a animação do botão.
