#### _Backend Django - Propósito_

- O propósito deste notebook é servir como um guia para a criação de uma API RESTful utilizando Django e Django Rest Framework, onde o backend deve estar a cargo de gestão de relatórios de campo ferroviário definidos por diferentes áreas, como Subdiv, pessoal de campo, etc.

- O backend também tem responsabilidade de gerenciar usuários, onde poderá ter a possibilidade de usuários internos da empresa(Wabtec e GE) e usuários externos(Cliente).

- O backend deve ser capaz de gerar relatórios em PDF e serem baixados pelos usuários, ou exportar relatórios em PDF para um diretório específico.

**_Orientações para desenvolvimento:_**

- O backend deve ser desenvolvido utilizando Django e Django Rest Framework.

- todo o código deve ser versionado no GitHub e gitlab.

- Temos um environment de desenvolvimento chamado `development`. Nele, o projeto irá rodar em um ambiente virtual python, com Django e Django Rest Framework instalados, então, o desenvolvedor deve se preocupar apenas com a lógica do projeto. Para utilizar o ambiente de desenvolvimento, basta rodar o comando `development/Scripts/Activate`.

- Deve-se utilizar o python do ambiente de desenvolvimento para desenvolver o projeto, assim todas as libs necessárias já estarão instaladas e funcionando corretamente.

- Após toda mudança no código, o desenvolvedor deve rodar o script `python manage.py makemigrations` e logo após `python manage.py migrate` para confirmar as mudanças.

- Para rodar o projeto, basta rodar o comando `python manage.py runserver`.