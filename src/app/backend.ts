export interface Despesa {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string;
}

export function carregaDespesas(anoMes: string): Promise<Despesa[]> {
  return fetch(`http://localhost:3001/despesas?mes=${anoMes}&_sort=dia`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erro ao carregar dados.");
      }
    });
}
