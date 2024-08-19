import runAllFinderTests from "./finderTest.js";
import runAllFuzzyTests from "./fuzzyTest.js";
import runAllLevenTests from "./lenevshteinTest.js";

console.log("[FINDER TESTS]\n");
runAllFinderTests();
console.log("[FUZZY TESTS]\n");
runAllFuzzyTests();
console.log("[LEVENSHTEIN TESTS]\n");
runAllLevenTests();