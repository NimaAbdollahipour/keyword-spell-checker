import { findWord, findList, match } from './src/finder';
import { findClosestWord, levenshtein } from './src/levenshtein';
import { filter, simpleFilter, test, match as fuzzyMatch } from "./src/fuzzy";

export default {
    match, findWord, findList, findClosestWord, levenshtein, filter, simpleFilter, test, fuzzyMatch
}