import { useState, useEffect } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ReportForms.css";  
import HeaderForms from "./ReportComponents/HeaderForms";
import ControlDateHour from "./ReportComponents/ControlDateHour";
import ControlTurns from "./ReportComponents/ControlTurns";
import H1 from "./ReportComponents/H1";
import FileUploadForm from "./ReportComponents/FileUploadForm";
import { useNavigate } from "react-router";
import TypeContract from "./ReportComponents/TypeContract";
import ActivitiesChoice from "./ReportComponents/ActivitiesChoice";

type FormData = {
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
  typeContract: string;
  directProfissional: string;
  indirectProfissional: string;
  outsourcedProfissional: string;
  professional: string;
  nameWork: string;
  responsable: string;
  company: string;
  dateBegin: string;
  hourBegin: string;
  dateEnd: string;
  hourEnd: string;
  hourRestBegin: string;
  hourRestEnd: string;
  activitiesType: string;
  activitiesExecuted: string;
  activitiesPerCent: string;
  contracts: [], 
  activities: [],
  files: {
    image: string[];
    video: string[];
    file: string[];
};
}

const ReportForms = () => {
  const [formData, setFormData] = useState<FormData>({
    id: 0,
    status: "",
    type: "",
    morningType: "",
    morningWeather: "",
    morningWork: "",
    afternoonType: "",
    afternoonWeather: "",
    afternoonWork: "",
    nightType: "",
    nightWeather: "",
    nightWork: "",
    weatherCondition: "",
    workCondition: "",
    typeContract: "",
    directProfissional: "",
    indirectProfissional: "",
    outsourcedProfissional: "",
    professional: "",
    nameWork: "",
    responsable: "",
    company: "",
    dateBegin: "",
    hourBegin: "",
    dateEnd: "",
    hourEnd: "",
    hourRestBegin: "",
    hourRestEnd: "",
    activitiesType: "",
    activitiesExecuted: "",
    activitiesPerCent: "",
    contracts: [], 
    activities: [],
    files: {
      image: [],
      video: [],
      file: [],
    }
  });

const REPORT_STATUS_CHOICES = [
  ["Aberto", "Aberto"],
  ["Fechado", "Fechado"],
  ["Em Andamento", "Em Andamento"],
];

const TYPE_REPORT_CHOICES = [
  ["Visita", "Visita"],
  ["Acompanhamento de Obra", "Acompanhamento de Obra"],
  ["Comissionamento", "Comissionamento"],
];

const WEATHER_CONDITION_CHOICES = [
  ["Ensolarado", "Ensolarado"],
  ["Nublado", "Nublado"],
  ["Chuvoso", "Chuvoso"],
  ["Nebuloso", "Nebuloso"],
  ["Tempestuoso", "Tempestuoso"],
];

const WORK_CONDITION_CHOICES = [
  ["Praticável", "Praticável"],
  ["Parcialmente Praticável", "Parcialmente Praticável"],
  ["Impraticável", "Impraticável"],
];

const TYPE_CONTRACT_CHOICES = [
  ["Direto", "Direto"],
  ["Indireto", "Indireto"],
  ["Terceirizado", "Terceirizado"],
];

const DIRECT_PROFISSIONAL_CHOICES = [
  ["Ajudante", "Ajudante"],
  ["Bombeiro Hidráulico", "Bombeiro Hidráulico"],
  ["Eletricista", "Eletricista"],
  ["Gesseiro", "Gesseiro"],
  ["Instalador", "Instalador"],
  ["Meio Oficial", "Meio Oficial"],
  ["Mestre de Obra", "Mestre de Obra"],
  ["Pedreiro", "Pedreiro"],
  ["Pintor", "Pintor"],
  ["Servente", "Servente"],
];

const INDIRECT_PROFISSIONAL_CHOICES = [
  ["Engenheiro", "Engenheiro"],
  ["Engenheiro / TST", "Engenheiro / TST"],
  ["Estagiário", "Estagiário"],
  ["Técnica(o) de Segurança do Trabalho", "Técnica(o) de Segurança do Trabalho"],
  ["Técnico em edificações", "Técnico em edificações"],
];

const OUTSOURCED_PROFISSIONAL_CHOICES = [
  [" ", " "],
];

const COMPANY_CHOICES = [
  ["Empresa Campo", "Empresa Campo"],
  ["Empresa Campo - Terceirizada", "Empresa Campo - Terceirizada"],
];

const RESPONSABLE_CHOICES = [
  ["Acauã Ferreira", "Acauã Ferreira"],
  ["Ana Amélia", "Ana Amélia"],
  ["Externo", "Externo"],
];

const ACTIVITIES_CHOICES = [
  ["Etapa de Infra", "Etapa de Infra"],
  ["Etapa de Instalações", "Etapa de Instalações"],
  ["Etapa Final de Entrega", "Etapa Final de Entrega"],
];

const TYPE_ACTIVITIES1 = [
  ["Survey de Chegada", "Survey de Chegada"],
  ["Sondagem do Terreno", "Sondagem do Terreno"],
  ["Execução de Valetamento com Lançamento de Dutos", "Execução de Valetamento com Lançamento de Dutos"],
  ["Instalação das Caixas de Passagem de 600mm", "Instalação das Caixas de Passagem de 600mm"],
  ["Instalação das Caixas de Passagem de 800mm", "Instalação das Caixas de Passagem de 800mm"],
  ["Execução de Travessia", "Execução de Travessia"],
  ["Passagem dos eletrodutos sob a base", "Passagem dos eletrodutos sob a base"],
  ["Instalação do Anel de Aterramento", "Instalação do Anel de Aterramento"],
  ["Construção do Paralastro SW-01", "Construção do Paralastro SW-01"],
  ["Construção da Base do Sinal", "Construção da Base do Sinal"],
  ["Terraplanagem do Terreno da House", "Terraplanagem do Terreno da House"],
  ["Esquadro e Caixaria da Base da House", "Esquadro e Caixaria da Base da House"],
  ["Concretagem da Base da House", "Concretagem da Base da House"],
  ["Acabamentos Finais e Desmobilização", "Acabamentos Finais e Desmobilização"],
];

const TYPE_ACTIVITIES2 = [
  ["Instalação de Hastes de Aterramento", "Instalação de Hastes de Aterramento"],
  ["Execução de Solda Exotérmica", "Execução de Solda Exotérmica"],
  ["Medição da Resistência de Aterramento", "Medição da Resistência de Aterramento"],
  ["Aterramento das Carcaças, BEP e Gradil", "Aterramento das Carcaças, BEP e Gradil"],
  ["Lançamento dos Cabos", "Lançamento dos Cabos"],
  ["Megagem dos Cabos", "Megagem dos Cabos"],
  ["Vedação de Dutos e Caixas com Espuma", "Vedação de Dutos e Caixas com Espuma"],
  ["Ligação do Cabo de Energia no Trafo ou Padrão", "Ligação do Cabo de Energia no Trafo ou Padrão"],
  ["Ligações dos Cabos de Campo na House", "Ligações dos Cabos de Campo na House"],
  ["Ligação do Cabo de Energia no QDG", "Ligação do Cabo de Energia no QDG"],
  ["Instalação de CDV e bondeamento", "Instalação de CDV e bondeamento"],
  ["Instalação de Sinais", "Instalação de Sinais"],
  ["Desinstalação de MCH", "Desinstalação de MCH"],
  ["Instalação de MCH", "Instalação de MCH"],
  ["Ligação dos Cabos na MCH", "Ligação dos Cabos na MCH"],
  ["Pintura do Paralastro", "Pintura do Paralastro"],
  ["Pintura do Número da Máquina de Chave", "Pintura do Número da Máquina de Chave"],
  ["Fixação e Instalação do Abrigo na Base", "Fixação e Instalação do Abrigo na Base"],
  ["Retoques de Pintura no Abrigo", "Retoques de Pintura no Abrigo"],
  ["Limpeza do Abrigo", "Limpeza do Abrigo"],
];

const TYPE_ACTIVITIES3 = [
  ["Testes e Ajustes Mecânicos na MCH", "Testes e Ajustes Mecânicos na MCH"],
  ["Testes e Ajustes Elétricos na MCH", "Testes e Ajustes Elétricos na MCH"],
  ["Descomissionamento", "Descomissionamento"],
  ["Testes de Operação com o CCO", "Testes de Operação com o CCO"],
  ["Limpeza e Organização no Local", "Limpeza e Organização no Local"],
  ["Entrega Técnica", "Entrega Técnica"],
  ["Preenchimento de Termo de Entrega", "Preenchimento de Termo de Entrega"],
  ["As Built", "As Built"],
];



const getProfessionalChoices = (typeContract) => {
  switch (typeContract) {
    case "Direct":
      return DIRECT_PROFISSIONAL_CHOICES;
    case "Outsourced":
      return OUTSOURCED_PROFISSIONAL_CHOICES;
    case "Indirect":
      return INDIRECT_PROFISSIONAL_CHOICES;
    default:
      return [];
  }
};

const getActivitiesChoices = (activitiesType) => {
  switch (activitiesType) {
    case "Activities 1":
      return TYPE_ACTIVITIES1;
    case "Activities 2":
      return TYPE_ACTIVITIES2;
      case "Activities 3":
        return TYPE_ACTIVITIES3;
    default:
      return [];
  }
};


const updateFormDataWithContracts = (contracts) => {
  setFormData((prev) => ({ ...prev, contracts }));
  };
  
  const updateFormDataWithActivities = (activities) => {
  setFormData((prev) => ({ ...prev, activities }));
  };
  

  useEffect(() => {
    console.log("Fetching dropdown options...");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.contracts.length || !formData.activities.length) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    alert('Relatório enviado');
    localStorage.setItem("reportData", JSON.stringify(formData));
    alert('Aguarde, estamos gerando seu relatório...');
    setTimeout(() => {
      window.location.href = `/survey/projectReports/${formData.id}`;
    }, 100); // 100ms de atraso
};
  

  return (
    <div className="container bg-custom center">
      <H1 formData={formData} handleChange={handleChange} REPORT_STATUS_CHOICES={REPORT_STATUS_CHOICES} />
      <form onSubmit={handleSubmit}>
        <HeaderForms formData={formData} handleChange={handleChange} COMPANY_CHOICES={COMPANY_CHOICES} RESPONSABLE_CHOICES={RESPONSABLE_CHOICES} />
        <ControlDateHour formData={formData} handleChange={handleChange} />
        <ControlTurns formData={formData} handleChange={handleChange} TYPE_REPORT_CHOICES={TYPE_REPORT_CHOICES} WEATHER_CONDITION_CHOICES={WEATHER_CONDITION_CHOICES} WORK_CONDITION_CHOICES={WORK_CONDITION_CHOICES} />
        <TypeContract formData={formData} handleChange={handleChange} TYPE_CONTRACT_CHOICES={TYPE_CONTRACT_CHOICES} getProfessionalChoices={getProfessionalChoices} updateFormDataWithContracts={updateFormDataWithContracts} />
        <ActivitiesChoice formData={formData} handleChange={handleChange} ACTIVITIES_CHOICES={ACTIVITIES_CHOICES} getActivitiesChoices={getActivitiesChoices} updateFormDataWithActivities={updateFormDataWithActivities} />
        <FileUploadForm formData={formData} setFormData={setFormData} />
        
        <button type="submit" className="btn btn-primary w-100 mt-3">Enviar</button>
      </form>
    </div>
    
  );
};

export default ReportForms;