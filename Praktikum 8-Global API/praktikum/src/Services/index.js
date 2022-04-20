import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (DataDikirim) => PostAPI('posts', DataDikirim);
const deleteNewsBlog = (DataDihapus) => DeleteAPI('posts', DataDihapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;