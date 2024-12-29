'use client'

import { Button, FormGroup, Table } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function FolhaView() {
    const [dataAtual] = useState(new Date().toLocaleDateString());
    const urlListarTodosFunc = 'http://localhost:3000/api/sfp-mock';

    const [funcionarios, setFuncionario] = React.useState([]);

    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(urlListarTodosFunc);
          const data = await response.json();
          setFuncionario(data);
        } catch (error) {
          console.error('Houve erro...', error);
        }
      };
  
      fetchData();
    }, []);

    return <div>
        
        <FormGroup>
        <Table className="table table-auto border ">
                <thead>
                    <tr className="bg-blue-400 text-center">
                        <th>Matricula</th>
                        <th>Data Admissão</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Salario</th>
                        <th>Area</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="bg-blue-50 text-center">
                {funcionarios.map(({ id, matriculaFuncionario,dataAdmissao, nome, cargo, salario, areaResponsavel }) => (
                    <tr key={id}>
                        <td>{matriculaFuncionario}</td>
                        <td>{dataAdmissao}</td>
                        <td>{nome}</td>
                        <td>{cargo}</td>
                        <td>{salario}</td>
                        <td>{areaResponsavel}</td>
                        <td className="space-x-1">
                          <Button variant="contained" color="error">x</Button>
                          <Button variant="contained" color="warning">edit</Button>
                          </td>
                    </tr>
                ))}
                </tbody>
            </Table>

        </FormGroup>
        
        
        
    </div>
}