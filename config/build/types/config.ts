export type Buildmode = "production" | "development";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: Buildmode;
  port: number;
}

export interface BuildOptions {
  mode: Buildmode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
