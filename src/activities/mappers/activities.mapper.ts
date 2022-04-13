// import { SelectTextActivityDto } from '../dtos/select-text-activity.dto';
// import { SelectTextActivityEntity } from '../entity/select-text.activity.entity';

export class ActivitiesMapper {
  selectText() {
    return {
      dtoToEntity: (dto: any) => {
        return {
          id: dto.id,
          name: dto.name,
          description: dto.description,
          startDate: dto.startDate,
          endDate: dto.endDate,
          createdAt: dto.createdAt,
          updatedAt: dto.updatedAt,
        };
      },

      // entityToDto: (
      //   selectTextActivityEntity: SelectTextActivityEntity,
      // ): SelectTextActivityDto => {
      //   return new SelectTextActivityDto({
      //     language: selectTextActivityEntity.language,
      //     author,
      //     task,
      //     font,
      //     title,
      //     activityId,
      //     scores,
      //     keywords,
      //     timestamps,
      //     text,
      //     positions,
      //     id,
      //   });
      // },
    };
  }
}
