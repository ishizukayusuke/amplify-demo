/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateArticleInput = {
  type: string,
  id?: string | null,
  title: string,
  body: string,
  owner?: string | null,
  timestamp: number,
};

export type ModelArticleConditionInput = {
  type?: ModelStringInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateArticleInput = {
  type?: string | null,
  id: string,
  title?: string | null,
  body?: string | null,
  owner?: string | null,
  timestamp?: number | null,
};

export type DeleteArticleInput = {
  id?: string | null,
};

export type ModelArticleFilterInput = {
  type?: ModelStringInput | null,
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle:  {
    __typename: "Article",
    type: string,
    id: string | null,
    title: string,
    body: string,
    owner: string | null,
    timestamp: number,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle:  {
    __typename: "Article",
    type: string,
    id: string | null,
    title: string,
    body: string,
    owner: string | null,
    timestamp: number,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle:  {
    __typename: "Article",
    type: string,
    id: string | null,
    title: string,
    body: string,
    owner: string | null,
    timestamp: number,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle:  {
    __typename: "Article",
    type: string,
    id: string | null,
    title: string,
    body: string,
    owner: string | null,
    timestamp: number,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      type: string,
      id: string | null,
      title: string,
      body: string,
      owner: string | null,
      timestamp: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateArticleSubscriptionVariables = {
  owner: string,
};

export type OnCreateArticleSubscription = {
  onCreateArticle:  {
    __typename: "Article",
    type: string,
    id: string | null,
    title: string,
    body: string,
    owner: string | null,
    timestamp: number,
  } | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle:  {
    __typename: "Article",
    type: string,
    id: string | null,
    title: string,
    body: string,
    owner: string | null,
    timestamp: number,
  } | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle:  {
    __typename: "Article",
    type: string,
    id: string | null,
    title: string,
    body: string,
    owner: string | null,
    timestamp: number,
  } | null,
};
