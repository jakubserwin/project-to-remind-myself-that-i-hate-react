import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://barcelona-urban-mobility-graphql-api.netlify.app/graphql',
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client',
      config: {
        useTypeImports: true,
        skipTypename: true,
      },
      plugins: [],
    },
    './schema.graphql': {
      config: {
        useTypeImports: true,
      },
      plugins: ['schema-ast'],
    },
  },
}

export default config
