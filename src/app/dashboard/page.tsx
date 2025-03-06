import { Button } from "@mui/material";
import CardResume from "./ui/CardResume";
import { ArrowForwardSharp } from "@mui/icons-material";

export default function DashboardPage() {
  return (
    <div className="p-5">
      <h1 className="text-3xl mb-5 font-sans font-thin">VISÃO RESUMIDA</h1>
      
      <Button variant="contained" color="primary" className="p-15 mt-10 mb-10" href="/dashboard/folha">
          Todas as Folhas <ArrowForwardSharp />
        </Button>

      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 justify-evenly">
        <CardResume
          title="Folhas Abertas"
          descricao="Folhas que ainda não foram processadas ou enviadas ao destinatario."
        />

        <CardResume
          title="Folhas Processando"
          descricao="Folhas que estão em processamento."
        />

        <CardResume
          title="Folhas Fechadas"
          descricao="Folhas que foram enviadas com sucesso ao destinatario."
        />
      </div>

    </div>
  );
}