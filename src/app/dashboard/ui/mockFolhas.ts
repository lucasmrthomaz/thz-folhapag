import { faker } from '@faker-js/faker';

// Dados mockados de folhas/faturas para uso global
export interface FolhaData {
  faturaId: string;
  solicitante: string;
  datasolicitacao: string;
  status: string;
  categoria: string;
}

// Mock de folhas/faturas para testes e desenvolvimento
// Este mock pode ser substituído por dados reais do banco de dados quando necessário
export const folhasMock: FolhaData[] = [
    { faturaId: '1001', solicitante: faker.person.fullName(), datasolicitacao: '01/06/2024', status: 'Aprovado', categoria: 'Salário' },
    { faturaId: '1002', solicitante: faker.person.fullName(), datasolicitacao: '03/06/2024', status: 'Pendente', categoria: 'Reembolso' },
    { faturaId: '1003', solicitante: faker.person.fullName(), datasolicitacao: '05/06/2024', status: 'Em processamento', categoria: 'Fornecedor' },
    { faturaId: '1004', solicitante: faker.person.fullName(), datasolicitacao: '07/06/2024', status: 'Rejeitado', categoria: 'Salário' },
    { faturaId: '1005', solicitante: faker.person.fullName(), datasolicitacao: '09/06/2024', status: 'Aprovado', categoria: 'Reembolso' },
    { faturaId: '1006', solicitante: faker.person.fullName(), datasolicitacao: '11/06/2024', status: 'Pendente', categoria: 'Fornecedor' },
    { faturaId: '1007', solicitante: faker.person.fullName(), datasolicitacao: '13/06/2024', status: 'Aprovado', categoria: 'Salário' },
    { faturaId: '1008', solicitante: faker.person.fullName(), datasolicitacao: '15/06/2024', status: 'Em processamento', categoria: 'Reembolso' },
    { faturaId: '1009', solicitante: faker.person.fullName(), datasolicitacao: '17/06/2024', status: 'Rejeitado', categoria: 'Fornecedor' },
    { faturaId: '1010', solicitante: faker.person.fullName(), datasolicitacao: '19/06/2024', status: 'Aprovado', categoria: 'Salário' },
    ...Array.from({ length: 100 }, (_, i) => ({
        faturaId: (1011 + i).toString(),
        solicitante: faker.person.fullName(),
        datasolicitacao: `${(i % 30) + 1}/07/2024`,
        status: ['Aprovado', 'Pendente', 'Em processamento', 'Rejeitado'][i % 4],
        categoria: ['Salário', 'Reembolso', 'Fornecedor'][i % 3],
    }))
];