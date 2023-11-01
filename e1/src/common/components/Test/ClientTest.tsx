"use client";

import {useTranslations} from 'next-intl';


const ClientTest = () => {
    const t = useTranslations('home');

  return <p>{t("title")}</p>;
};

export default ClientTest;
