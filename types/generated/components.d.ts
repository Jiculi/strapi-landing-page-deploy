import type { Schema, Attribute } from '@strapi/strapi';

export interface BloksCta extends Schema.Component {
  collectionName: 'components_bloks_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    form: Attribute.Component<'elements.form'>;
  };
}

export interface BloksHero extends Schema.Component {
  collectionName: 'components_bloks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.String;
    link: Attribute.Component<'elements.button-link'>;
    image: Attribute.Media;
  };
}

export interface BloksPricing extends Schema.Component {
  collectionName: 'components_bloks_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    plan: Attribute.Component<'elements.pricing-card', true>;
  };
}

export interface BloksRow extends Schema.Component {
  collectionName: 'components_bloks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    image: Attribute.Media;
    heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsForm extends Schema.Component {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    input: Attribute.Component<'elements.input', true>;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
    description: '';
  };
  attributes: {
    placeholder: Attribute.String;
    label: Attribute.String;
    inputType: Attribute.String;
    button: Attribute.Component<'elements.button-link', true>;
  };
}

export interface ElementsPricingCard extends Schema.Component {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'Pricing Card';
    description: '';
  };
  attributes: {
    planType: Attribute.String;
    planPrice: Attribute.String;
    isFeature: Attribute.Boolean & Attribute.DefaultTo<false>;
    services: Attribute.Relation<
      'elements.pricing-card',
      'oneToMany',
      'api::service.service'
    >;
    link: Attribute.Component<'elements.button-link'>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    mataImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'bloks.cta': BloksCta;
      'bloks.hero': BloksHero;
      'bloks.pricing': BloksPricing;
      'bloks.row': BloksRow;
      'elements.button-link': ElementsButtonLink;
      'elements.card': ElementsCard;
      'elements.form': ElementsForm;
      'elements.input': ElementsInput;
      'elements.pricing-card': ElementsPricingCard;
      'seo.meta-data': SeoMetaData;
    }
  }
}
