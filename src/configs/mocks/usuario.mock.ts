import { Usuario } from "../../types/usuario.type";

const createUuid = new Date().getMilliseconds().toString();

export const assessmentsMock: Usuario[] = [
  {
    id: createUuid,
    nome: "João",
    email: "joao@mail.com",
    username: "joaozinho",
    password: "senha123",
    createdAt: new Date(),
  },
];
