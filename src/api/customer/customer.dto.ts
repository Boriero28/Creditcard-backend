import { IsEmail, IsString, IsArray, IsOptional} from 'class-validator';

export class CustomerDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  company: string;

  @IsEmail()
  email:string;

  @IsString()
  date: String;

  @IsString()
  arrivalTime: String;

  @IsOptional()
  @IsString()
  departureTime?: String;

  @IsString()
  reason: string;

  @IsArray()
  referencePersons: string[];

  @IsOptional()
  @IsString()
  notes?: string;

}

export class UpdateDTO{
  @IsOptional()
  @IsString()
  _id?: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  company?: string;

  @IsOptional()
  @IsEmail()
  email?:string;

  @IsOptional()
  @IsString()
  date?: String;

  @IsOptional()
  @IsString()
  arrivalTime?: String;

  @IsOptional()
  @IsString()
  departureTime?: String;

  @IsOptional()
  @IsString()
  reason?: string;

  @IsOptional()
  @IsArray()
  referencePersons?: string[];

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  __v?: string;
}

export class MailResetDTO{
  @IsEmail()
  email:string;
}
