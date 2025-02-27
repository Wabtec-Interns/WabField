import { useState } from 'react';
import imagem from '../../assets/Beena Vision TruckView.jpg'

function Register() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [foto, setFoto] = useState(null);
    const [tipoEmpresa, setTipoEmpresa] = useState('interna');
    const [empresaInterna, setEmpresaInterna] = useState('');
    const [empresaOutra, setEmpresaOutra] = useState('');
    const [cargo, setCargo] = useState('');
    const [setor, setSetor] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
    const [supervisor, setSupervisor] = useState('');
    const [erroSenha, setErroSenha] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Validação das senhas
        if (senha !== senha2) {
            setErroSenha('As senhas não correspondem');
            return; // Interrompe o envio do formulário
        } 
        console.log({
            nome, idade, foto, tipoEmpresa,
            empresa: tipoEmpresa === 'interna' ? empresaInterna : empresaOutra,
            cargo, setor, email, senha, supervisor,
        });
    };

    return (
        <div className="w-screen h-screen bg-cover bg-center bg-fixed relative" style={{ backgroundImage: `url(${imagem})` }}>
            <div className="absolute top-5 left-1/3 -translate-x-0 -translate-y-0 bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-2xl w-full">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Formulário de Cadastro de Cliente</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-900 font-medium mb-1">Nome Completo:</label>
                            <input
                                type="text"
                                placeholder="Seu Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                                required />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-900 font-medium mb-1">Idade:</label>
                            <input
                                type="number"
                                placeholder="Idade"
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                                required />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-900 font-medium mb-1">Foto de Perfil:</label>
                        <input
                            type="file"
                            onChange={(e) => {
                                const files = e.target.files;
                                if (files && files.length > 0) {
                                    setFoto(null);
                                } else {
                                    setFoto(null);
                                }
                            }}
                            accept="image/*"
                            className="text-gray-900 w-full px-3 py-2 border rounded-md" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-900 font-medium mb-1">Tipo de Empresa:</label>
                            <select
                                value={tipoEmpresa}
                                onChange={(e) => setTipoEmpresa(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            >
                                <option value="interna">Interna</option>
                                <option value="terceirizada">Terceirizada</option>
                                <option value="externa">Externa</option>
                            </select>
                        </div>

                        {tipoEmpresa === 'interna' ? (
                            <div>
                                <label className="block text-sm text-gray-900 font-medium mb-1">Empresa Interna:</label>
                                <select
                                    value={empresaInterna}
                                    onChange={(e) => setEmpresaInterna(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                >
                                    <option value="wabtec1">Empresa 1</option>
                                    <option value="wabtec2">Empresa 2</option>
                                    <option value="wabtec3">Empresa 3</option>
                                </select>
                            </div>
                        ) : (
                            <div>
                                <label className="block text-sm text-gray-900 font-medium mb-1">Nome da Empresa:</label>
                                <input
                                    type="text"
                                    placeholder="Nome da Empresa"
                                    value={empresaOutra}
                                    onChange={(e) => setEmpresaOutra(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required />
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-900 font-medium mb-1">Cargo do Funcionário:</label>
                            <input
                                type="text"
                                placeholder="Cargo"
                                value={cargo}
                                onChange={(e) => setCargo(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                                required />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-900 font-medium mb-1">Setor Pertencente:</label>
                            <input
                                type="text"
                                placeholder="Setor"
                                value={setor}
                                onChange={(e) => setSetor(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                                required />
                        </div>
                    </div>
                    <div>
                            <label className="block text-sm text-gray-900 font-medium mb-1">E-mail:</label>
                            <input
                                type="email"
                                placeholder="nome@empresa.com.br"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                                required />                        
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-900 font-medium mb-1">Senha:</label>
                            <input
                                type="password"
                                placeholder="Digite sua Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                                required />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-900 font-medium mb-1">Confirme a Senha:</label>
                            <input
                                type="password"
                                placeholder="Confirme a Senha"
                                value={senha2}
                                onChange={(e) => setSenha2(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                                required />
                                {/* Exibindo mensagem de erro, caso as senhas sejam diferentes */}
                        {erroSenha && <p className="text-red-500 mt-1">{erroSenha}</p>}
                        </div>
                    </div>
                        <div>
                            <label className="block text-sm text-gray-900 font-medium mb-1">Supervisor Direto (se houver):</label>
                            <input
                                type="text"
                                placeholder="Nome do Supervisor"
                                value={supervisor}
                                onChange={(e) => setSupervisor(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md" />
                        </div>

                        <button type="submit" className="w-full mt-2 px-3 py-2 bg-red-800 text-white rounded-md hover:bg-red-600">
                        Cadastrar
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <a href="login" className="text-sm text-gray-900 hover:underline">
                        Já tem uma conta? Faça login
                    </a>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-900">
                        Desenvolvido por <span className="font-bold text-red-800">Wabtec Interns</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
