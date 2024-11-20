import { Usuario } from "../../types/usuario.type";
import { api, ResponseApi } from "./api.service";

export async function getUsuario(token: string) {
  try {
    const response = await api.get<ResponseApi<Usuario>>("/usuarios", {
      headers: {
        Authorization: token,
      },
    });
    console.log(response);

    return {
      ok: response.data.ok,
      message: response.data.message,
      data: response.data.data,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      ok: false,
      message: `Error: ${error.message}`,
    };
  }
}
