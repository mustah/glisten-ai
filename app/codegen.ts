import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'http://127.0.0.1:1337/graphql': {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        }
      },
    },
  ],
  generates: {
    [process.cwd() + '/src/graphql/generated/gql.ts']: {
      plugins: [
        'typescript',
        'typescript-operations',
        'typed-document-node',
      ],
      config: {
        omitOperationSuffix: true,
        preResolveTypes: true,
        dedupeFragments: true,
      },
    },
  },
};

export default config;
