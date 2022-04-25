import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersRepository } from 'src/users/repositories/users.repository';
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
    const token: string = this.jwtService.sign(payload);
    console.log('service generating token >>> ', token);
    return {
      _id: user._id,
      access_token: token,
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
    console.log(
      'validate password comparative >>> ',
      passwordInput,
      ' >>> ',
      passwordDB,
      ' >>> ',
      bcrypt.compareSync(passwordInput, passwordDB),
    );
    return bcrypt.compareSync(passwordInput, passwordDB);
  }
}
