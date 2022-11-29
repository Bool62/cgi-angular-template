import { Controller, Get, Query } from '@nestjs/common';
import { ThemeService } from './theme.service';

@Controller('theme')
export class ThemeController {
  constructor(private readonly themeService: ThemeService) {}

  @Get()
  getThemes() {
    return this.themeService.getThemes();
  }

  @Get('id')
  getThemeById(@Query('id') id: number) {
    return this.themeService.getThemeById(id);
  }
}
