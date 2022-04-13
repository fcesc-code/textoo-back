import {
  Controller,
  // Body,
  // Delete,
  // Get,
  // Param,
  // Post,
  // Put,
} from '@nestjs/common';
import { ActivitiesService } from '../services/activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(private activitiesService: ActivitiesService) {}
}
