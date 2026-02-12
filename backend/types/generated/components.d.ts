import type { Schema, Struct } from '@strapi/strapi';

export interface CardsGlobeCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_globe_cards';
  info: {
    description: '';
    displayName: 'Globe_Card';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.String;
    span: Schema.Attribute.Enumeration<['one', 'two', 'three']>;
    title: Schema.Attribute.String;
  };
}

export interface CardsGraphCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_graph_cards';
  info: {
    description: '';
    displayName: 'Graph_Card';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.String;
    highlighted_text: Schema.Attribute.String;
    span: Schema.Attribute.Enumeration<['one', 'two', 'three']>;
    title: Schema.Attribute.String;
    top_items: Schema.Attribute.Component<'items.graph-card-top-items', true>;
  };
}

export interface CardsRayCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_ray_cards';
  info: {
    description: '';
    displayName: 'Ray_Card';
    icon: 'dashboard';
  };
  attributes: {
    after_ray_items: Schema.Attribute.Component<'items.ray-items', false>;
    before_ray_items: Schema.Attribute.Component<'items.ray-items', false>;
    description: Schema.Attribute.String;
    span: Schema.Attribute.Enumeration<['one', 'two', 'three']>;
    title: Schema.Attribute.String;
  };
}

export interface CardsSocialMediaCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_social_media_cards';
  info: {
    description: '';
    displayName: 'Social_Media_Card';
    icon: 'dashboard';
  };
  attributes: {
    Description: Schema.Attribute.String;
    logos: Schema.Attribute.Relation<'oneToMany', 'api::logo.logo'>;
    span: Schema.Attribute.Enumeration<['one', 'two', 'three']>;
    Title: Schema.Attribute.String;
  };
}

export interface DynamicZoneBrands extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_brands';
  info: {
    description: '';
    displayName: 'Brands';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String;
    logos: Schema.Attribute.Relation<'oneToMany', 'api::logo.logo'>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneCta extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_ctas';
  info: {
    description: '';
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    address: Schema.Attribute.String;
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    CTAs: Schema.Attribute.Component<'shared.button', true>;
    heading: Schema.Attribute.String;
    location: Schema.Attribute.String;
    maps_url: Schema.Attribute.String;
    opening_hours: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    phone_note: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneFaq extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneFeatures extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_features';
  info: {
    description: '';
    displayName: 'Features';
    icon: 'bulletList';
  };
  attributes: {
    globe_card: Schema.Attribute.Component<'cards.globe-card', false>;
    graph_card: Schema.Attribute.Component<'cards.graph-card', false>;
    heading: Schema.Attribute.String;
    ray_card: Schema.Attribute.Component<'cards.ray-card', false>;
    social_media_card: Schema.Attribute.Component<
      'cards.social-media-card',
      false
    >;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneFormNextToSection extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_form_next_to_sections';
  info: {
    description: '';
    displayName: 'Form_Next_To_Section';
    icon: 'book';
  };
  attributes: {
    form: Schema.Attribute.Component<'shared.form', false>;
    heading: Schema.Attribute.String;
    section: Schema.Attribute.Component<'shared.section', false>;
    social_media_icon_links: Schema.Attribute.Component<
      'shared.social-media-icon-links',
      true
    >;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneGallery extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'brush';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    enable_grayscale: Schema.Attribute.Boolean;
    gallery_item: Schema.Attribute.Component<'items.gallery-item', true>;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneGallerySlider extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_gallery_sliders';
  info: {
    displayName: 'Gallery_Slider';
    icon: 'brush';
  };
  attributes: {
    before_after_pair: Schema.Attribute.Component<
      'items.before-after-pair',
      true
    >;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneHero extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    CTAs: Schema.Attribute.Component<'shared.button', true>;
    duration: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_how_it_works';
  info: {
    description: '';
    displayName: 'How_It_Works';
    icon: 'question';
  };
  attributes: {
    heading: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'shared.steps', true>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneLaunches extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_launches';
  info: {
    description: '';
    displayName: 'Launches';
    icon: 'rocket';
  };
  attributes: {
    heading: Schema.Attribute.String;
    launches: Schema.Attribute.Component<'shared.launches', true>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZonePricing extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_pricings';
  info: {
    description: '';
    displayName: 'Pricing';
    icon: 'shoppingCart';
  };
  attributes: {
    heading: Schema.Attribute.String;
    plans: Schema.Attribute.Relation<'oneToMany', 'api::plan.plan'>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneRelatedArticles extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_related_articles';
  info: {
    description: '';
    displayName: 'related_articles';
    icon: 'bulletList';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneRelatedProducts extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_related_products';
  info: {
    displayName: 'Related_Products';
    icon: 'stack';
  };
  attributes: {
    heading: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneServices extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_services';
  info: {
    displayName: 'Services';
    icon: 'scissors';
  };
  attributes: {
    CTAs: Schema.Attribute.Component<'dynamic-zone.cta', false>;
    heading: Schema.Attribute.String;
    pages: Schema.Attribute.Relation<'oneToMany', 'api::page.page'>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_team_sections';
  info: {
    displayName: 'Team_Section';
    icon: 'user';
  };
  attributes: {
    avatar: Schema.Attribute.Component<'items.avatar', false>;
    cta: Schema.Attribute.Component<'dynamic-zone.cta', false>;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
    team_members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
  };
}

export interface DynamicZoneTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
    icon: 'emotionHappy';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    description: '';
    displayName: 'Footer';
    icon: 'apps';
  };
  attributes: {
    built_with: Schema.Attribute.String;
    copyright: Schema.Attribute.String;
    description: Schema.Attribute.String;
    designed_developed_by: Schema.Attribute.String;
    internal_links: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Relation<'oneToOne', 'api::logo.logo'>;
    policy_links: Schema.Attribute.Component<'shared.link', true>;
    social_media_links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalNavbar extends Struct.ComponentSchema {
  collectionName: 'components_global_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'bold';
  };
  attributes: {
    left_navbar_items: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Relation<'oneToOne', 'api::logo.logo'>;
    right_navbar_items: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface ItemsAvatar extends Struct.ComponentSchema {
  collectionName: 'components_items_avatars';
  info: {
    displayName: 'avatar';
    icon: 'user';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface ItemsBeforeAfterPair extends Struct.ComponentSchema {
  collectionName: 'components_items_before_after_pairs';
  info: {
    displayName: 'Before_After_Pair';
    icon: 'crop';
  };
  attributes: {
    after_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    after_label: Schema.Attribute.String;
    before_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_label: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ItemsGalleryItem extends Struct.ComponentSchema {
  collectionName: 'components_items_gallery_items';
  info: {
    displayName: 'Gallery_Item';
    icon: 'brush';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    kicker: Schema.Attribute.String;
    layout: Schema.Attribute.Enumeration<['square', 'wide', 'feature', 'tall']>;
    link_target: Schema.Attribute.Enumeration<['_self', '_blank']>;
    link_url: Schema.Attribute.String;
    priority: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface ItemsGraphCardTopItems extends Struct.ComponentSchema {
  collectionName: 'components_items_graph_card_top_items';
  info: {
    displayName: 'Graph_Card_Top_Items';
    icon: 'bulletList';
  };
  attributes: {
    number: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ItemsInput extends Struct.ComponentSchema {
  collectionName: 'components_items_inputs';
  info: {
    description: '';
    displayName: 'Input';
    icon: 'apps';
  };
  attributes: {
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      [
        'text',
        'email',
        'password',
        'submit',
        'textarea',
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'radio',
        'range',
        'reset',
        'search',
        'tel',
        'time',
        'url',
        'week',
      ]
    > &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface ItemsLeftNavbarItems extends Struct.ComponentSchema {
  collectionName: 'components_items_left_navbar_items';
  info: {
    displayName: 'Left_Navbar_Items';
    icon: 'bulletList';
  };
  attributes: {
    name: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface ItemsRayItems extends Struct.ComponentSchema {
  collectionName: 'components_items_ray_items';
  info: {
    description: '';
    displayName: 'Ray_Card_Items';
    icon: 'bulletList';
  };
  attributes: {
    item_1: Schema.Attribute.String;
    item_2: Schema.Attribute.String;
    item_3: Schema.Attribute.String;
  };
}

export interface ItemsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_items_service_cards';
  info: {
    displayName: 'Service_Card';
    icon: 'book';
  };
  attributes: {
    pages: Schema.Attribute.Relation<'oneToMany', 'api::page.page'>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['simple', 'outline', 'primary', 'muted']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_forms';
  info: {
    description: '';
    displayName: 'Form';
    icon: 'paperPlane';
  };
  attributes: {
    inputs: Schema.Attribute.Component<'items.input', true>;
  };
}

export interface SharedLaunches extends Struct.ComponentSchema {
  collectionName: 'components_shared_launches';
  info: {
    description: '';
    displayName: 'Launches';
    icon: 'rocket';
  };
  attributes: {
    description: Schema.Attribute.String;
    mission_number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    pages: Schema.Attribute.Relation<'oneToMany', 'api::page.page'>;
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface SharedOpeningHours extends Struct.ComponentSchema {
  collectionName: 'components_shared_opening_hours';
  info: {
    displayName: 'Opening_Hours';
    icon: 'clock';
  };
  attributes: {
    closed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    time: Schema.Attribute.String;
  };
}

export interface SharedPerks extends Struct.ComponentSchema {
  collectionName: 'components_shared_perks';
  info: {
    description: '';
    displayName: 'Perks';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'Section';
    icon: 'cursor';
  };
  attributes: {
    address: Schema.Attribute.String;
    address_label: Schema.Attribute.String;
    booking_url: Schema.Attribute.String;
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    email: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    map_city_label: Schema.Attribute.String;
    map_route_url: Schema.Attribute.String;
    opening_hours: Schema.Attribute.Component<'shared.opening-hours', true>;
    privacy_url: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
    users: Schema.Attribute.Component<'shared.user', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedSocialMediaIconLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_media_icon_links';
  info: {
    description: '';
    displayName: 'Social_Media_Icon_Links';
    icon: 'expand';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedSteps extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    description: '';
    displayName: 'Steps';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedUser extends Struct.ComponentSchema {
  collectionName: 'components_shared_users';
  info: {
    description: '';
    displayName: 'User';
    icon: 'user';
  };
  attributes: {
    firstname: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    job: Schema.Attribute.String;
    lastname: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.globe-card': CardsGlobeCard;
      'cards.graph-card': CardsGraphCard;
      'cards.ray-card': CardsRayCard;
      'cards.social-media-card': CardsSocialMediaCard;
      'dynamic-zone.brands': DynamicZoneBrands;
      'dynamic-zone.cta': DynamicZoneCta;
      'dynamic-zone.faq': DynamicZoneFaq;
      'dynamic-zone.features': DynamicZoneFeatures;
      'dynamic-zone.form-next-to-section': DynamicZoneFormNextToSection;
      'dynamic-zone.gallery': DynamicZoneGallery;
      'dynamic-zone.gallery-slider': DynamicZoneGallerySlider;
      'dynamic-zone.hero': DynamicZoneHero;
      'dynamic-zone.how-it-works': DynamicZoneHowItWorks;
      'dynamic-zone.launches': DynamicZoneLaunches;
      'dynamic-zone.pricing': DynamicZonePricing;
      'dynamic-zone.related-articles': DynamicZoneRelatedArticles;
      'dynamic-zone.related-products': DynamicZoneRelatedProducts;
      'dynamic-zone.services': DynamicZoneServices;
      'dynamic-zone.team-section': DynamicZoneTeamSection;
      'dynamic-zone.testimonials': DynamicZoneTestimonials;
      'global.footer': GlobalFooter;
      'global.navbar': GlobalNavbar;
      'items.avatar': ItemsAvatar;
      'items.before-after-pair': ItemsBeforeAfterPair;
      'items.gallery-item': ItemsGalleryItem;
      'items.graph-card-top-items': ItemsGraphCardTopItems;
      'items.input': ItemsInput;
      'items.left-navbar-items': ItemsLeftNavbarItems;
      'items.ray-items': ItemsRayItems;
      'items.service-card': ItemsServiceCard;
      'shared.button': SharedButton;
      'shared.form': SharedForm;
      'shared.launches': SharedLaunches;
      'shared.link': SharedLink;
      'shared.opening-hours': SharedOpeningHours;
      'shared.perks': SharedPerks;
      'shared.section': SharedSection;
      'shared.seo': SharedSeo;
      'shared.social-media-icon-links': SharedSocialMediaIconLinks;
      'shared.steps': SharedSteps;
      'shared.user': SharedUser;
    }
  }
}
