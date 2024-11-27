import HeaderTipos from "../ui/components/HeaderTipos";
import CardResume from "./ui/CardResume";
import FaturasTable from "./ui/FaturasTable";

export default function DashboardPage() {
  return <div className="p-5" >
    <h1 className="text-3xl mb-5 font-sans font-thin"> VISÃO RESUMIDA </h1>

    <div className="flex justify-left mb-5">
      <HeaderTipos />
    </div>

    <div className="flex space-x-5 justify-evenly">
      <CardResume title='Folhas Abertas'
        descricao='Folhas que ainda não foram processadas ou enviadas ao destinatario.' />

      <CardResume title='Folhas Processando'
        descricao='Folhas que estão em processamento.' />

      <CardResume title='Folhas Fechadas'
        descricao='Folhas que foram enviadas com sucesso ao destinatario.' />
    </div>

    <FaturasTable/>

  </div>
}