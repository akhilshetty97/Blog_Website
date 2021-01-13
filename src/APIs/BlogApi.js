class BlogApi {
  fetchBlogApi() {
    return fetch(`https://api.theinnerhour.com/v1/bloglisting`);
  }
}

export default BlogApi;
