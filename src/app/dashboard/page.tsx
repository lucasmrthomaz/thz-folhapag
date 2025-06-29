import { Button } from "@mui/material";
import CardResume from "./ui/CardResume";
import { folhasMock } from "./ui/mockFolhas";
import { ArrowForwardSharp } from "@mui/icons-material";

export default function DashboardPage() {
  // Contagem dinâmica baseada nos dados mockados
  const abertas = folhasMock.filter((r) => r.status === 'Pendente').length;
  const processando = folhasMock.filter((r) => r.status === 'Em processamento').length;
  const fechadas = folhasMock.filter((r) => r.status === 'Aprovado' || r.status === 'Rejeitado').length;

  return (
    <main className="min-h-screen bg-gradient-to-br via-white to-blue-100 p-0">
      <header className="bg-white/80 backdrop-blur-md shadow-sm px-8 py-6 mb-10 rounded-b-3xl">
        <h1
          className="text-5xl font-semibold tracking-tight text-blue-900 font-sans mb-2"
          tabIndex={0}
          aria-label="Visão Resumida"
        >
          Visão Resumida
        </h1>
        <p className="text-lg text-blue-700/80 font-light">
          Acompanhe o status das folhas de pagamento de forma rápida e clara.
        </p>
      </header>

      <section
        className="max-w-6xl mx-auto flex flex-col gap-8 items-center"
        aria-label="Resumo das folhas"
      >
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
          <CardResume
            title="Folhas Abertas"
            descricao="Ainda não processadas."
            quantidade={abertas}
          />
          <CardResume
            title="Folhas Processando"
            descricao="Na fila de processamento."
            quantidade={processando}
          />
          <CardResume
            title="Folhas Fechadas"
            descricao="Enviadas/emitidas com sucesso."
            quantidade={fechadas}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          className="!py-4 !px-10 !rounded-2xl shadow-xl transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-600 text-lg font-medium"
          href="/dashboard/folha"
          aria-label="Ver todas as folhas"
          endIcon={<ArrowForwardSharp />}
        >
          Ver Todas as Folhas
        </Button>
      </section>
    </main>
  );
}