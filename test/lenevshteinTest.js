// levenshtein.test.js
import { levenshtein, findClosestWord } from '../src/levenshtein.js';

// Test cases for the levenshtein function
const testLevenshteinFunction = () => {
    console.log("Running levenshtein Function Tests...");

    console.log("Test 1: ", levenshtein("kitten", "sitting", false)); // Should return 3
    console.log("Test 2: ", levenshtein("flaw", "lawn", false)); // Should return 2
    console.log("Test 3: ", levenshtein("gumbo", "gambol", false)); // Should return 2
    console.log("Test 4: ", levenshtein("book", "back", false)); // Should return 2
    console.log("Test 5: ", levenshtein("book", "BOOK", false)); // Should return 0 (case insensitive)
    console.log("Test 6: ", levenshtein("book", "BOOK", true)); // Should return 4 (case sensitive)
    console.log("Test 7: ", levenshtein("", "test", false)); // Should return 4 (insertion only)
    console.log("Test 8: ", levenshtein("test", "", false)); // Should return 4 (deletion only)
    console.log("Test 9: ", levenshtein("same", "same", false)); // Should return 0 (exact match)
};

// Test cases for the findClosestWord function
const testFindClosestWordFunction = () => {
    console.log("Running findClosestWord Function Tests...");

    const dictionary = ["apple", "banana", "orange", "grape", "pineapple", "pear", "apricot"];

    console.log("Test 1: ", findClosestWord("aple", dictionary, false)); // Should return "apple"
    console.log("Test 2: ", findClosestWord("ornge", dictionary, false)); // Should return "orange"
    console.log("Test 3: ", findClosestWord("grap", dictionary, false)); // Should return "grape"
    console.log("Test 4: ", findClosestWord("pple", dictionary, false)); // Should return "apple"
    console.log("Test 5: ", findClosestWord("Pineaple", dictionary, false)); // Should return "pineapple" (case insensitive)
    console.log("Test 6: ", findClosestWord("Pineaple", dictionary, true)); // Should return "pineapple" (case sensitive)
    console.log("Test 7: ", findClosestWord("peach", dictionary, false)); // Should return "pear" (closest match)
    console.log("Test 8: ", findClosestWord("berry", dictionary, false)); // Should return an empty string (no close match)
};

// Function to run all tests
const runAllLevenTests = () => {
    testLevenshteinFunction();
    testFindClosestWordFunction();
};

// Run all tests
runAllLevenTests();

export default runAllLevenTests;