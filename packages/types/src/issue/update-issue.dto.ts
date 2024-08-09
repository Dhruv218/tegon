import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

import { CreateIssueRelationDto } from '../issue-relation';
import { CreateLinkedIssueDto } from '../linked-issue';

export class UpdateIssueDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  priority?: number;

  @IsOptional()
  @IsDate()
  dueDate?: Date;

  @IsOptional()
  @IsNumber()
  sortOrder?: number;

  @IsOptional()
  @IsNumber()
  subIssueSortOrder?: number;

  @IsOptional()
  @IsNumber()
  estimate?: number;

  @IsOptional()
  @IsArray()
  labelIds?: string[];

  @IsOptional()
  @IsString()
  assigneeId?: string;

  @IsOptional()
  @IsString()
  stateId?: string;

  @IsOptional()
  @IsString()
  parentId?: string;

  @IsOptional()
  @IsBoolean()
  isBidirectional?: boolean;

  @IsOptional()
  @IsArray()
  subscriberIds?: string[];

  @IsOptional()
  @IsObject()
  issueRelation?: CreateIssueRelationDto;

  @IsOptional()
  @IsArray()
  attachments?: string[];

  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsObject()
  linkIssueData?: CreateLinkedIssueDto;

  @IsOptional()
  @IsObject()
  sourceMetadata?: Record<string, string>;
}