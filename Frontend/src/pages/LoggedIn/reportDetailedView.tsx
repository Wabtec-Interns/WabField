import React from 'react'
import  wabtecWhiteLogo  from '../../assets/WAB.D.svg'
import { ReportData } from '@/interfaces/IreportData';
import { REPORT_STATUS_CHOICES, TYPE_REPORT_CHOICES, WEATHER_CONDITION_CHOICES, WORK_CONDITION_CHOICES, TYPE_CONTRACT_CHOICES, DIRECT_PROFISSIONAL_CHOICES, INDIRECT_PROFISSIONAL_CHOICES, OUTSOURCED_PROFISSIONAL_CHOICES, ACTIVITIES_CHOICES, TYPE_ACTIVITIES1, TYPE_ACTIVITIES2, TYPE_ACTIVITIES3 } from '@/interfaces/IReportChoices';
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver'

const ReportDetailedView: React.FC = () => {
  const data = JSON.parse(localStorage.getItem('reportData') || '{}') as ReportData;

 const getPortugueseLabel = (choices: [string, string][], key: string) => {
    const found = choices.find(([english]) => english === key);
    return found ? found[1] : key;
 }

 const exportToExcel = () => {
    const exportData = [
      { Campo: "Status", Valor: getPortugueseLabel(REPORT_STATUS_CHOICES, data.status) },
      { Campo: "Tipo de Relatório", Valor: getPortugueseLabel(TYPE_REPORT_CHOICES, data.type) },
      { Campo: "Obra", Valor: data.nameWork },
      { Campo: "Responsável", Valor: data.responsable },
      { Campo: "Data Início", Valor: data.dateBegin },
      { Campo: "Hora Início", Valor: data.hourBegin },
      { Campo: "Data Fim", Valor: data.dateEnd },
      { Campo: "Hora Fim", Valor: data.hourEnd },
      { Campo: "Hora Início do Intervalo", Valor: data.hourRestBegin },
      { Campo: "Hora Fim do Intervalo", Valor: data.hourRestEnd },
      
    ]

    if(data.contracts && data.contracts.length > 0) {
      data.contracts.forEach((contract, index) => {
        exportData.push({
          Campo: `Contrato ${index + 1} - Tipo de Contrato`,
          Valor: getPortugueseLabel(TYPE_CONTRACT_CHOICES, contract.typeContract)
        });
        exportData.push({
          Campo: `Contrato ${index + 1} - Profissional`,
          Valor: contract.typeContract === "Direct" ? getPortugueseLabel(DIRECT_PROFISSIONAL_CHOICES, contract.professional)
                  : contract.typeContract === "Indirect" ? getPortugueseLabel(INDIRECT_PROFISSIONAL_CHOICES, contract.professional)
                  : contract.typeContract === "Outsourced" ? getPortugueseLabel(OUTSOURCED_PROFISSIONAL_CHOICES, contract.professional)
                  : contract.professional
        });
        exportData.push({
          Campo: `Contrato ${index + 1} - Quantidade`,
          Valor: contract.quantity
        });
      });
    }

    // Para atividades, pode-se montar também os dados individualmente:
    if(data.activities && data.activities.length > 0) {
      data.activities.forEach((activity, index) => {
        exportData.push({
          Campo: `Atividade ${index + 1} - Tipo`,
          Valor: getPortugueseLabel(ACTIVITIES_CHOICES, activity.activitiesType)
        });
        if(activity.activitiesExecuted) {
          // Supondo que seja array (senão, use split(','))
          const executadas = Array.isArray(activity.activitiesExecuted)
            ? activity.activitiesExecuted.map((exc) =>
                activity.activitiesType === "Activities 1"
                  ? getPortugueseLabel(TYPE_ACTIVITIES1, exc)
                  : activity.activitiesType === "Activities 2"
                  ? getPortugueseLabel(TYPE_ACTIVITIES2, exc)
                  : activity.activitiesType === "Activities 3"
                  ? getPortugueseLabel(TYPE_ACTIVITIES3, exc)
                  : exc
              ).join(", ")
            : activity.activitiesExecuted;
          exportData.push({
            Campo: `Atividade ${index + 1} - Executadas`,
            Valor: executadas
          });
        }
        if(activity.activitiesPerCent) {
          const perc = Array.isArray(activity.activitiesPerCent)
            ? activity.activitiesPerCent.join(", ") + "%"
            : activity.activitiesPerCent;
          exportData.push({
            Campo: `Atividade ${index + 1} - Percentual`,
            Valor: perc
          });
        }
      });
    }

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Relatório Detalhado");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(dataBlob, "relatorio_detalhado.xlsx");
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

      {/* Botão para exportar */}
      <div className="mb-4 flex justify-end">
        <button
          onClick={exportToExcel}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Exportar para Excel
        </button>
      </div>

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
                <div>
                  <p>Atividade - Executadas:</p>
                  <ul className="list-disc ml-5">
                    {activity.activitiesExecuted.map((exc, idx) => (
                      <li key={idx}>
                        {activity.activitiesType === "Activities 1"
                          ? getPortugueseLabel(TYPE_ACTIVITIES1, exc)
                          : activity.activitiesType === "Activities 2"
                          ? getPortugueseLabel(TYPE_ACTIVITIES2, exc)
                          : activity.activitiesType === "Activities 3"
                          ? getPortugueseLabel(TYPE_ACTIVITIES3, exc)
                          : exc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activity.activitiesPerCent && (
                <p>
                  Atividade - Percentual:{" "}
                  {activity.activitiesPerCent.map((perc, idx) =>
                    idx === activity.activitiesPerCent.length - 1 ? `${perc}%` : `${perc}%, `
                  )}
                </p>
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