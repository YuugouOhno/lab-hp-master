import { main as post } from "./main_posts";

// GASから参照したい変数はglobalオブジェクトに渡してあげる必要がある
(global as any).post = post;