import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UmkmService } from './umkm.service';
import { CreateUmkmDto } from './dto/create-umkm.dto';
import { UpdateUmkmDto } from './dto/update-umkm.dto';
import { Umkm } from './schemas/umkm.schema';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('umkm')
export class UmkmController {
  constructor(private readonly umkmService: UmkmService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createUmkmDto: CreateUmkmDto): Promise<Umkm> {
    return this.umkmService.create(createUmkmDto);
  }

  @Get()
  async findAll(): Promise<Umkm[]> {
    return this.umkmService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Umkm> {
    return this.umkmService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUmkmDto: UpdateUmkmDto,
  ): Promise<Umkm> {
    return this.umkmService.update(id, updateUmkmDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.umkmService.remove(id);
  }
}