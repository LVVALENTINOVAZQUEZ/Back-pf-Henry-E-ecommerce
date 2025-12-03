import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CouponsModule } from '../coupons/coupons.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
     CouponsModule,
      UsersModule,
  ],
  controllers: [BookingsController],
  providers: [BookingsService],
  exports: [BookingsService],
})
export class BookingsModule {}
