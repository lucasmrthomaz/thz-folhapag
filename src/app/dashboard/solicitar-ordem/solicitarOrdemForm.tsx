import { FormControl, FormGroup, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';

export default function SolicitarOrdemForm() {
    const dataAtual = new Date(Date.now()).toLocaleString().split(',')[0]
    return <div>
        <div className="space-x-5">
            <FormGroup>
                <Grid container spacing={2}>

                    <Grid size={3}>
                        <TextField required disabled id='dataSolicitacao' 
                        label='Data Solicitação' 
                        variant='outlined'
                        placeholder={ dataAtual }
                        value={dataAtual}/>
                    </Grid>

                    <Grid size={3}>
                        <TextField required disabled id="inputUsuario"
                         placeholder="lucas.thomaz"
                        label="Usuário" 
                        variant="outlined"
                        value='lucas.thomaz' />
                    </Grid>

                    <Grid size={3}>
                        <FormControl>
                        <TextField id="" label="CLCI" variant="outlined" />
                        <FormHelperText> * CLCI - Código de Lancamento Contabil Individual</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid size={3}>
                        <FormControl>
                        <TextField id="" label="CCO" variant="outlined" />
                        <FormHelperText> * CCO - Código Centro Custo Operacional</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid size={3}>
                    <FormControl fullWidth>
                    <InputLabel id="tipo-folha-pagamento">Tipo de folha</InputLabel>
                        <Select label='Tipo de folha'>
                            <MenuItem value={0}>Funcionário</MenuItem>
                            <MenuItem value={1}>Fornecedor</MenuItem>
                            <MenuItem value={1}>Avulsa</MenuItem>
                        </Select>
                        <FormHelperText> * Tipo de folha que deseja solicitar</FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>

            </FormGroup>
        </div>
    </div>
}