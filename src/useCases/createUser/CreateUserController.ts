import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
      });
      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
