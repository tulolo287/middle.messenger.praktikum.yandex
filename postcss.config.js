export const plugins = [
  [
    'postcss-preset-env',
    {
      features: {
        'nesting-rules': {
          noIsPseudoSelector: false,
        },
      },
    },
  ],
];
