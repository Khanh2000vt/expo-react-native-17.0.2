export interface BasePostProps {
  post: any;
  onPress: (item: any, liked: boolean) => void;
  amountReplies: number;
  amountLikes: number;
  initStateLike: boolean;
  detail?: boolean;
}
