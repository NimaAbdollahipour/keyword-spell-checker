export function findWord(
    query: string,
    list: string[],
    caseSenstive?: boolean
): string;
export function findList(
    query: string,
    list: string[],
    limit?: number,
    caseSenstive?: boolean
): { word: string; score: number }[];
export function match(
    query: string,
    item: string,
    caseSensitive: boolean
): { word: string; score: number };

export function findClosestWord(word: string, list: string[]): string;
export function levenshtein(a: string, b: string): number;

export function filter(list: string[], query: string): string[];
export function simpleFilter(list: string[], query: string): string[];
export function test(value: any): boolean;
export function fuzzyMatch(input: string, pattern: string): boolean;

declare module "your-module-name" {
    const _default: {
        match: typeof match;
        findWord: typeof findWord;
        findList: typeof findList;
        findClosestWord: typeof findClosestWord;
        levenshtein: typeof levenshtein;
        filter: typeof filter;
        simpleFilter: typeof simpleFilter;
        test: typeof test;
        fuzzyMatch: typeof fuzzyMatch;
    };

    export = _default;
}
