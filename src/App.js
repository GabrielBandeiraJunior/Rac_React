import './app.css'
import { useState } from 'react';

 function App() {
  const [razaoSocial, setrazaoSocial] = useState("");
  const [cnpj, setcnpj] = useState("");
  const [endereco, setendereco] = useState("");
  const [numero, setnumero] = useState("");
  const [responsavel, setresponsavel] = useState("");
  const [setor, setsetor] = useState("");
  const [tecnico, settecnico] = useState("");
  const [cidade, setcidade] = useState("");
  const [horaInicio, sethoraInicio] = useState("");
  const [horaTermino, sethoraTermino] = useState("");
  const [instalacaoDeEquipamentos, setinstalacaoDeEquipamentos] = useState(false);
  const [manutencaoDeEquipamentos, setmanutencaoDeEquipamentos] = useState(false);
  const [manutencaoPreventivaContratual, setmanutencaoPreventivaContratual] = useState(false);
  

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:5000/register', {
      method: "post",
      body: JSON.stringify({
        razaoSocial, cnpj, endereco, numero, responsavel, setor, tecnico, cidade,
        horaInicio, horaTermino, instalacaoDeEquipamentos,
        manutencaoDeEquipamentos, manutencaoPreventivaContratual,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved successfully");
      setrazaoSocial("");
      setcnpj("");
      setendereco("");
      setnumero("");
      setresponsavel("");
      setsetor("");
      settecnico("");
      setcidade("");
      sethoraInicio("");
      sethoraTermino("");
      setinstalacaoDeEquipamentos(false);
      setmanutencaoDeEquipamentos(false);
      setmanutencaoPreventivaContratual(false);
      
    }
  }

  return (
    <>
    <div id="geral">
      <h1>RAC VIRTUAL</h1>
      <form onSubmit={handleOnSubmit}>
        <div id="par">
          <input type="text" placeholder="Razão Social"
            value={razaoSocial} onChange={(e) => setrazaoSocial(e.target.value)} />
          <input type="number" placeholder="CNPJ"
            value={cnpj} onChange={(e) => setcnpj(e.target.value)} />
        </div>
        <div id="par">
          <input type="text" placeholder="Endereço"
            value={endereco} onChange={(e) => setendereco(e.target.value)} />
          <input type="number" placeholder="Número"
            value={numero} onChange={(e) => setnumero(e.target.value)} />
          <input type="text" placeholder="Responsável"
            value={responsavel} onChange={(e) => setresponsavel(e.target.value)} />
          


        </div>
        <div id="par">
          <input type="text" placeholder="Setor"
            value={setor} onChange={(e) => setsetor(e.target.value)} />
          <input type="text" placeholder="Técnico"
            value={tecnico} onChange={(e) => settecnico(e.target.value)} />
        </div>
        <div id="par">
          <input type="text" placeholder="Cidade"
            value={cidade} onChange={(e) => setcidade(e.target.value)} />
          <br /><br />
          
        </div>
        <div id="par">

          <label id="hora_inicio">Hora Início</label>
            <input id="hora_inicio" type="datetime-local" placeholder="Hora Início"
            value={horaInicio} onChange={(e) => sethoraInicio(e.target.value)} /> 

          <label id="hora_termino">Hora Término</label>
            <input id="hora_termino" type="datetime-local" placeholder="Hora Término"
            value={horaTermino} onChange={(e) => sethoraTermino(e.target.value)} /> 

            
        </div>
        <br />
        <div>
          <h2> DESCRITIVO DO ATENDIMENTO</h2>
          <h3> EQUIPAMENTO</h3>
        </div>

        <div id="checkbox">
        <label id="checkbox">Instalação de Equipamentos</label>
        <input id="checkbox" type="checkbox"
          checked={instalacaoDeEquipamentos} onChange={(e) => setinstalacaoDeEquipamentos(e.target.checked)} />
        <label id="checkbox">Manutenção de Equipamentos</label>
        <input id="checkbox" type="checkbox"
          checked={manutencaoDeEquipamentos} onChange={(e) => setmanutencaoDeEquipamentos(e.target.checked)} />
        <label id="checkbox">Manutenção Preventiva Contratual</label>
        <input id="checkbox" type="checkbox"
          checked={manutencaoPreventivaContratual} onChange={(e) => setmanutencaoPreventivaContratual(e.target.checked)} />
        </div>
        <button id="enviar" type="submit">ENVIAR</button>
      </form>
    </div>
    </>
  );
}

export default App