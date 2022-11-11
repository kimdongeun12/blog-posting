import React from "react";

const PostingContext = React.createContext();

export const PostingProvider = PostingContext.Provider;
export const PostingConsumer = PostingContext.Consumer;

export default PostingContext;