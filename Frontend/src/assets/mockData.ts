import MRSLoco  from '../assets/MRS_AC44i-30x40.jpg'
import RailwayImage from '../assets/Beena Vision TruckView.jpg'

export class MockReportData {


    reportTitle: string;
    reportDescription: string;
    reportDate: string;
    reportStatus: string;
    reportType: string;
    reportImage: string;

    constructor() {
        this.reportTitle = 'Relatório de Visita Técnica';
        this.reportDescription = 'Este é um relatório de exemplo para uma visita técnica realizada recentemente.';
        this.reportDate = new Date().toLocaleString();
        this.reportStatus = 'Open';
        this.reportType = 'Survey';
        this.reportImage = MRSLoco;
    }
}

export const mockReport = new MockReportData();

export class MockProjectData {
    projectName: string;
    projectDescription: string;
    projectStartDate: string;
    projectEndDate: string;
    projectStatus: string;
    projectPeriod: string;
    reportSummary: number;
    employedCompany: string;
    clientCompany: string;
    intermediaryCompany: string;
    projectImage: string;

    constructor() {
        this.projectName = 'Projeto de Reforma';
        this.projectDescription = 'Este é um projeto de exemplo para uma reforma do auditório realizada recentemente.';
        this.projectStartDate = new Date().toLocaleString();
        this.projectEndDate = new Date().toLocaleString();
        this.projectStatus = 'Em Andamento';
        this.projectPeriod = 'Mensal';
        this.reportSummary = 45;
        this.employedCompany = 'Empresa Empregadora';
        this.clientCompany = 'Empresa Cliente';
        this.intermediaryCompany = 'Empresa Intermediaria';
        this.projectImage = RailwayImage;
    }
}

export const mockProject = new MockProjectData();