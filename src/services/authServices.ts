import { compare } from "bcrypt";
import { appError } from "../errors/appError";
import { UserDataCreate } from "../repositories/userRepository";
import { LoginDataTypes } from "../validations/loginSchema";
import { sign } from "jsonwebtoken";

type Repository = {
  getUserByEmail(email: string): Promise<UserDataCreate | undefined>;
};

export const authServices = {
  async login(data: LoginDataTypes, repository: Repository) {
    try {
      const { email, password } = data;

      const user = await repository.getUserByEmail(email);
      if (!user) throw appError("email or password invalid!", 401);

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) throw appError("email or password invalid!", 401);

      const token = sign({ id: user.id }, process.env.SECRET_TOKEN, {
        expiresIn: process.env.EXPIRESIN_TOKEN,
      });

      return token;
    } catch (error) {
      throw error;
    }
  },
};
