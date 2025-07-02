// next-intl.config.ts
import type { NextIntlConfig } from 'next-intl';

const nextIntlConfig: NextIntlConfig = {
    locales: ['en', 'he'],      // языки проекта
    defaultLocale: 'en',        // язык по умолчанию
    // other config options if needed
};

export default nextIntlConfig;
