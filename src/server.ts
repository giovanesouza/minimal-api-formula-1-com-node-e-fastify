import fastify from "fastify";
import cors from "@fastify/cors";

// Cria servidor com configuração de log
const server = fastify({ logger: true });

// Configuração de cors
server.register(cors, {
  origin: "*", // quem pode acessar: * = todos
});

// Define a porta do servidor
const PORT: number = parseInt(process.env.PORT || "3333");

const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "RedBull", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Ferrari", base: "Maranello, Italy" },
    { id: 5, name: "Alpine", base: "Enstone, United Kingdom" },
    { id: 6, name: "AlphaTauri", base: "Faenza, Italy" },
    { id: 7, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 8, name: "Williams", base: "Grove, United Kingdom" }
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Mercedes" },
  { id: 3, name: "Lando Norris", team: "McLaren" },
  { id: 4, name: "Charles Leclerc", team: "Ferrari" },
  { id: 5, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 6, name: "George Russell", team: "Mercedes" },
  { id: 7, name: "Pierre Gasly", team: "Alpine" },
  { id: 8, name: "Yuki Tsunoda", team: "AlphaTauri" }
];

const circuits = [
  { id: 1, name: "Monaco", location: "Monte Carlo, Monaco" },
  { id: 2, name: "Silverstone", location: "Silverstone, United Kingdom" },
  { id: 3, name: "Spa-Francorchamps", location: "Stavelot, Belgium" },
  { id: 4, name: "Monza", location: "Monza, Italy" },
  { id: 5, name: "Suzuka", location: "Suzuka, Japan" },
  { id: 6, name: "Interlagos", location: "São Paulo, Brazil" },
  { id: 7, name: "Catalunya", location: "Barcelona, Spain" },
  { id: 8, name: "Circuit of the Americas", location: "Austin, USA" }
];

// Rota principal
server.get("/", async (req, res) => {
  // configuração do response
  res.type("application/json").code(200);
  // retornando dados
  return {
    message: "Seja bem vindo(a) à Minimal API da Fórmula 1 com Node e Fastify",
  };
});

// Rota ('/teams') + controller (render())
server.get("/teams", async (req, res) => {
  // configuração do response
  res.type("application/json").code(200);
  // retornando dados
  return { teams }; // Englobando com chaves -> o nome da constante é setado no resultado
});

server.get("/drivers", async (req, res) => {
  // configuração do response
  res.type("application/json").code(200);
  // retornando dados
  return { drivers };
});

// Contrato para o parâmetro
interface DriverParams {
  id: string;
}

// Rota com parâmetro
// <{Params: DriverParams}> -> recebe os parâmetros que seguem o contrato
server.get<{ Params: DriverParams }>("/drivers/:id", async (req, res) => {
  const id = parseInt(req.params.id); // Converte o valor recebido para inteiro
  const driver = drivers.find((d) => d.id === id); // Filtra driver

  if (!driver) {
    res.type("application/json").code(404);
    return { message: "Driver Not Found" };
  } else {
    res.type("application/json").code(200);
    return { driver };
  }
});


server.get("/circuits", async (req, res) => {
  // configuração do response
  res.type("application/json").code(200);
  // retornando dados
  return { circuits };
});

// define a porta para o servidor escultar
// server.listen({ port: 3333 }, () => {
//   console.log(`Servidor rodandando em: http://localhost:${PORT}`);
// });
server.listen({ port: PORT,  }, () => {
  console.log(`Servidor rodandando em: http://localhost:${PORT}`);
});