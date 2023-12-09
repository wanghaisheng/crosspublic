import { Module } from '@nestjs/common';
import {DomainRepository} from "@crosspublic/database/src/domains/domain.repository";
import {DomainService} from "@crosspublic/database/src/domains/domain.service";

@Module({
  imports: [],
  controllers: [],
  providers: [DomainRepository, DomainService],
  get exports() {
    return this.providers;
  }
})
export class DomainModule {}
