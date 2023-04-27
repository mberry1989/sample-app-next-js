import { GetStaticProps } from "next";
import { FC } from "react";
import { Content } from "../components/shared/Content";
import { AppPage } from "../components/shared/ui/appPage";
import { getItemByCodename } from "../lib/kontentClient";
import { Page, contentTypes } from "../models"
import { pageCodenames } from "../lib/collectionCodenames";

type Props = Readonly<{
  page: Page;
}>;

const Component: FC<Props> = props => (
  <AppPage itemId={props.page.system.id}>
    <h1
      data-kontent-element-codename={contentTypes.page.elements.title.codename}
    >
      {props.page.elements.title.value}
    </h1>
    {props.page.elements.content.linkedItems.map(piece => (
      <Content key={piece.system.id} item={piece as any} />
    ))}
  </AppPage>
);

export const getStaticProps: GetStaticProps<Props> = async context => {
  const page = await getItemByCodename<Page>(pageCodenames.aboutUs, !!context.preview);

  return {
    props: { page },
  };
};

export default Component;