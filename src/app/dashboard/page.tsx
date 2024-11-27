import HeaderTipos from "../ui/components/HeaderTipos";
import CardResume from "./ui/CardResume";

export default function DashboardPage() {
  return <div className="p-10" >
    <h1 className="text-3xl mb-5"> </h1>

    <span className="flex-row w-1"> 
      <b>Filtro</b> 
    <HeaderTipos />
    </span>
    
    <div className="flex space-x-5">
      <CardResume title='Folhas Abertas'
        descricao='Folhas que ainda não foram processadas ou enviadas ao destinatario.' />

      <CardResume title='Folhas Processando'
        descricao='Folhas que estão em processamento.' />

      <CardResume title='Folhas Fechadas'
        descricao='Folhas que foram enviadas com sucesso ao destinatario.' />
    </div>

  </div>
}