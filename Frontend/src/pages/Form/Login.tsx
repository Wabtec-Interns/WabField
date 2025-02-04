import imagem from '../../assets/Beena Vision TruckView.jpg'

const Login = () => {

  return (
    <div className="flex h-screen w-screen rounded-md bg-white">
      {/* Seção esquerda (1/3 da tela) */}
      <section 
        className="w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${imagem})` }}
      >
        {/* Conteúdo adicional pode ser adicionado aqui, se necessário */}
      </section>
    
      {/* Seção direita (2/3 da tela) */}
      <section className="w-1/2 h-screen bg-gray-900 rounded-md">
        <div className="bg-gray-200 h-full rounded-md flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-8" >WABFIELD</h2>
            <h3 className="text-1.5xl font-semibold text-gray-900 text-center mb-14">Acessar Sistema</h3>
            
            <form className="space-y-3">
              <div>
                <label className="block text-sm text-gray-900 font-medium mb-1">E-mail</label>
                <input
                  type="email"
                  placeholder="nome@empresa.com.br"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-900 font-medium mb-1">Senha</label>
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mt-2 text-center px-3 py-2 bg-red-800 text-white rounded-md hover:bg-red-600">
              <a href="http://localhost:5173/">
              Entrar
              </a>
              </div>
            </form>
            <div className="mt-6 text-center space-y-2">
              <a href="register" className="text-sm text-gray-900 hover:underline">
                Criar uma nova conta
              </a>
            </div>
            <div className="mt-2 text-center space-y-20">
              <a href="password" className="text-sm text-gray-900 hover:underline">
                Esqueceu a senha?
              </a>
              <p className="text-sm text-gray-900 ">
                Desenvolvido por <span className="font-bold text-red-800">Wabtec Interns</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login