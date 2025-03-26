import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getValueByDataKey } from "recharts/types/util/ChartUtils";
import { Label } from "recharts";
import "./ReportForms.css";  
import HeaderForms from "./ReportComponents/HeaderForms";
import ControlDateHour from "./ReportComponents/ControlDateHour";
import ControlTurns from "./ReportComponents/ControlTurns";
import TypeContract from "./ReportComponents/TypeContract"; 
import H1 from "./ReportComponents/H1";
import InputMask from 'react-input-mask'; 
import { useNavigate } from "react-router";

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
};

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
  });

  useEffect(() => {
    console.log("Fetching dropdown options...");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const getProfessionalChoices = () => {
    switch (formData.typeContract) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //Aqui vai ficar a conexão com a api, teoricamente está pronto a conexão e vou chamar a api
    //passando informações daqui para a api, na teoria vou chamar o obj
    //chamado "", formData.NomeDoCampo e isso joga os dados no back
    console.log("Apertei o botão e funcionou", formData);
    alert('Relatório enviado');
    navigate(`/survey/projectReports/${formData.id}`, {state: {formData}});
  };

  return (


    <div className="container mt-0 text-light bg-custom center rounded" style={{ maxWidth: "1500px"}}>

      <H1 formData={formData} handleChange={handleChange} REPORT_STATUS_CHOICES={REPORT_STATUS_CHOICES}/>

      <form onSubmit={handleSubmit}>
        
      <HeaderForms formData={formData} handleChange={handleChange} COMPANY_CHOICES={COMPANY_CHOICES} />
      <ControlDateHour formData={formData} handleChange={handleChange} />
      <ControlTurns formData={formData} handleChange={handleChange} TYPE_REPORT_CHOICES={TYPE_REPORT_CHOICES} WEATHER_CONDITION_CHOICES={WEATHER_CONDITION_CHOICES} WORK_CONDITION_CHOICES={WORK_CONDITION_CHOICES} />
      <TypeContract formData={formData} handleChange={handleChange} TYPE_CONTRACT_CHOICES={TYPE_CONTRACT_CHOICES} getProfessionalChoices={getProfessionalChoices}/>
  

      <button type="submit" className="btn btn-primary w-100 mt-3">
          Enviar
        </button>
      </form>
    </div>
    
  );
};

//colocar a regra para tornar 1 das 3 div sobre turno obrigatórios* melhoria 1 
export default ReportForms;