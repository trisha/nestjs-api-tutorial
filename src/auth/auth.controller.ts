import { Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}

    // @Get('view')
    // signup_view() {
    //     return 'Page for signing up';
    // }

    @Post('signup')
    signup() {
        return this.authService.signup()
    }

    @Post('signin')
    signin() {
        return this.authService.signin()
    }
}