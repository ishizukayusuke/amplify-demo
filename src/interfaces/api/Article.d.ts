/**
 * Article インターフェース
 */
 
/** 投稿内容 */
export interface IArticle {
  id: string;
  title: string;
  body: string;
  timestamp: Date;
}