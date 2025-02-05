'use client'

import { Button, FormGroup, Table } from "@mui/material";
import React from "react";
import { useState } from "react";

const MOCK_FUNCIONARIOS = [
  {
    id: 1,
    matriculaFuncionario: "F001",
    dataAdmissao: "01/01/2024",
    nome: "João Silva",
    cargo: "Desenvolvedor",
    salario: 5000,
    areaResponsavel: "TI"
  },
  {
    id: 2,
    matriculaFuncionario: "F002",
    dataAdmissao: "02/01/2024",
    nome: "Maria Santos",
    cargo: "Analista",
    salario: 6000,
    areaResponsavel: "RH"
  }
];

export default function FolhaView() {
    const [dataAtual] = useState(new Date().toLocaleDateString());
    const urlListarTodosFunc = process.env.NEXT_PUBLIC_API_URL || '/api/sfp-mock';
    //const urlListarTodosFunc = 'http://localhost:8080/funcionario/listartodos';
    
    const [funcionarios, setFuncionario] = React.useState(MOCK_FUNCIONARIOS);

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
          // Mantém os dados mockados em caso de erro
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