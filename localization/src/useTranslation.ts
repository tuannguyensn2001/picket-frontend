import {
  useTranslation as useI18nTranslation,
  UseTranslationOptions,
  UseTranslationResponse,
} from 'react-i18next';
import { KeyPrefix, Namespace } from 'i18next';
import { DefaultNamespace } from 'react-i18next/TransWithoutContext';

export function useTranslation<
  N extends Namespace = DefaultNamespace,
  TKPrefix extends KeyPrefix<N> = undefined
>(
  ns?: N | Readonly<N>,
  options?: UseTranslationOptions<TKPrefix>
): UseTranslationResponse<N, TKPrefix> {
  return useI18nTranslation(ns, options);
}
