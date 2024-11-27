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

interface Column {
  id: 'faturaId' | 'solicitante' | 'datasolicitacao' | 'status' | 'categoria';
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}

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

interface Data {
  faturaId: string;
  solicitante: string;
  datasolicitacao: string;
  status: string;
  categoria: string;
}

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

const rows = [
  createData('1','Lucas Thomaz','17/11/2024','Em processamento','Fornecedor'),
  createData('2','Lucas Thomaz','18/11/2024','Em processamento','Fornecedor'),
  createData('3','Lucas Thomaz','19/11/2024','Em processamento','Fornecedor'),
  createData('4','Lucas Thomaz','20/11/2024','Em processamento','Fornecedor'),
  createData('5','Lucas Thomaz','21/11/2024','Em processamento','Fornecedor'),
  createData('6','Lucas Thomaz','22/11/2024','Em processamento','Fornecedor'),
  createData('7','Lucas Thomaz','23/11/2024','Em processamento','Fornecedor'),
  createData('8','Lucas Thomaz','24/11/2024','Em processamento','Fornecedor'),
  createData('9','Lucas Thomaz','25/11/2024','Em processamento','Fornecedor'),
  createData('10','Lucas Thomaz','26/11/2024','Em processamento','Fornecedor'),
];

export default function FaturasTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden'}} className='mt-5 mb-5'>
      <TableContainer sx={{ maxHeight: 320 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.faturaId}>
                    {columns.map((column) => {
                      const value = row[column.id];
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
