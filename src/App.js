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
  const [customizacao, setcustomizacao] = useState(false);
  const [diagnosticoDeProjetos, setdiagnosticoDeProjetos] = useState(false);
  const [homologacaoDeInfra, sethomologacaoDeInfra] = useState(false);
  const [deslocamento, setdeslocamento] = useState(false);
  const [treinamentoOperacional, settreinamentoOperacional] = useState(false);
  const [implantacaoDeSistemas, setimplantacaoDeSistemas] = useState(false);
  const [manutencaoPreventivaContratual, setmanutencaoPreventivaContratual] = useState(false);

  const [repprintpoint, setrepprintpoint] = useState(false);
  const [repminiprint, setrepminiprint] = useState(false);
  const [repsmart, setrepsmart] = useState(false);
  const [relogiomicropoint, setrelogiomicropoint] = useState(false);
  const [relogiobiopoint, setrelogiobiopoint] = useState(false);
  const [catracamicropoint, setcatracamicropoint] = useState(false);
  const [catracabiopoint, setcatracabiopoint] = useState(false);
  const [suporteTi, setsuporteTi] = useState(false);
  const [outros, setoutros] = useState(false);
  const [nSerie, setnSerie] = useState(false);
  const [localInstalacao, setlocalInstalacao] = useState(false);
  const [observacaoProblemas, setobservacaoProblemas] = useState(false);
  const [componente, setcomponente] = useState(false);
  const [codigoComponente, setcodigoComponente] = useState(false);
  const [valorVisita, setvalorVisita] = useState(false);
  const [valorrs, setvalorrs] = useState(false);
  const [valorPecas, setvalorPecas] = useState(false);
  const [valorTotal, setvalorTotal] = useState(false);
  const [observacoes, setobservacoes] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:5000/register', {
      method: "post",
      body: JSON.stringify({
        razaoSocial, cnpj, endereco, numero, responsavel, setor, tecnico, cidade,
        horaInicio, horaTermino, instalacaoDeEquipamentos,
        manutencaoDeEquipamentos, repprintpoint,repminiprint, repsmart,
        relogiomicropoint, catracamicropoint, catracabiopoint, suporteTi,outros,
        nSerie, localInstalacao, observacaoProblemas, componente, codigoComponente,
        valorVisita, valorrs, valorPecas, valorTotal, observacoes
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
      setmanutencaoDeEquipamentos(false)
      setrepprintpoint(false);
      setrepminiprint(false);

      setrepsmart(false);
      setrelogiomicropoint(false);
      setcatracamicropoint(false);
      setcatracabiopoint(false);
      setsuporteTi(false)
      setoutros("");
      setnSerie("");
      setlocalInstalacao("");
      setobservacaoProblemas("");
      setcomponente("");
      setcodigoComponente("");
      setvalorVisita("");
      setvalorrs("");
      setvalorPecas("");
      setvalorTotal("");
      setobservacoes("");
      
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
        
        <div id="par">
        <div id="checkbox">
        <label id="checkbox">Instalação de Equipamentos</label>
        <input id="checkbox" type="checkbox"
          checked={instalacaoDeEquipamentos} onChange={(e) => setinstalacaoDeEquipamentos(e.target.checked)} />
        
        <label id="checkbox">Manutenção de Equipamentos</label>
        <input id="checkbox" type="checkbox"
          checked={manutencaoDeEquipamentos} onChange={(e) => setmanutencaoDeEquipamentos(e.target.checked)} />
        </div>
        <div id="par">
        <label id="checkbox">Customização</label>
        <input id="checkbox" type="checkbox"
          checked={customizacao} onChange={(e) => setcustomizacao(e.target.checked)} />
        
        <label id="checkbox">Diagnóstico de projetos</label>
        <input id="checkbox" type="checkbox"
          checked={diagnosticoDeProjetos} onChange={(e) => setdiagnosticoDeProjetos(e.target.checked)} />
        </div>
        <div id="par">
        <label id="checkbox">Homologação de Infra</label>
        <input id="checkbox" type="checkbox"
          checked={homologacaoDeInfra} onChange={(e) => sethomologacaoDeInfra(e.target.checked)} />
        
        <label id="checkbox">Deslocamento</label>
        <input id="checkbox" type="checkbox"
          checked={deslocamento} onChange={(e) => setdeslocamento(e.target.checked)} />
        </div>
        <div id="par">
        <label id="checkbox">Treinamento Operacional</label>
        <input id="checkbox" type="checkbox"
          checked={treinamentoOperacional} onChange={(e) => settreinamentoOperacional(e.target.checked)} />
        
        <label id="checkbox">Implantação de Sistemas</label>
        <input id="checkbox" type="checkbox"
          checked={implantacaoDeSistemas} onChange={(e) => setimplantacaoDeSistemas(e.target.checked)} />
        </div>
        
        <label id="checkbox">Manutenção Preventiva Contratual</label>
        <input id="checkbox" type="checkbox"
          checked={manutencaoPreventivaContratual} onChange={(e) => setmanutencaoPreventivaContratual(e.target.checked)} />
        
        <div>
          <h2> DESCRITIVO DO ATENDIMENTO</h2>
          <h3> EQUIPAMENTO</h3>
          
        </div>
        <h4>REP.</h4>
        <div id="par"><br/>
        <label id="checkbox">Printpoint</label>
        <input id="checkbox" type="checkbox"
          checked={repprintpoint} onChange={(e) => setrepprintpoint(e.target.checked)} />
        
        <label id="checkbox">Miniprint</label>
        <input id="checkbox" type="checkbox"
          checked={repminiprint} onChange={(e) => setrepminiprint(e.target.checked)} />
        

        <label id="checkbox">Smart</label>
        <input id="checkbox" type="checkbox"
          checked={repsmart} onChange={(e) => setrepsmart(e.target.checked)} />
        </div>
      <br/>
        <h4>RELÓGIO</h4>
        <div id="par">
        <label id="checkbox">Micropoint</label>
        <input id="checkbox" type="checkbox"
          checked={relogiomicropoint} onChange={(e) => setrelogiomicropoint(e.target.checked)} />
        
        <label id="checkbox">Biopoint</label>
        <input id="checkbox" type="checkbox"
          checked={relogiobiopoint} onChange={(e) => setrelogiobiopoint(e.target.checked)} />         
        </div>
        <br/>
        <h4>CATRACA</h4>
        <div id="par">
        <label id="checkbox">Micropoint</label>
        <input id="checkbox" type="checkbox"
          checked={catracamicropoint} onChange={(e) => setcatracamicropoint(e.target.checked)} />
        
        <label id="checkbox">Biopoint</label>
        <input id="checkbox" type="checkbox"
          checked={catracabiopoint} onChange={(e) => setcatracabiopoint(e.target.checked)} />         
        </div>
        <br/>
        <div id="par">
        <label id="checkbox">SUPORTE TI/INFORMÁTICA</label>
        <input id="checkbox" type="checkbox"
          checked={suporteTi} onChange={(e) => setsuporteTi(e.target.checked)} />   
        
        <label id="outro">Outros</label>
        <input id="outro" type="text"
          checked={outros} onChange={(e) => setoutros(e.target.checked)} />         
        </div>
        <br/>
        <div id="par">
        <input id="" type="text" placeholder="N° de Série"
          checked={nSerie} onChange={(e) => setnSerie(e.target.checked)} />         

        <input id="" type="text" placeholder="Local de Instalação"
          checked={localInstalacao} onChange={(e) => setlocalInstalacao(e.target.checked)} />         
        </div>
        <br/>
        <input id="" type="text" placeholder="Observações/Problemas Diagnósticados"
          checked={observacaoProblemas} onChange={(e) => setobservacaoProblemas(e.target.checked)} />    

        <h4>Troca de Componentes em Equipamentos</h4>
        <div id="par">
        <input id="" type="text" placeholder="Componente"
          checked={componente} onChange={(e) => setcomponente(e.target.checked)} />  
        <br/>
        <input id="" type="text" placeholder="Código Componente"
          checked={codigoComponente} onChange={(e) => setcodigoComponente(e.target.checked)} /> 
        </div>
        <div id="par">
        <input id="" type="text" placeholder="Valor Visita"
          checked={valorVisita} onChange={(e) => setvalorVisita(e.target.checked)} />         

        <input id="" type="text" placeholder="Valor R$"
          checked={valorrs} onChange={(e) => setvalorrs(e.target.checked)} />         
        </div>
        <br/>
        <div id="par">
        <input id="" type="text" placeholder="Valor Peças"
          checked={valorPecas} onChange={(e) => setvalorPecas(e.target.checked)} />         

        <input id="" type="text" placeholder="Valor Total"
          checked={valorTotal} onChange={(e) => setvalorTotal(e.target.checked)} />         
        </div>
        <br/>
        <input id="" type="text" placeholder="Observações$"
          checked={observacoes} onChange={(e) => setobservacoes(e.target.checked)} />         

          
        </div>
        <button id="enviar" type="submit">ENVIAR</button>
      </form>
    </div>
    </>
  );
}

export default App