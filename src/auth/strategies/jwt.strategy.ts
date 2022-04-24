import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserDto } from 'src/users/dtos/users.dtos';
import { UsersRepository } from 'src/users/repositories/users.repository';
import { JWTPayload } from '../interfaces/auth.interfaces';
import SECRET_KEY from 'keys/SECRET.KEY';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersDB: UsersRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: SECRET_KEY,
    });
  }

  async validate(payload: JWTPayload): Promise<UserDto> {
    const user = await this.usersDB.findById(payload._id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
