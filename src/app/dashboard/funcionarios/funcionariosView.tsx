'use client'

import { FormGroup, Table, Grid, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, IconButton, Fab, TablePagination } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from "react";
import { MOCK_FUNCIONARIOS } from "./mock/MOCK_FUNCIONARIOS";
import { ArrowBackSharp } from "@mui/icons-material";

export default function FolhaView() {
  const urlListarTodosFunc = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/sfp-mock';

  const [funcionarios, setFuncionario] = React.useState(MOCK_FUNCIONARIOS);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlListarTodosFunc);
        const data = await response.json();
        if (data && data.length > 0) {
          setFuncionario(data);
        }
      } catch (error) {
        console.error('Houve erro...', error);
      }
    };

    fetchData();
  }, []);

  const handleBackToHome = () => {
    window.history.back()
  };

  const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedFuncionarios = funcionarios.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  
  return (

    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormGroup>

          <TableContainer component={Paper} style={{ overflowX: 'auto' }} className="shadow-sm">
            <Table id="tableFunc" className="min-w-full divide-y divide-gray-200 shadow-sm">
              <TableHead className="bg-gray-50">
                <TableRow>
                  <TableCell className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matricula</TableCell>
                  <TableCell className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Admissão</TableCell>
                  <TableCell className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</TableCell>
                  <TableCell className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cargo</TableCell>
                  <TableCell className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salario</TableCell>
                  <TableCell className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</TableCell>
                  <TableCell className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="bg-white divide-y divide-gray-200">
                {paginatedFuncionarios.map(({ id, matriculaFuncionario, dataAdmissao, nome, cargo, salario, areaResponsavel }) => {
                  const formattedDate = new Date(dataAdmissao).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  });
                  return (
                    <TableRow key={id}>
                      <TableCell className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-900">{matriculaFuncionario}</TableCell>
                      <TableCell className="px-2 py-1 whitespace-nowrap text-sm text-gray-500">{formattedDate}</TableCell>
                      <TableCell className="px-2 py-1 whitespace-nowrap text-sm text-gray-500">{nome}</TableCell>
                      <TableCell className="px-2 py-1 whitespace-nowrap text-sm text-gray-500">{cargo}</TableCell>
                      <TableCell className="px-2 py-1 whitespace-nowrap text-sm text-gray-500">{salario}</TableCell>
                      <TableCell className="px-2 py-1 whitespace-nowrap text-sm text-gray-500">{areaResponsavel}</TableCell>
                      <TableCell className="px-2 py-1 whitespace-nowrap text-right text-sm font-medium space-x-1">
                        <IconButton size="small" color="error">
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="warning">
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 8, 10, 25]}
              component="div"
              count={funcionarios.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </FormGroup>
      </Grid>
      <Fab
        color="secondary"
        aria-label="go back"
        onClick={handleBackToHome}
        style={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <ArrowBackSharp />
      </Fab>
    </Grid>
  );
}