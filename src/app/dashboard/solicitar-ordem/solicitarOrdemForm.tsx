import { FormControl, FormGroup, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';

export default function SolicitarOrdemForm() {
    const dataAtual = new Date(Date.now()).toLocaleString().split(',')[0]
    return <div>
        <FormGroup>
            <Grid container spacing={2} className="mt-5 mb-5">
                {/* Campos desabilitados */}
                <Grid size={3}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            disabled
                            id='dataSolicitacao'
                            label='Data Solicitação'

                            variant='outlined'
                            value={dataAtual}
                        />
                    </FormControl>
                </Grid>

                <Grid size={3}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            disabled
                            id="usuario"
                            label="Usuário"

                            variant="outlined"
                            value='lucas.thomaz'
                        />
                    </FormControl>
                </Grid>

                {/* Campos de códigos */}
                <Grid size={3}>
                    <FormControl fullWidth>
                        <TextField id="clci" label="CLCI" variant="outlined" />
                        <FormHelperText>CLCI - Código de Lançamento Contábil Individual</FormHelperText>

                    </FormControl>
                </Grid>

                <Grid size={3}>
                    <FormControl fullWidth>
                        <TextField id="cco" label="CCO" variant="outlined" />
                        <FormHelperText>CCO - Código Centro Custo Operacional</FormHelperText>
                    </FormControl>
                </Grid>

                {/* Select de tipo de folha */}
                <Grid size={3}>
                    <FormControl fullWidth>
                        <InputLabel id="tipo-folha-label">Tipo de folha</InputLabel>
                        <Select
                            labelId="tipo-folha-label"
                            id="tipo-folha"
                            label="Tipo de folha"
                        >
                            <MenuItem value={0}>Funcionário</MenuItem>
                            <MenuItem value={1}>Fornecedor</MenuItem>
                            <MenuItem value={2}>Avulsa</MenuItem>
                        </Select>
                        <FormHelperText>Tipo de folha que deseja solicitar</FormHelperText>
                    </FormControl>
                </Grid>

                {/* Campos de valores */}
                <Grid size={3}>
                    <FormControl fullWidth>
                        <TextField
                            id="valor-total"
                            label="Valor total"
                            variant="outlined"
                        />
                        <FormHelperText>Valor total para folha de pagamento</FormHelperText>
                    </FormControl>
                </Grid>

                {/* Campos do beneficiário */}
                <Grid size={3}>
                    <FormControl fullWidth>
                        <TextField
                            id="nome-beneficiario"
                            label="Nome do beneficiário"
                            variant="outlined"
                        />
                        <FormHelperText>Nome do beneficiário da folha</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid size={3}>
                    <FormControl fullWidth>
                        <TextField
                            id="banco"
                            label="Banco"
                            variant="outlined"
                        />
                        <FormHelperText>Banco do beneficiário</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid size={3}>
                    <FormControl fullWidth>
                        <TextField
                            id="agencia"
                            label="Agência"
                            variant="outlined"
                        />
                        <FormHelperText>Agência do beneficiário</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid size={3}>
                    <FormControl fullWidth>
                        <TextField
                            id="conta"
                            label="Conta"
                            variant="outlined"
                        />
                        <FormHelperText>Conta do beneficiário</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid size={3}>
                    <FormControl fullWidth>
                        <TextField
                            id="tipo-conta"
                            label="Tipo de conta"
                            variant="outlined"
                        />
                        <FormHelperText>Tipo de conta do beneficiário</FormHelperText>
                    </FormControl>
                </Grid>

                {/* Campos finais */}
                <Grid size={3}>
                    <FormControl fullWidth>
                        <TextField
                            id="tipo-contrato"
                            label="Tipo de contrato"
                            variant="outlined"
                        />
                        <FormHelperText>Tipo de contrato do beneficiário</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid size={3}>
                    <FormControl fullWidth>
                        <TextField
                            id="valor-final"
                            label="Valor final"
                            variant="outlined"
                        />
                        <FormHelperText>Valor final da folha de pagamento</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid size={3}>
                    <FormControl fullWidth>
                        <TextField
                            id="data-pagamento"
                            label="Data de pagamento"
                            variant="outlined"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                        />
                        <FormHelperText>Data de pagamento da folha</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </FormGroup>
    </div>
}