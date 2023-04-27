import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Composable Page
 * Id: f3580609-897c-4331-b657-0f7a3afaff06
 * Codename: composable_page
 */
export type ComposablePage = IContentItem<{
  /**
   * Components (modular_content)
   * Required: false
   * Id: 7b8891c5-1548-4f4c-b638-56dcb26e034a
   * Codename: components
   */
  components: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Title (text)
   * Required: false
   * Id: ea87e008-4cb1-4992-bc86-a9d486b97d88
   * Codename: title
   */
  title: Elements.TextElement;
}>;