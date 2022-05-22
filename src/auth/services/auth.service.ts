import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersRepository } from '../../users/repositories/users.repository';
import { JWTPayload } from '../interfaces/auth.interfaces';

@Injectable()
export class AuthService {
  constructor(
    private usersDB: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    emailInput: string,
    passwordInput: string,
  ): Promise<boolean> {
    const user = await this.usersDB.findByEmail(emailInput);
    if (user) return await this.validatePassword(passwordInput, user.password);
    return null;
  }

  async generateAccessToken(email: string) {
    const user = await this.usersDB.findByEmail(email);
    const payload: JWTPayload = { _id: user._id.toString() };
    const accessToken: string = this.jwtService.sign(payload);
    return {
      userId: user._id.toString(),
      accessToken: accessToken,
    };
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async validatePassword(
    passwordInput: string,
    passwordDB: string,
  ): Promise<boolean> {
    return bcrypt.compareSync(passwordInput, passwordDB);
  }
}
