import { TsConfigPluginOptions } from "@typeDefs";
export * from "./types/public";

export {
    useGatsbyConfig,
    useGatsbyNode,
} from "./use-gatsby-api";
export {
    withProjectMetaConfig,
    withProjectMetaNode,
} from "./with-project-meta";
export {
    includePlugins,
    getPlugins,
} from "./include-plugins";

export const createOptions = (options: TsConfigPluginOptions) => options;