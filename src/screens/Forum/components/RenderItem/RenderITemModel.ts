export interface RenderItemProps {
  post: any;
  onPress: (
    item: any,
    liked: boolean,
    amountLikes: number,
    amountReply: number
  ) => void;
}
