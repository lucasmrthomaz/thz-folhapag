import { FormControl, FormGroup, FormHelperText, Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';

export default function SolicitarOrdemForm() {
    const dataAtual = new Date(Date.now()).toLocaleString().split(',')[0]
    return <div>

        <FormGroup>
            <Grid container spacing={2} className="mt-5 mb-5">

                <Grid size={3}>
                    <TextField required disabled id='dataSolicitacao'
                        label='Data Solicitação'
                        variant='outlined'
                        placeholder={dataAtual}
                        value={dataAtual} />
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
                            <MenuItem value={2}>Avulsa</MenuItem>
                        </Select>
                        <FormHelperText> * Tipo de folha que deseja solicitar</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid size={3}>
                    <FormControl fullWidth>
                        <InputLabel id="tipo-folha-pagamento">Valor total</InputLabel>
                        <TextField id="" label="Valor total" variant="outlined" />
                        <FormHelperText> * Valor total para folha de pagamento</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid size={3}>
                    <FormControl fullWidth>
                        <InputLabel id="tipo-folha-pagamento">Nome beneficiario</InputLabel>
                        <TextField id="" label="Nome" variant="outlined" />
                        <FormHelperText> * Nome do beneficiario da folha</FormHelperText>
                    </FormControl>
                </Grid>

            </Grid>

        </FormGroup>

    </div>
}