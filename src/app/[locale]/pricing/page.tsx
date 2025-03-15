import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import {useTranslations} from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

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

const PricingPage = (props: {
  params: { locale: string };
}) => {
  const { locale } = props.params;
  setRequestLocale(locale);
  const t = useTranslations('HomePage');

  return (
    <>
      <Breadcrumb pageName={t('price')} />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
