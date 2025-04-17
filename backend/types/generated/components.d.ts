import type { Schema, Struct } from '@strapi/strapi';

export interface AboutServiceItemAboutServiceItem
  extends Struct.ComponentSchema {
  collectionName: 'components_about_service_item_about_service_items';
  info: {
    displayName: 'AboutServiceItem';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface BookingBookingCard extends Struct.ComponentSchema {
  collectionName: 'components_booking_booking_cards';
  info: {
    displayName: 'BookingCard';
  };
  attributes: {
    BookingFeature: Schema.Attribute.String;
  };
}

export interface FaqFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    Answer: Schema.Attribute.String;
    Question: Schema.Attribute.String;
  };
}

export interface FooterSettingSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_setting_social_links';
  info: {
    description: '';
    displayName: 'SocialLinks';
  };
  attributes: {
    Platform: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface HeaderMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_header_menu_items';
  info: {
    description: '';
    displayName: 'menu-item';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String;
    submenu: Schema.Attribute.Component<'menu.submenu-item', true>;
    to: Schema.Attribute.String;
  };
}

export interface MenuSubmenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_submenu_items';
  info: {
    description: '';
    displayName: 'SubmenuItem';
  };
  attributes: {
    label: Schema.Attribute.String;
    to: Schema.Attribute.String;
  };
}

export interface OpeningHoursOpeningHours extends Struct.ComponentSchema {
  collectionName: 'components_opening_hours_opening_hours';
  info: {
    displayName: 'OpeningHours';
  };
  attributes: {
    day: Schema.Attribute.String;
    hours: Schema.Attribute.String;
  };
}

export interface ServicesServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_services_service_items';
  info: {
    displayName: 'Service Item';
  };
  attributes: {
    Duration: Schema.Attribute.String;
    Name: Schema.Attribute.String;
    Price: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-service-item.about-service-item': AboutServiceItemAboutServiceItem;
      'booking.booking-card': BookingBookingCard;
      'faq.faq-item': FaqFaqItem;
      'footer-setting.social-links': FooterSettingSocialLinks;
      'header.menu-item': HeaderMenuItem;
      'menu.submenu-item': MenuSubmenuItem;
      'opening-hours.opening-hours': OpeningHoursOpeningHours;
      'services.service-item': ServicesServiceItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
