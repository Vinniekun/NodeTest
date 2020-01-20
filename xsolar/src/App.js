import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App(){

    //Estados
    const [clients, setClients] = useState([]);

    const [ nome, setNome ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ cep, setCep ] = useState('');
    const [ cidade, setCidade ] = useState('');
    const [ estado, setEstado ] = useState('');
    const [ bairro, setBairro ] = useState('');
    const [ rua, setRua ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ complemento, setComplemento ] = useState('');
    const [ tipo, setTipo ] = useState('');
    const [ end_secundario, setEndSecundario ] = useState('');

    //Acao do submit do formulario
    useEffect(() => {
        console.log("chamada");
    
    }, []);

    useEffect(() => {
        async function loadClients() {
            const response = await api.get('/');
            setClients(response.data);
        }
        loadClients();
    }, []);

    async function handleAddClient(e) {
        //Previne que a tela de um refresh, o comportamento padrao
        e.preventDefault();

        const response = await api.post('/addcliente', {
            nome,
            cpf,
            telefone,
            email,
            cep,
            cidade,
            estado,
            bairro,
            rua,
            numero,
            complemento,
            tipo,
            end_secundario
        });

        setNome('');
        setCpf('');
        setTelefone('');
        setEmail('');
        setCep('');
        setCidade('');
        setEstado('');
        setBairro('');
        setRua('');
        setNumero('');
        setComplemento('');
        setTipo('');
        setEndSecundario('');

        //...clients = carrega todos os que ja tem e adiciona o novo (response.data)
        setClients([...clients, response.data]);
    }

    

    return(        
        <div id="app">
            <aside>
                <h1><center>X Solar</center></h1>
                <h2>Bem Vindo, João</h2>
                <strong>Cadastro de clientes:</strong>
                <form onSubmit={handleAddClient}>
                    <div className="input-block">
                        <label htmlFor="nome">Nome</label>
                        <input
                            name="nome" 
                            id="nome" 
                            required
                            value={nome}
                            onChange={e => setNome(e.target.value)}/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="cpf">CPF</label>
                        <input name="cpf" id="cpf" value={cpf} onChange={e => setCpf(e.target.value)}required/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="telefone">Telefone</label>
                        <input name="telefone" id="telefone" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="email">E-mail</label>
                        <input name="email" id="email" value={email} onChange={e => setEmail(e.target.value)}required/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="cep">CEP</label>
                        <input name="cep" id="cep" value={cep} onChange={e => setCep(e.target.value)} default="89874000"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="cidade">Cidade</label>
                        <input name="cidade" id="cidade" value={cidade} onChange={e => setCidade(e.target.value)} default="Chapeco"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="estado">Estado</label>
                        <input name="estado" id="estado" value={estado} onChange={e => setEstado(e.target.value)} default="Santa Catarina"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="bairro">Bairro</label>
                        <input name="bairro" id="bairro" value={bairro} onChange={e => setBairro(e.target.value)} default="Centro"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="rua">Rua</label>
                        <input name="rua" id="rua" value={rua} onChange={e => setRua(e.target.value)} default="Nereu Ramos"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="numero">Número</label>
                        <input name="numero" id="numero" value={numero} onChange={e => setNumero(e.target.value)} default="123"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="complemento">Complemento</label>
                        <input name="complemento" id="complemento" value={complemento} onChange={e => setComplemento(e.target.value)} default="Casa"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="tipo">Tipo</label>
                        <input name="tipo" id="tipo"value={tipo} onChange={e => setTipo(e.target.value)} default="Residencial"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="end_secundario">Endereço secundario</label>
                        <input name="end_secundario" id="end_secundario" value={end_secundario} onChange={e => setEndSecundario(e.target.value)} default="nenhum end secundario"/>
                    </div>
                    <button type="submit">Salvar</button>
                </form>
                
            </aside>

            <main>
                <ul>

                    {clients.map( client => (
                        <li key={client._id} className="user-item">
                            <header>
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt={client.nome}/>
                                <div className="user-info">
                                    <strong>{client.nome}</strong>
                                    <span>{client.cidade} - {client.estado}</span>
                                </div>
                            </header>
                        <p>{client.cpf}, {client.telefone}, {client.cep}, {client.bairro}</p>
                        <p>{client.rua}, {client.numero}, {client.complemento}, {client.tipo}, {client.end_secundario}</p>
                        <a href={client.email}>{client.email}</a>
                        <p>
                            <button type="submit" className="edit-button">Editar</button>
                            <button type="submit" className="delete-button">Deletar</button>
                        </p>
                        
                    </li>
                    ))}

                    

                    
                </ul>
            </main>
        </div>
    );

}

export default App;