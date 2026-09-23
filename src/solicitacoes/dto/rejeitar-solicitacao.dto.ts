import {
  IsNotEmpty,
  IsInt,
  IsString,
  Min,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RejeitarSolicitacaoDto {
  @IsInt()
  @Min(1)
  versao: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(200)
  justificativa: string;
}
