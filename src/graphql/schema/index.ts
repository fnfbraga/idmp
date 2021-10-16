import fs from "fs";
import path from "path";

export const types = fs.readFileSync(path.join(__dirname, "./types.graphql")).toString("utf-8");
export const enums = fs.readFileSync(path.join(__dirname, "./enums.graphql")).toString("utf-8");

export default [types, enums];
