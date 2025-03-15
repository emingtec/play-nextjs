import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import {use} from 'react';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'HomePage',
  });

  return {
    title: t('title'),
    description: t('price'),
  };
}

type Props = {
  params: Promise<{locale: string}>;
};

export default function PricingPage({params}: Props) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('HomePage');

  return (
    <>
      <Breadcrumb pageName={t('price')} />
      <Pricing />
      <Faq />
    </>
  );
}
