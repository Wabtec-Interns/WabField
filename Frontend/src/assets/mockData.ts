export class MockReportData {
    reportTitle: string;
    reportDescription: string;
    reportDate: string;
    reportStatus: string;
    reportType: string;

    constructor() {
        this.reportTitle = 'Relatório de Visita Técnica';
        this.reportDescription = 'Este é um relatório de exemplo para uma visita técnica realizada recentemente.';
        this.reportDate = new Date().toLocaleString();
        this.reportStatus = 'Open';
        this.reportType = 'Survey';
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

    constructor() {
        this.projectName = 'Projeto de Reforma';
        this.projectDescription = 'Este é um projeto de exemplo para uma reforma do auditório realizada recentemente.';
        this.projectStartDate = new Date().toLocaleString();
        this.projectEndDate = new Date().toLocaleString();
        this.projectStatus = 'Em Andamento';
        this.projectPeriod = 'Mensal';
        this.reportSummary = 10;
        this.employedCompany = 'Empresa Empregadora';
        this.clientCompany = 'Empresa Cliente';
        this.intermediaryCompany = 'Empresa Intermediaria';
    }
}

export const mockProject = new MockProjectData();