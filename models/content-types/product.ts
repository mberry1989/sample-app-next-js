import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type ProductBase } from '../content-type-snippets/productBase';
import { type ProductCategory } from '../taxonomies/productCategory';
import { type SEOMetadata } from '../content-type-snippets/SEOMetadata';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Product
 * Id: 28f3a148-bcdd-5a1a-b821-d54b2a94dabd
 * Codename: product
 */
export type Product = IContentItem<{
  /**
   * Product category (taxonomy)
   * Required: true
   * Id: c03158ef-98ea-41f5-afdd-dc6cba88f999
   * Codename: category
   */
  category: Elements.TaxonomyElement<ProductCategory>;

  /**
   * Price (number)
   * Required: true
   * Id: 07b0eeae-1a51-5414-a6f9-0ddbb2e8e21a
   * Codename: price
   *
   * Price in Euros. ⚠️ Price element is here just for an illustration and should not be in production projects.
   */
  price: Elements.NumberElement;

  /**
   * Slug (url_slug)
   * Required: false
   * Id: cb72527a-b7c5-5591-9a80-8415a799d4a6
   * Codename: slug
   */
  slug: Elements.UrlSlugElement;
}> &
  ProductBase &
  SEOMetadata;
