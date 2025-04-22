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
};

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
  });

const REPORT_STATUS_CHOICES = [
  ["Open", "Aberto"],
  ["Closed", "Fechado"],
  ["In Progress", "Em Andamento"],
];

const TYPE_REPORT_CHOICES = [
  ["Survey", "Visita"],
  ["Project Monitoring", "Acompanhamento de Obra"],
  ["Commissioning", "Comissionamento"],
];

const WEATHER_CONDITION_CHOICES = [
  ["Sunny", "Ensolarado"],
  ["Cloudy", "Nublado"],
  ["Rainy", "Chuvoso"],
  ["Foggy", "Nebuloso"],
  ["Stormy", "Tempestuoso"],
];

const WORK_CONDITION_CHOICES = [
  ["Practicable", "Praticável"],
  ["Partially Practicable", "Parcialmente Praticável"],
  ["Unpracticable", "Impraticável"],
];

const TYPE_CONTRACT_CHOICES = [
  ["Direct", "Direto"],
  ["Indirect", "Indireto"],
  ["Outsourced", "Terceirizado"]
];

const DIRECT_PROFISSIONAL_CHOICES = [
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

const INDIRECT_PROFISSIONAL_CHOICES = [
  ["Engineer", "Engenheiro"],
  ["Engineer / TST", "Engenheiro / TST"],
  ["Intern", "Estagiário"],
  ["Technical of Work Security", "Técnica(o) de Segurança do Trabalho"],
  ["Technical of Building", "Técnico em edificações"],
];

const OUTSOURCED_PROFISSIONAL_CHOICES = [
  [" ", " "],
];

const COMPANY_CHOICES = [
  ["Company 1", "Empresa 1"],
  ["Company 2", "Empresa 2"],
];

const RESPONSABLE_CHOICES = [
  ["Acauã Ferreira", "Acauã Ferreira"],
  ["Ana Amélia", "Ana Amélia"],
  ["External", "Externo"],
];

const ACTIVITIES_CHOICES = [
  ["Activities 1", "Etapa de Infra"],
  ["Activities 2", "Etapa de Instalações"],
  ["Activities 3", "Etapa Final de Entrega"],
];

const TYPE_ACTIVITIES1 = [
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

const TYPE_ACTIVITIES2 = [
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

const TYPE_ACTIVITIES3 = [
  ["mechanical_tests_adjustments_mch", "Testes e Ajustes Mecânicos na MCH"],
  ["electrical_tests_adjustments_mch", "Testes e Ajustes Elétricos na MCH"],
  ["decommissioning", "Descomissionamento"],
  ["operation_tests_cco", "Testes de Operação com o CCO"],
  ["cleaning_organization_site", "Limpeza e Organização no Local"],
  ["technical_delivery", "Entrega Técnica"],
  ["delivery_term_filling", "Preenchimento de Termo de Entrega"],
  ["as_built", "As Built"]
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
        <FileUploadForm />
        
        <button type="submit" className="btn btn-primary w-100 mt-3">Enviar</button>
      </form>
    </div>
    
  );
};

export default ReportForms;