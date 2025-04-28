import React from 'react'
import  wabtecWhiteLogo  from '../../assets/WAB.D.svg'


interface ReportData {
  id: number;
  status: string;
  type: string;
  morningType: string;
  morningWeather: string;
  morningWork: string;
  afternoonType: string;
  afternoonWeather: string;
  afternoonWork: string;
  nightType: string;
  nightWeather: string;
  nightWork: string;
  weatherCondition: string;
  workCondition: string;
  nameWork: string;
  responsable: string;
  company: string;
  dateBegin: string;
  hourBegin: string;
  dateEnd: string;
  hourEnd: string;
  hourRestBegin: string;
  hourRestEnd: string;
  activitiesType?: string;
  activitiesExecuted?: string;
  activitiesPerCent?: string;
  contracts?: Array<{typeContract: string, professional: string, quantity: string}>;
  activities?: Array<{activitiesType: string, activitiesExecuted: string, activitiesPerCent: string}>;
}

const ReportDetailedView: React.FC = () => {
  const data = JSON.parse(localStorage.getItem('reportData') || '{}') as ReportData;

  const REPORT_STATUS_CHOICES: [string,string][] = [
    ["Open", "Aberto"],
    ["Closed", "Fechado"],
    ["In Progress", "Em Andamento"],
  ];
  
  const TYPE_REPORT_CHOICES: [string,string][] = [
    ["Survey", "Visita"],
    ["Project Monitoring", "Acompanhamento de Obra"],
    ["Commissioning", "Comissionamento"],
  ];
  
  const WEATHER_CONDITION_CHOICES: [string,string][] = [
    ["Sunny", "Ensolarado"],
    ["Cloudy", "Nublado"],
    ["Rainy", "Chuvoso"],
    ["Foggy", "Nebuloso"],
    ["Stormy", "Tempestuoso"],
  ];
  
  const WORK_CONDITION_CHOICES: [string,string][] = [
    ["Practicable", "Praticável"],
    ["Partially Practicable", "Parcialmente Praticável"],
    ["Unpracticable", "Impraticável"],
  ];
  
  const TYPE_CONTRACT_CHOICES: [string,string][] = [
    ["Direct", "Direto"],
    ["Indirect", "Indireto"],
    ["Outsourced", "Terceirizado"]
  ];
  
  const DIRECT_PROFISSIONAL_CHOICES: [string,string][] = [
    ["Helper", "Ajudante"],
    ["Plumber", "Bombeiro Hidráulico"],
    ["Electrician", "Eletricista"],
    ["Plasterer", "Gesseiro"],
    ["Installer", "Instalador"],
    ["Half-Official", "Meio Oficial"],
    ["Master Build", "Mestre de Obra"],
    ["Mason", "Pedreiro"],
    ["Painter", "Pintor"],
    ["Servant", "Servente"],
  
  ];
  
  const INDIRECT_PROFISSIONAL_CHOICES: [string,string][] = [
    ["Engineer", "Engenheiro"],
    ["Engineer / TST", "Engenheiro / TST"],
    ["Intern", "Estagiário"],
    ["Technical of Work Security", "Técnica(o) de Segurança do Trabalho"],
    ["Technical of Building", "Técnico em edificações"],
  ];
  
  const OUTSOURCED_PROFISSIONAL_CHOICES: [string,string][] = [
    [" ", " "],
  ];
  
  const ACTIVITIES_CHOICES: [string,string][] = [
    ["Activities 1", "Etapa de Infra"],
    ["Activities 2", "Etapa de Instalações"],
    ["Activities 3", "Etapa Final de Entrega"],
  ];
  
  const TYPE_ACTIVITIES1: [string,string][] = [
    ["arrival_survey", "Survey de Chegada"],
    ["terrain_survey", "Sondagem do Terreno"],
    ["trenching_execution", "Execução de Valetamento com Lançamento de Dutos"],
    ["installation_boxes_600mm", "Instalação das Caixas de Passagem de 600mm"],
    ["installation_boxes_800mm", "Instalação das Caixas de Passagem de 800mm"],
    ["crossing_execution", "Execução de Travessia"],
    ["ducts_passing_under_base", "Passagem dos eletrodutos sob a base"],
    ["grounding_ring_installation", "Instalação do Anel de Aterramento"],
    ["sw01_ballast_construction", "Construção do Paralastro SW-01"],
    ["signal_base_construction", "Construção da Base do Sinal"],
    ["house_terrain_earthwork", "Terraplanagem do Terreno da House"],
    ["house_base_squaring_formwork", "Esquadro e Caixaria da Base da House"],
    ["house_base_concreting", "Concretagem da Base da House"],
    ["final_finishes_demobilization", "Acabamentos Finais e Desmobilização"]
  ];
  
  const TYPE_ACTIVITIES2: [string,string][] = [
    ["ground_rod_installation", "Instalação de Hastes de Aterramento"],
    ["exothermic_welding_execution", "Execução de Solda Exotérmica"],
    ["ground_resistance_measurement", "Medição da Resistência de Aterramento"],
    ["grounding_casings_bep_fence", "Aterramento das Carcaças, BEP e Gradil"],
    ["cable_laying", "Lançamento dos Cabos"],
    ["cable_megging", "Megagem dos Cabos"],
    ["ducts_boxes_sealing", "Vedação de Dutos e Caixas com Espuma"],
    ["power_cable_connection_trafo", "Ligação do Cabo de Energia no Trafo ou Padrão"],
    ["field_cables_connection_house", "Ligações dos Cabos de Campo na House"],
    ["power_cable_connection_qdg", "Ligação do Cabo de Energia no QDG"],
    ["cdv_installation_bonding", "Instalação de CDV e bondeamento"],
    ["signal_installation", "Instalação de Sinais"],
    ["mch_uninstallation", "Desinstalação de MCH"],
    ["mch_installation", "Instalação de MCH"],
    ["cable_connection_mch", "Ligação dos Cabos na MCH"],
    ["ballast_painting", "Pintura do Paralastro"],
    ["machine_key_number_painting", "Pintura do Número da Máquina de Chave"],
    ["shelter_fixation_installation", "Fixação e Instalação do Abrigo na Base"],
    ["shelter_paint_touchups", "Retoques de Pintura no Abrigo"],
    ["shelter_cleaning", "Limpeza do Abrigo"]
  ];
  
  const TYPE_ACTIVITIES3: [string,string][] = [
    ["mechanical_tests_adjustments_mch", "Testes e Ajustes Mecânicos na MCH"],
    ["electrical_tests_adjustments_mch", "Testes e Ajustes Elétricos na MCH"],
    ["decommissioning", "Descomissionamento"],
    ["operation_tests_cco", "Testes de Operação com o CCO"],
    ["cleaning_organization_site", "Limpeza e Organização no Local"],
    ["technical_delivery", "Entrega Técnica"],
    ["delivery_term_filling", "Preenchimento de Termo de Entrega"],
    ["as_built", "As Built"]
  ];

 const getPortugueseLabel = (choices: [string, string][], key: string) => {
    const found = choices.find(([english]) => english === key);
    return found ? found[1] : key;
 }

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <header className="bg-red-600 text-white p-4 mb-4 rounded flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Relatório Detalhado</h1>
          <div className="mt-2">
            <span className="mr-4">
              Status: {""}
              {getPortugueseLabel(REPORT_STATUS_CHOICES, data.status)}
            </span>
            <span className="mr-4">
              Tipo de Relatório: {" "}
              {getPortugueseLabel(TYPE_REPORT_CHOICES, data.type)}
              </span>
          </div>
          <div className="mt-2">
            <p>Obra: {data.nameWork} - Responsável: {data.responsable}</p>
          </div>
        </div>
        {/* Logo da empresa contratada - mantenha o elemento inalterado */}
        <div>
          <img src={wabtecWhiteLogo} alt="Logo da Empresa" className="h-12 w-auto" />
        </div>

         {/* Linha de datas */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded p-3">
            <h3 className="font-semibold">Data Início</h3>
            <p>Data: {data.dateBegin}</p>
            <p>Hora: {data.hourBegin}</p>
          </div>
          <div className="border border-gray-200 rounded p-3">
            <h3 className="font-semibold">Data Fim</h3>
            <p>Data: {data.dateEnd}</p>
            <p>Hora: {data.hourEnd}</p>
          </div>
        </div>
      </header>

      <main className="bg-white p-4 rounded shadow space-y-6">
        {/* Períodos (3 cards lado a lado) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded p-3">
            <h3 className="font-semibold">Manhã</h3>
            <p>
              Tipo: {""}
              {getPortugueseLabel(TYPE_REPORT_CHOICES, data.morningType)}
              
            </p>
            <p>
              Tempo: {''}
              {getPortugueseLabel(WEATHER_CONDITION_CHOICES, data.morningWeather)}
            </p>
            <p>
              Trabalho: {""}
              {getPortugueseLabel(WORK_CONDITION_CHOICES, data.morningWork)}
            </p>
          </div>
          <div className="border border-gray-200 rounded p-3">
            <h3 className="font-semibold">Tarde</h3>
            <p>
              Tipo: {""}
              {getPortugueseLabel(TYPE_REPORT_CHOICES, data.afternoonType)}
            </p>
            <p>
              Tempo: {""}
              {getPortugueseLabel(WEATHER_CONDITION_CHOICES, data.afternoonWeather)}
            </p>
            <p>
              Trabalho: {""}
              {getPortugueseLabel(WORK_CONDITION_CHOICES, data.afternoonWork)}
            </p>
          </div>
          <div className="border border-gray-200 rounded p-3">
            <h3 className="font-semibold">Noite</h3>
            <p>
              Tipo: {""}
              {getPortugueseLabel(TYPE_REPORT_CHOICES, data.nightType)}
            </p>
            <p>
              Tempo: {""}
              {getPortugueseLabel(WEATHER_CONDITION_CHOICES, data.nightWeather)}
            </p>
            <p>
              Trabalho: {""}
              {getPortugueseLabel(WORK_CONDITION_CHOICES, data.nightWork)}
              </p>
          </div>
        </div>

        {/* Intervalo */}
          {/* Intervalo dividido em dois cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded p-3">
            <h3 className="font-semibold">Início do Intervalo</h3>
            <p>{data.hourRestBegin}</p>
          </div>
          <div className="border border-gray-200 rounded p-3">
            <h3 className="font-semibold">Fim do Intervalo</h3>
            <p>{data.hourRestEnd}</p>
          </div>
        </div>

        {/* Contratação e Profissional */}
      {data.contracts && data.contracts.length > 0 && (
        <div className="border border-gray-200 rounded p-3">
          <h2 className="text-lg font-semibold">Contratação e Profissional</h2>
          {data.contracts.map((contract, index) => (
            <div key={index} className="mb-2">
              <p>
                Tipo de Contrato: {' '}
                {getPortugueseLabel(TYPE_CONTRACT_CHOICES, contract.typeContract)}
              </p>
              <p>
                Profissional: {" "}
                {contract.typeContract === "Direct" ? getPortugueseLabel(DIRECT_PROFISSIONAL_CHOICES, contract.professional) : 
                contract.typeContract === "Indirect" ? getPortugueseLabel(INDIRECT_PROFISSIONAL_CHOICES, contract.professional) :
                contract.typeContract === "Outsourced" ? getPortugueseLabel(OUTSOURCED_PROFISSIONAL_CHOICES, contract.professional) :
                contract.professional}
              </p>
              <p>Quantidade: {contract.quantity}</p>
            </div>
          ))}
        </div>
      )}

      {/* Atividades realizadas */}
      {data.activities && data.activities.length > 0 && (
        <div className="border border-gray-200 rounded p-3">
          <h2 className="text-lg font-semibold">Atividades realizadas</h2>
          {data.activities.map((activity, index) => (
            <div key={index} className="mb-2">
              <p>
                Atividade - Tipo: {""}
                {getPortugueseLabel(ACTIVITIES_CHOICES, activity.activitiesType)}
              </p>
              {activity.activitiesExecuted && (
                <p>
                  Atividade - Executadas: {""}
                  {activity.activitiesType === "Activities 1" ? getPortugueseLabel(TYPE_ACTIVITIES1, activity.activitiesExecuted.join(',')) :
                  activity.activitiesType === "Activities 2" ? getPortugueseLabel(TYPE_ACTIVITIES2, activity.activitiesExecuted.join(',')) :
                  activity.activitiesType === "Activities 3" ? getPortugueseLabel(TYPE_ACTIVITIES3, activity.activitiesExecuted.join(',')) :
                  activity.activitiesExecuted.join(',')}
                </p>
              )}
              {activity.activitiesPerCent && (
                <p>Atividade - Percentual: {activity.activitiesPerCent.join(', ')}%</p>
              )}
            </div>
          ))}
        </div>
      )}
      </main>
    </div>
  );
};

export default ReportDetailedView;