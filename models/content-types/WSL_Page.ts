import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Block_CallToAction } from './Block_CallToAction';
import { type Block_Carousel } from './Block_Carousel';
import { type Block_ContentChunk } from './Block_ContentChunk';
import { type Block_Grid } from './Block_Grid';
import { type Block_HeroUnit } from './Block_HeroUnit';
import { type Block_Stack } from './Block_Stack';
import { type Block_Testimonial } from './Block_Testimonial';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * 💡 Page
 * Id: af9ea390-7650-44f8-80e2-15d151cf67c9
 * Codename: page
 */
export type WSL_Page = IContentItem<{
  /**
   * Content (modular_content)
   * Required: false
   * Id: 0a60453b-1048-4d5e-b1ff-2f31b5027cca
   * Codename: content
   */
  content: Elements.LinkedItemsElement<
    | Block_CallToAction
    | Block_Stack
    | Block_Carousel
    | Block_HeroUnit
    | Block_Grid
    | Block_ContentChunk
    | Block_Testimonial
  >;

  /**
   * Subpages (subpages)
   * Required: false
   * Id: 5ab7ce82-dc6d-49e6-abef-2fe24e6d8fa3
   * Codename: subpages
   */
  subpages: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Title (text)
   * Required: false
   * Id: f0de57ce-52e4-4f77-9756-e1719d740b37
   * Codename: title
   */
  title: Elements.TextElement;

  /**
   * URL (url_slug)
   * Required: false
   * Id: b2850e82-078c-4836-828b-22e8d9b2c103
   * Codename: url
   */
  url: Elements.UrlSlugElement;
}>;