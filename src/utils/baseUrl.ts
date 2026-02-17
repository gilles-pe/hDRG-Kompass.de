type ImportMetaWithOptionalEnv = ImportMeta & {
  env?: {
    BASE_URL?: string
  }
}

export function getBaseUrl() {
  return (import.meta as ImportMetaWithOptionalEnv).env?.BASE_URL ?? '/'
}
