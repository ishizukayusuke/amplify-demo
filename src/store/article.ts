import Vue from 'vue';
import { IArticle } from '~/interfaces/api/Article';
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api';
import { listArticles } from '../graphql/queries';
import { createArticle } from '../graphql/mutations';
import { ListArticlesQuery, CreateArticleInput } from '~/interfaces/api/API';

/**
 * stateのインターフェース
 */
export interface IState {
  articles: IArticle[];
}
 
export const state = (): IState => ({
  articles: [],
});

export const getters = {
  getArticle: (state: IState) => (id: string): IArticle | undefined => {
    return state.articles.find((article) => article.id === id);
  },
};

export const mutations = {
  saveArticles(state: IState, articles: IArticle[]) {
    state.articles = articles;
  },
};

export const actions = {
  async fetchArticles(this: Vue, { commit }: any) {
    const result = await API.graphql(graphqlOperation(listArticles, {
      type: "post",
      sortDirection: 'DESC',
      limit: 20, //default = 10
    }));
    if ("data" in result && result.data) {
        const articles = result.data as ListArticlesQuery;
        commit('saveArticles', articles.listArticles?.items);
    }
  },

  async postArticle(this: Vue, _: any, createArticleInput: CreateArticleInput) {
    console.log(createArticleInput);
    createArticleInput.type = 'post'
    // await this.$axios.$post(ENDPOINTS.ARTICLES, payload);
    const res = await API.graphql(graphqlOperation(createArticle, { 
      input: createArticleInput
    })); 
  }
};
