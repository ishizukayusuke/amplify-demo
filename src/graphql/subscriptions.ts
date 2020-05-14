/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle($owner: String!) {
    onCreateArticle(owner: $owner) {
      type
      id
      title
      body
      owner
      timestamp
    }
  }
`;
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
      type
      id
      title
      body
      owner
      timestamp
    }
  }
`;
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
      type
      id
      title
      body
      owner
      timestamp
    }
  }
`;
