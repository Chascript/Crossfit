import React from 'react';

export interface Props {
  jsonLd: Object;
}

export const GenerateSchema = ({
  jsonLd,
}: Props) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
);

export default GenerateSchema;
