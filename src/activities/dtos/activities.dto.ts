import {
  BestOptionActivityDto,
  NewBestOptionActivityDto,
} from './best-option.activity.dto';
import {
  NewSelectTextActivityDto,
  SelectTextActivityDto,
} from './select-text-activity.dto';
import {
  NewTransformAspectActivityDto,
  TransformAspectActivityDto,
} from './transform-aspect.activity.dto';

export type ActivityDto =
  | BestOptionActivityDto
  | SelectTextActivityDto
  | TransformAspectActivityDto
  | (BestOptionActivityDto &
      SelectTextActivityDto &
      TransformAspectActivityDto);

export type NewActivityDto =
  | NewBestOptionActivityDto
  | NewSelectTextActivityDto
  | NewTransformAspectActivityDto
  | (NewBestOptionActivityDto &
      NewSelectTextActivityDto &
      NewTransformAspectActivityDto);
