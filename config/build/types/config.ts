import path from "path"
export type Buildmode = 'production' | 'development'

export interface BuildPaths {
    entry: string,
    build: string,
    html: string;
}

export interface BuildOptions {
    mode: Buildmode;
    paths: BuildPaths;
    isDev: boolean;
}