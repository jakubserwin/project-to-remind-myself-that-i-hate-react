import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://api.digitransit.fi/routing/v1/routers/finland/index/graphql',
  // this cannot be used like
  // documents: ['src/**/*.tsx', 'src/**/*.ts'],
  documents: ['src/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
      config: {
        useTypeImports: true,
        skipTypename: true,
      },
      plugins: [],
    },
    './schema.graphql': {
      schema: 'https://api.digitransit.fi/routing/v1/routers/finland/index/graphql',
      plugins: ['schema-ast']
    },
  },
}

export default config
