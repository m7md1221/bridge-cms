import type { Schema, Struct } from '@strapi/strapi';

export interface StepsContent extends Struct.ComponentSchema {
  collectionName: 'components_steps_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    Imp_note: Schema.Attribute.Blocks;
    Imp_note1: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
    text1: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'steps.content': StepsContent;
    }
  }
}
