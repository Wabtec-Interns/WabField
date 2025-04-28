    export const REPORT_STATUS_CHOICES: [string,string][] = [
            ["Open", "Aberto"],
            ["Closed", "Fechado"],
            ["In Progress", "Em Andamento"],
        ];
        
    export const TYPE_REPORT_CHOICES: [string,string][] = [
            ["Survey", "Visita"],
            ["Project Monitoring", "Acompanhamento de Obra"],
            ["Commissioning", "Comissionamento"],
        ];
        
    export const WEATHER_CONDITION_CHOICES: [string,string][] = [
            ["Sunny", "Ensolarado"],
            ["Cloudy", "Nublado"],
            ["Rainy", "Chuvoso"],
            ["Foggy", "Nebuloso"],
            ["Stormy", "Tempestuoso"],
        ];
        
    export const WORK_CONDITION_CHOICES: [string,string][] = [
            ["Practicable", "Praticável"],
            ["Partially Practicable", "Parcialmente Praticável"],
            ["Unpracticable", "Impraticável"],
        ];
        
    export const TYPE_CONTRACT_CHOICES: [string,string][] = [
            ["Direct", "Direto"],
            ["Indirect", "Indireto"],
            ["Outsourced", "Terceirizado"]
        ];
        
    export const DIRECT_PROFISSIONAL_CHOICES: [string,string][] = [
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
        
    export const INDIRECT_PROFISSIONAL_CHOICES: [string,string][] = [
            ["Engineer", "Engenheiro"],
            ["Engineer / TST", "Engenheiro / TST"],
            ["Intern", "Estagiário"],
            ["Technical of Work Security", "Técnica(o) de Segurança do Trabalho"],
            ["Technical of Building", "Técnico em edificações"],
        ];
        
    export const OUTSOURCED_PROFISSIONAL_CHOICES: [string,string][] = [
            [" ", " "],
        ];
        
    export const ACTIVITIES_CHOICES: [string,string][] = [
            ["Activities 1", "Etapa de Infra"],
            ["Activities 2", "Etapa de Instalações"],
            ["Activities 3", "Etapa Final de Entrega"],
        ];
        
    export const TYPE_ACTIVITIES1: [string,string][] = [
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
        
    export const TYPE_ACTIVITIES2: [string,string][] = [
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
        
    export const TYPE_ACTIVITIES3: [string,string][] = [
            ["mechanical_tests_adjustments_mch", "Testes e Ajustes Mecânicos na MCH"],
            ["electrical_tests_adjustments_mch", "Testes e Ajustes Elétricos na MCH"],
            ["decommissioning", "Descomissionamento"],
            ["operation_tests_cco", "Testes de Operação com o CCO"],
            ["cleaning_organization_site", "Limpeza e Organização no Local"],
            ["technical_delivery", "Entrega Técnica"],
            ["delivery_term_filling", "Preenchimento de Termo de Entrega"],
            ["as_built", "As Built"]
        ];