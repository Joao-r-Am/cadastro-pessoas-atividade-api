import { hash, compare } from "bcrypt";

const saltRounds = 10;

export const encrypt = (data: string): Promise<string> => {
  const passwordHash = hash(data, saltRounds);
  return passwordHash;
};

export const comparePassword = (password: string, hash: string) => {
  const res = compare(password, hash);
  if (!res) {
    throw { error: "senha ou email incorretos." };
  }
  return res;
};
