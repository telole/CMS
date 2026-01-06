import type { Schema, Struct } from '@strapi/strapi';

export interface SharedEducation extends Struct.ComponentSchema {
  collectionName: 'components_shared_educations';
  info: {
    displayName: 'Education';
  };
  attributes: {
    major: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    Icon: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Path: Schema.Attribute.String;
  };
}

export interface SharedItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_items';
  info: {
    displayName: 'Item';
  };
  attributes: {
    Icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    Path: Schema.Attribute.String;
  };
}

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    Description: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedName extends Struct.ComponentSchema {
  collectionName: 'components_shared_names';
  info: {
    displayName: 'Name';
  };
  attributes: {};
}

export interface SharedNavbar extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbars';
  info: {
    displayName: 'navbar';
  };
  attributes: {
    Icon: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    NavbarChild: Schema.Attribute.Component<'shared.navbar-child', true>;
    Path: Schema.Attribute.String;
  };
}

export interface SharedNavbarChild extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_children';
  info: {
    displayName: 'NavbarChild';
  };
  attributes: {
    Icon: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Path: Schema.Attribute.String;
    SubNavbarChild: Schema.Attribute.Component<'shared.sub-navbar-child', true>;
  };
}

export interface SharedProdis extends Struct.ComponentSchema {
  collectionName: 'components_shared_prodis';
  info: {
    displayName: 'Prodis';
  };
  attributes: {
    Icon: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Path: Schema.Attribute.String;
  };
}

export interface SharedProfile extends Struct.ComponentSchema {
  collectionName: 'components_shared_profiles';
  info: {
    displayName: 'Profile';
  };
  attributes: {
    Text: Schema.Attribute.Text;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSteps extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    displayName: 'Steps';
  };
  attributes: {
    Deskripsi: Schema.Attribute.Text;
    Posisi: Schema.Attribute.Enumeration<['Kiri', 'Kanan']>;
    Title: Schema.Attribute.String;
    Urutan: Schema.Attribute.Integer;
  };
}

export interface SharedSubNavbarChild extends Struct.ComponentSchema {
  collectionName: 'components_shared_sub_navbar_children';
  info: {
    displayName: 'SubNavbarChild';
  };
  attributes: {
    Icon: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Path: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.education': SharedEducation;
      'shared.header': SharedHeader;
      'shared.item': SharedItem;
      'shared.list': SharedList;
      'shared.media': SharedMedia;
      'shared.name': SharedName;
      'shared.navbar': SharedNavbar;
      'shared.navbar-child': SharedNavbarChild;
      'shared.prodis': SharedProdis;
      'shared.profile': SharedProfile;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.steps': SharedSteps;
      'shared.sub-navbar-child': SharedSubNavbarChild;
    }
  }
}
