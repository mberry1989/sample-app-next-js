import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type GuidelinesForContentCreators } from '../content-type-snippets/guidelines_for_content_creators';
import { type Sitemap } from '../taxonomies/sitemap_538125f';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Office
 * Id: e097306b-3893-4a42-9973-2525fad14d66
 * Codename: office
 */
export type Office = IContentItem<{
  /**
   * City (text)
   * Required: false
   * Id: 95477abc-d6b4-a6b3-5b72-c92763da55bf
   * Codename: city
   */
  city: Elements.TextElement;

  /**
   * Country (text)
   * Required: false
   * Id: 4fbc7779-652d-7716-2673-7419aaaceed1
   * Codename: country
   */
  country: Elements.TextElement;

  /**
   * Email (text)
   * Required: false
   * Id: 251dc38f-43a3-d924-a328-8708ecb00ef1
   * Codename: email
   */
  email: Elements.TextElement;

  /**
   * Name (text)
   * Required: false
   * Id: bb81a11d-886c-2a32-e480-29f01cea667f
   * Codename: name
   */
  name: Elements.TextElement;

  /**
   * Phone (text)
   * Required: false
   * Id: 2ac708e2-cd0e-67b0-67f8-71725625dc6d
   * Codename: phone
   */
  phone: Elements.TextElement;

  /**
   * Sitemap (taxonomy)
   * Required: false
   * Id: 93e978da-a9dd-43eb-a16a-ace55c1a5245
   * Codename: sitemap
   */
  sitemap: Elements.TaxonomyElement<Sitemap>;

  /**
   * State (text)
   * Required: false
   * Id: 08df2f10-52b8-d451-fab1-b6da8ddb3fd2
   * Codename: state
   */
  state: Elements.TextElement;

  /**
   * Street (text)
   * Required: false
   * Id: f7eb7ab2-4e41-aca0-7e93-dbbbdca330eb
   * Codename: street
   */
  street: Elements.TextElement;

  /**
   * Zip code (text)
   * Required: false
   * Id: e7141da8-8792-a66d-d1c8-1fe704758393
   * Codename: zip_code
   */
  zipCode: Elements.TextElement;
}> &
  GuidelinesForContentCreators;
