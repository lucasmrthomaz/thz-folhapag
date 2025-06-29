/**
 * Componente de tabela para exibição de folhas de pagamento/faturas.
 * Utiliza Material UI e estilização customizada para visual moderno e claro.
 *
 * @module FolhaTable
 */
"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';

/**
 * Interface para definição das colunas da tabela.
 */
interface Column {
  id: 'faturaId' | 'solicitante' | 'datasolicitacao' | 'status' | 'categoria';
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}

/**
 * Definição das colunas exibidas na tabela.
 * @type {readonly Column[]}
 */
const columns: readonly Column[] = [
  { id: 'faturaId', label: 'Fatura ID', minWidth: 1 },
  { id: 'solicitante', label: 'Solicitante', minWidth: 100 },
  {
    id: 'datasolicitacao',
    label: 'Data Solicitação',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'categoria',
    label: 'Categoria',
    minWidth: 170,
    align: 'left',
  },
];

/**
 * Interface para os dados de cada linha da tabela.
 */
interface Data {
  faturaId: string;
  solicitante: string;
  datasolicitacao: string;
  status: string;
  categoria: string;
}

/**
 * Cria um objeto de dados para uma linha da tabela.
 *
 * @param faturaId - ID da fatura
 * @param solicitante - Nome do solicitante
 * @param datasolicitacao - Data da solicitação
 * @param status - Status da fatura
 * @param categoria - Categoria da fatura
 * @returns {Data} Objeto de dados para a tabela
 */
function createData(
    faturaId: string,
    solicitante: string,
    datasolicitacao: string,
    status: string,
    categoria: string
): Data {
  
  return { faturaId,
    solicitante,
    datasolicitacao,
    status,
    categoria };
}

import { folhasMock } from './mockFolhas';
const rows = folhasMock;

/**
 * Componente principal da tabela de folhas/faturas.
 *
 * @returns {JSX.Element} O componente de tabela renderizado
 */
export default function FolhaTable() {
  /**
   * Página atual da tabela (paginação).
   */
  const [page, setPage] = React.useState(0);
  /**
   * Quantidade de linhas por página.
   */
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  /**
   * Manipula a mudança de página na tabela.
   * @param event - Evento de mudança
   * @param newPage - Nova página selecionada
   */
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  /**
   * Manipula a mudança de quantidade de linhas por página.
   * @param event - Evento de mudança
   */
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  /**
   * Retorna a cor do chip de status de acordo com o valor do status.
   *
   * @param status - Status da fatura
   * @returns {"success"|"warning"|"error"|"info"|"default"} Cor do chip
   */
  const getStatusColor = (status: string): "success"|"warning"|"error"|"info"|"default" => {
    switch (status) {
      case 'Aprovado':
        return 'success';
      case 'Pendente':
        return 'warning';
      case 'Rejeitado':
        return 'error';
      case 'Em processamento':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <Paper
      sx={{ width: '100%', overflow: 'hidden', borderRadius: 1, boxShadow: 6, border: '1px solid #2563eb' }}
      className="mt-8 mb-8 bg-white text-zinc-900"
    >
      {/*
        TableContainer: Container da tabela com rolagem máxima de 400px.
        Table: Estrutura principal da tabela.
        TableHead: Cabeçalho com colunas.
        TableBody: Corpo da tabela com linhas paginadas.
        TablePagination: Paginação da tabela.
      */}
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    background: '#2563eb', // azul-600
                    fontWeight: 700,
                    fontSize: 16,
                    color: '#fff',
                    borderBottom: '2px solid #1e40af', // azul-800
                  }}
                  className="uppercase tracking-wide"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => {
                /**
                 * Renderiza cada linha da tabela.
                 * Zebra striping: linhas pares azul-claro, ímpares branco.
                 */
                const isZebra = idx % 2 === 1;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.faturaId}
                    className={isZebra ? 'bg-blue-50' : 'bg-white'}
                    sx={{
                      transition: 'background 0.2s',
                      '&:hover': {
                        backgroundColor: '#bae6fd', // azul-200
                        color: '#1e293b',
                      },
                      color: 'inherit',
                    }}
                  >
                    {columns.map((column) => {
                      /**
                       * Renderiza cada célula da linha.
                       * Se for status, exibe um Chip colorido.
                       */
                      const value = row[column.id];
                      if (column.id === 'status') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Chip
                              label={value}
                              color={getStatusColor(value)}
                              size="small"
                              sx={{
                                fontWeight: 600,
                                letterSpacing: 0.5,
                                color: (theme) => theme.palette.mode === 'dark' ? '#fff' : undefined,
                              }}
                            />
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/*
        TablePagination: Componente de paginação da tabela.
        rowsPerPageOptions: Opções de linhas por página.
        sx: Estilização customizada para manter padrão visual azul.
      */}
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          borderTop: '1px solid #2563eb',
          background: '#eff6ff', // azul-50
          '.MuiTablePagination-toolbar': { fontWeight: 500, color: '#1e40af' },
        }}
      />
    </Paper>
  );
}
