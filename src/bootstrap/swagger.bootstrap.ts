import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const bootstrapSwagger = (app: INestApplication) => {
  const title = 'Reminder API';

  const config = new DocumentBuilder().setTitle(title).build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: title,
  });
};
