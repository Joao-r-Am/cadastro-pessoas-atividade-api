export interface CreateUserDto {
  nome: string;
  senha: string;
  telefone: number;
  email: string;
  rua: string;
  numero: number;
  complemento: string | null;
  cidade: string;
}
