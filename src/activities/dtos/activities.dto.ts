import { BestOptionActivityDto } from './best-option.activity.dto';
import { SelectTextActivityDto } from './select-text-activity.dto';
import { TransformAspectActivityDto } from './transform-aspect.activity.dto';

export type ActivitiesDto =
  | BestOptionActivityDto
  | SelectTextActivityDto
  | TransformAspectActivityDto;
