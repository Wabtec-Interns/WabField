import { useState } from 'react';
import imagem from '../../assets/Beena Vision TruckView.jpg';

function Password() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
    const [erroSenha, setErroSenha] = useState(''); // Estado para exibir mensagem de erro

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (senha !== senha2) {
            setErroSenha('As senhas não correspondem'); // Define a mensagem de erro
            return; // Impede o envio do formulário
        }

        console.log({
            email, senha
        });

        // Aqui você pode adicionar a lógica para enviar os dados para o servidor,
        // já que as senhas são iguais.
        setErroSenha(''); // Limpa a mensagem de erro se as senhas corresponderem.
    };

    return (
        <div className="w-screen h-screen bg-cover bg-center bg-fixed relative" style={{ backgroundImage: `url(${imagem})` }}>
            <div className="absolute top-5 left-1/3 -translate-x-0 -translate-y-0 bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-2xl w-full">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Esqueceu sua Senha?</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-900 font-medium mb-1">E-mail:</label>
                        <input
                            type="email"
                            placeholder="nome@empresa.com.br"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-900 font-medium mb-1">Nova Senha:</label>
                        <input
                            type="password"
                            placeholder="Digite sua Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-900 font-medium mb-1">Confirmação de Senha:</label>
                        <input
                            type="password"
                            placeholder="Confirme a Senha"
                            value={senha2}
                            onChange={(e) => setSenha2(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                        {erroSenha && <p className="text-red-500 mt-1">{erroSenha}</p>} {/* Exibe a mensagem de erro */}
                    </div>

                    <button type="submit" className="w-full mt-2 px-3 py-2 bg-red-800 text-white rounded-md hover:bg-red-600">
                        Recuperar Senha
                    </button>

                </form>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-900">
                        Desenvolvido por <span className="font-bold text-red-800">Wabtec Interns</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Password;