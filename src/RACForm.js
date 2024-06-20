import React, { useState } from 'react';

const RACForm = () => {
  const [razaoSocial, setRazaoSocial] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [setor, setSetor] = useState('');
  const [tecnico, setTecnico] = useState('');
  const [cidade, setCidade] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaTermino, setHoraTermino] = useState('');
  const [instalacaoDeEquipamentos, setInstalacaoDeEquipamentos] = useState(false);
  const [manutencaoDeEquipamentos, setManutencaoDeEquipamentos] = useState(false);
  const [customizacao, setCustomizacao] = useState(false);
  const [diagnosticoDeProjetos, setDiagnosticoDeProjetos] = useState(false);
  const [homologacaoDeInfra, setHomologacaoDeInfra] = useState(false);
  const [deslocamento, setDeslocamento] = useState(false);
  const [treinamentoOperacional, setTreinamentoOperacional] = useState(false);
  const [implantacaoDeSistemas, setImplantacaoDeSistemas] = useState(false);
  const [manutencaoPreventivaContratual, setManutencaoPreventivaContratual] = useState(false);
  const [repprintpoint, setRepPrintpoint] = useState(false);
  const [repminiprint, setRepMiniprint] = useState(false);
  const [repsmart, setRepSmart] = useState(false);
  const [relogiomicropoint, setRelogioMicropoint] = useState(false);
  const [relogiobiopoint, setRelogioBiopoint] = useState(false);
  const [catracamicropoint, setCatracaMicropoint] = useState(false);
  const [catracabiopoint, setCatracaBiopoint] = useState(false);
  const [suporteTi, setSuporteTi] = useState(false);
  const [outros, setOutros] = useState('');
  const [nSerie, setNSerie] = useState('');
  const [localInstalacao, setLocalInstalacao] = useState('');
  const [observacaoProblemas, setObservacaoProblemas] = useState('');
  const [componente, setComponente] = useState('');
  const [codigoComponente, setCodigoComponente] = useState('');
  const [valorVisita, setValorVisita] = useState('');
  const [valorrs, setValorRS] = useState('');
  const [valorPecas, setValorPecas] = useState('');
  const [valorTotal, setValorTotal] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!razaoSocial || !cnpj) {
      alert('Por favor, preencha Razão Social e CNPJ.');
      return;
    }

    const data = {
      razaoSocial,
      cnpj,
      endereco,
      numero,
      responsavel,
      setor,
      tecnico,
      cidade,
      horaInicio,
      horaTermino,
      instalacaoDeEquipamentos,
      manutencaoDeEquipamentos,
      customizacao,
      diagnosticoDeProjetos,
      homologacaoDeInfra,
      deslocamento,
      treinamentoOperacional,
      implantacaoDeSistemas,
      manutencaoPreventivaContratual,
      repprintpoint,
      repminiprint,
      repsmart,
      relogiomicropoint,
      relogiobiopoint,
      catracamicropoint,
      catracabiopoint,
      suporteTi,
      outros,
      nSerie,
      localInstalacao,
      observacaoProblemas,
      componente,
      codigoComponente,
      valorVisita,
      valorrs,
      valorPecas,
      valorTotal,
      observacoes,
    };

    try {
      // Enviar dados para o servidor
      const response = await fetch('http://localhost:5000/racvirtual/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Exibir mensagem de sucesso ou falha
      if (result && result.message === 'Data saved successfully') {
        alert('Dados salvos com sucesso');
        clearForm();
      } else {
        alert('Falha ao salvar dados');
      }
    } catch (error) {
      console.error('Erro ao enviar dados para o servidor:', error);
      alert('Erro interno do servidor');
    }
  };

  // Função para limpar o formulário
  const clearForm = () => {
    setRazaoSocial('');
    setCnpj('');
    setEndereco('');
    setNumero('');
    setResponsavel('');
    setSetor('');
    setTecnico('');
    setCidade('');
    setHoraInicio('');
    setHoraTermino('');
    setInstalacaoDeEquipamentos(false);
    setManutencaoDeEquipamentos(false);
    setCustomizacao(false);
    setDiagnosticoDeProjetos(false);
    setHomologacaoDeInfra(false);
    setDeslocamento(false);
    setTreinamentoOperacional(false);
    setImplantacaoDeSistemas(false);
    setManutencaoPreventivaContratual(false);
    setRepPrintpoint(false);
    setRepMiniprint(false);
    setRepSmart(false);
    setRelogioMicropoint(false);
    setRelogioBiopoint(false);
    setCatracaMicropoint(false);
    setCatracaBiopoint(false);
    setSuporteTi(false);
    setOutros('');
    setNSerie('');
    setLocalInstalacao('');
    setObservacaoProblemas('');
    setComponente('');
    setCodigoComponente('');
    setValorVisita('');
    setValorRS('');
    setValorPecas('');
    setValorTotal('');
    setObservacoes('');
  };

  return (
    <div id="geral">
      <h1>RAC VIRTUAL</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <input type="text" placeholder="Razão Social" value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} required />
              <input type="text" placeholder="CNPJ" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
              <input type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
              <input type="text" placeholder="Responsável" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Setor" value={setor} onChange={(e) => setSetor(e.target.value)} />
              <input type="text" placeholder="Técnico" value={tecnico} onChange={(e) => setTecnico(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="hora_inicio">Hora Início</label>
              <input id="hora_inicio" type="datetime-local" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="hora_termino">Hora Término</label>
              <input id="hora_termino" type="datetime-local" value={horaTermino} onChange={(e) => setHoraTermino(e.target.value)} />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="checkbox_instalacao">Instalação de Equipamentos</label>
              <input id="checkbox_instalacao" type="checkbox" checked={instalacaoDeEquipamentos} onChange={(e) => setInstalacaoDeEquipamentos(e.target.checked)} />
              <label htmlFor="checkbox_manutencao">Manutenção de Equipamentos</label>
              <input id="checkbox_manutencao" type="checkbox" checked={manutencaoDeEquipamentos} onChange={(e) => setManutencaoDeEquipamentos(e.target.checked)} />
            </div>
            <div className="form-group">
              <label htmlFor="checkbox_customizacao">Customização</label>
              <input id="checkbox_customizacao" type="checkbox" checked={customizacao} onChange={(e) => setCustomizacao(e.target.checked)} />
              <label htmlFor="checkbox_diagnostico">Diagnóstico de Projetos</label>
              <input id="checkbox_diagnostico" type="checkbox" checked={diagnosticoDeProjetos} onChange={(e) => setDiagnosticoDeProjetos(e.target.checked)} />
            </div>
            <div className="form-group">
              <label htmlFor="checkbox_homologacao">Homologação de Infraestrutura</label>
              <input id="checkbox_homologacao" type="checkbox" checked={homologacaoDeInfra} onChange={(e) => setHomologacaoDeInfra(e.target.checked)} />
              <label htmlFor="checkbox_deslocamento">Deslocamento</label>
              <input id="checkbox_deslocamento" type="checkbox" checked={deslocamento} onChange={(e) => setDeslocamento(e.target.checked)} />
            </div>
            <div className="form-group">
              <label htmlFor="checkbox_treinamento">Treinamento Operacional</label>
              <input id="checkbox_treinamento" type="checkbox" checked={treinamentoOperacional} onChange={(e) => setTreinamentoOperacional(e.target.checked)} />
              <label htmlFor="checkbox_implantacao">Implantação de Sistemas</label>
              <input id="checkbox_implantacao" type="checkbox" checked={implantacaoDeSistemas} onChange={(e) => setImplantacaoDeSistemas(e.target.checked)} />
            </div>
            <div className="form-group">
              <label htmlFor="checkbox_manutencao_contratual">Manutenção Preventiva Contratual</label>
              <input id="checkbox_manutencao_contratual" type="checkbox" checked={manutencaoPreventivaContratual} onChange={(e) => setManutencaoPreventivaContratual(e.target.checked)} />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
                <h5>Relógio Ponto</h5>
              <label htmlFor="checkbox_repprintpoint">RepPrintpoint</label>
              <input id="checkbox_repprintpoint" type="checkbox" checked={repprintpoint} onChange={(e) => setRepPrintpoint(e.target.checked)} />
              <label htmlFor="checkbox_repminiprint">RepMiniprint</label>
              <input id="checkbox_repminiprint" type="checkbox" checked={repminiprint} onChange={(e) => setRepMiniprint(e.target.checked)} />
            </div>
            <div className="form-group">
              <label htmlFor="checkbox_repsmart">RepSmart</label>
              <input id="checkbox_repsmart" type="checkbox" checked={repsmart} onChange={(e) => setRepSmart(e.target.checked)} />
              <label htmlFor="checkbox_relogiomicropoint">Relógio Micropoint</label>
              <input id="checkbox_relogiomicropoint" type="checkbox" checked={relogiomicropoint} onChange={(e) => setRelogioMicropoint(e.target.checked)} />
            </div>
            <div className="form-group">
            <h5>Relógio Ponto</h5>
              <label htmlFor="checkbox_relogiobiopoint">Relógio Biopoint</label>
              <input id="checkbox_relogiobiopoint" type="checkbox" checked={relogiobiopoint} onChange={(e) => setRelogioBiopoint(e.target.checked)} />
              <label htmlFor="checkbox_catracamicropoint">Catraca Micropoint</label>
              <input id="checkbox_catracamicropoint" type="checkbox" checked={catracamicropoint} onChange={(e) => setCatracaMicropoint(e.target.checked)} />
            </div>
            <div className="form-group">
            <h5>Relógio Ponto</h5>
              <label htmlFor="checkbox_catracabiopoint">Catraca Biopoint</label>
              <input id="checkbox_catracabiopoint" type="checkbox" checked={catracabiopoint} onChange={(e) => setCatracaBiopoint(e.target.checked)} />
              <h5>SUPORTE TI</h5>
              <label htmlFor="checkbox_suporte_ti">Suporte TI</label>
                
              <input id="checkbox_suporte_ti" type="checkbox" checked={suporteTi} onChange={(e) => setSuporteTi(e.target.checked)} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Outros" value={outros} onChange={(e) => setOutros(e.target.value)} />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <input type="text" placeholder="Nº de Série" value={nSerie} onChange={(e) => setNSerie(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Local de Instalação" value={localInstalacao} onChange={(e) => setLocalInstalacao(e.target.value)} />
            </div>
            <div className="form-group">
              <textarea placeholder="Observações/Problemas" value={observacaoProblemas} onChange={(e) => setObservacaoProblemas(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Componente" value={componente} onChange={(e) => setComponente(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Código do Componente" value={codigoComponente} onChange={(e) => setCodigoComponente(e.target.value)} />
            </div>
            <div className="form-group">
              
              <input id="valor_visita" placeholder="Valor da Visita"   type="text" value={valorVisita} onChange={(e) => setValorVisita(e.target.value)} />
            </div>
            <div className="form-group">
              
              <input id="valor_rs" type="text" placeholder="Valor (R$)" value={valorrs} onChange={(e) => setValorRS(e.target.value)} />
            </div>
            <div className="form-group">
              
              <input id="valor_pecas" type="text" placeholder="Valor das Peças" value={valorPecas} onChange={(e) => setValorPecas(e.target.value)} />
            </div>
            <div className="form-group">
              
              <input id="valor_total" type="text" placeholder="Valor Total" value={valorTotal} onChange={(e) => setValorTotal(e.target.value)} />
            </div>
            <div className="form-group">
              <textarea placeholder="Observações" value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="form-row">
          <button type="submit">Enviar</button>
          <button type="button" onClick={clearForm}>Limpar</button>
        </div>
      </form>
    </div>
  );
};

export default RACForm;
