import { IsString } from 'class-validator';

export class EmployeeDTO {

  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  email: string;
}