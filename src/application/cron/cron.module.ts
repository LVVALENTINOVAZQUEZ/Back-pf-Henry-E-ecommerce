import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { BookingsService } from '../bookings/bookings.service';
import { MailerService } from '../mailer/mailer.service';
import { ScheduleModule } from '@nestjs/schedule';
import { CouponsModule } from '../coupons/coupons.module';



@Module({
  imports: [
    ScheduleModule.forRoot(),
    CouponsModule,
  ],
  providers: [CronService, BookingsService, MailerService],
})
export class CronModule {}
