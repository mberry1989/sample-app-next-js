import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type GuidelinesForContentCreators } from '../content-type-snippets/guidelines_for_content_creators';
import { type Manufacturer } from '../taxonomies/manufacturer';
import { type Metadata } from '../content-type-snippets/metadata';
import { type ProductStatus } from '../taxonomies/product_status';
import { type Sitemap } from '../taxonomies/sitemap_538125f';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Brewer
 * Id: 7bc932b3-ce2a-4aa7-954e-04cbcbd214fc
 * Codename: brewer
 */
export type Brewer = IContentItem<{
  /**
   * Image (asset)
   * Required: false
   * Id: d0c1e9e7-7d5d-e61f-8564-56a8cb758cb8
   * Codename: image
   *
   * Upload one product image; the recommended size is 300 × 300 px.
   */
  image: Elements.AssetsElement;

  /**
   * Long description (rich_text)
   * Required: false
   * Id: 14510bef-fd86-7d5d-992a-c1e091cbcb97
   * Codename: long_description
   *
   * Include a full product description.
   */
  longDescription: Elements.RichTextElement;

  /**
   * Manufacturer (taxonomy)
   * Required: false
   * Id: 53b6bddb-fe8a-a8b2-9765-343479bf9fc2
   * Codename: manufacturer
   */
  manufacturer: Elements.TaxonomyElement<Manufacturer>;

  /**
   * Price (number)
   * Required: false
   * Id: 48ebe0fc-afe7-2b93-d351-0e352332bc52
   * Codename: price
   *
   * Include a product price.
   */
  price: Elements.NumberElement;

  /**
   * Product name (text)
   * Required: false
   * Id: 01d6c6c7-92ff-a675-e413-861e5a9a4034
   * Codename: product_name
   *
   * Include a product display name.
   */
  productName: Elements.TextElement;

  /**
   * Product status (taxonomy)
   * Required: false
   * Id: 960d0011-ff3b-41ac-1447-8eac6ee66eaa
   * Codename: product_status
   *
   * Add a product status if the product is included in a special offering.
   */
  productStatus: Elements.TaxonomyElement<ProductStatus>;

  /**
   * Short description (rich_text)
   * Required: false
   * Id: 8c235a7f-034e-f803-e612-9c47c8a49506
   * Codename: short_description
   *
   * Include a short description that fits within 160 characters.
   */
  shortDescription: Elements.RichTextElement;

  /**
   * Sitemap (taxonomy)
   * Required: false
   * Id: 7632f3bb-2e53-438d-933c-4e8b6c035cb1
   * Codename: sitemap
   */
  sitemap: Elements.TaxonomyElement<Sitemap>;

  /**
   * URL pattern (url_slug)
   * Required: false
   * Id: 737c85be-f532-c8fe-a308-2a0f2c512f3e
   * Codename: url_pattern
   *
   * Provide a SEO-friendly URL.
   */
  urlPattern: Elements.UrlSlugElement;
}> &
  GuidelinesForContentCreators &
  Metadata;
