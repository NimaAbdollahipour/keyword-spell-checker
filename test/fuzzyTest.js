// filterFunctions.test.js
import { simpleFilter, test, match, filter } from '../src/fuzzy.js';

// Test cases
const testSimpleFilter = () => {
    console.log("Running simpleFilter Tests...");

    const array = ["apple", "banana", "orange", "grape"];

    console.log("Test 1: ", simpleFilter("app", array)); // Should return "apple"
    console.log("Test 2: ", simpleFilter("ban", array)); // Should return "banana"
    console.log("Test 3: ", simpleFilter("gra", array)); // Should return "grape"
    console.log("Test 4: ", simpleFilter("berry", array)); // Should return "" (empty string)
};

const testTestFunction = () => {
    console.log("Running test Function Tests...");

    console.log("Test 1: ", test("app", "apple")); // Should return true
    console.log("Test 2: ", test("ora", "orange")); // Should return true
    console.log("Test 3: ", test("berry", "grape")); // Should return false
    console.log("Test 4: ", test("Ban", "banana")); // Should return true (case insensitive)
};

const testMatchFunction = () => {
    console.log("Running match Function Tests...");

    console.log("Test 1: ", match("app", "apple")); // Should return an object with score > 0
    console.log("Test 2: ", match("app", "APPLE", { caseSensitive: true })); // Should return null (case sensitive)
    console.log("Test 3: ", match("ora", "orange")); // Should return an object with score > 0
    console.log("Test 4: ", match("berry", "grape")); // Should return null (no match)
    console.log("Test 5: ", match("an", "banana", { pre: "<b>", post: "</b>" })); // Should return a rendered string with <b>an</b>
};

const testFilterFunction = () => {
    console.log("Running filter Function Tests...");

    const array = ["apple", "banana", "orange", "grape"];

    console.log("Test 1: ", filter("app", array)); // Should return an array with the "apple" object
    console.log("Test 2: ", filter("a", array)); // Should return all elements sorted by relevance
    console.log("Test 3: ", filter("berry", array)); // Should return an empty array (no match)

    const complexArray = [
        { name: "apple", category: "fruit" },
        { name: "banana", category: "fruit" },
        { name: "carrot", category: "vegetable" },
        { name: "grape", category: "fruit" },
    ];

    console.log("Test 4: ", filter("fruit", complexArray, { extract: (item) => item.category })); // Should return all fruits
    console.log("Test 5: ", filter("car", complexArray, { extract: (item) => item.name })); // Should return the "carrot" object
};

const runAllFuzzyTests = () => {
    testSimpleFilter();
    testTestFunction();
    testMatchFunction();
    testFilterFunction();
};

// Run all tests
runAllFuzzyTests();

export default runAllFuzzyTests;
