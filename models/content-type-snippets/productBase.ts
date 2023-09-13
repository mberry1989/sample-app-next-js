import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@6.5.0'
 *
 * Product base
 * Id: 4d23f6ce-47f0-4312-bdbd-74dcb8d45342
 * Codename: product_base
 */
export type ProductBase = IContentItem<{
    /**
     * Description (text)
     * Required: false
     * Id: 4b5078e3-a8f9-4078-82b7-e712eff00136
     * Codename: product_base__description
     *
     * Write a description that highlights the product's features and benefits. Use persuasive language to convey the value.
     */
    productBaseDescription: Elements.TextElement;

    /**
     * Main image (asset)
     * Required: false
     * Id: aac1b39d-44fb-429c-8ef2-30de28895682
     * Codename: product_base__main_image
     *
     * Use high-quality product images. Ensure the image represents the product's color and size.
     */
    productBaseMainImage: Elements.AssetsElement;

    /**
     * Name (text)
     * Required: true
     * Id: ab4c9424-3b74-4814-8cbe-5ab046d21992
     * Codename: product_base__name
     *
     * Include key product attributes, such as brand name or model.
     */
    productBaseName: Elements.TextElement;
}>;