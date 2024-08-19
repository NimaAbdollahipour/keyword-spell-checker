import { match, findWord, findList } from '../src/finder.js';

const tester = (index, expected, result, condition) => {
    let success = false;

    // Helper function to compare arrays
    const arraysEqual = (a, b) => {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    };

    if (Array.isArray(expected) && Array.isArray(result)) {
        success = arraysEqual(expected, result);
    } else if (condition === "=") {
        success = expected === result;
    } else if (condition === ">") {
        success = result > expected;
    } else if (condition === "<") {
        success = result < expected;
    }

    console.log(`Test ${index}: ${success ? `[SUCCESS]: \nRESULT: ${JSON.stringify(result)}\n` : `[FAILED]: \nEXPECTED: ${JSON.stringify(expected)} \nGOT: ${JSON.stringify(result)}\n`}`);
};


// Test cases for the match function
const testMatchFunction = () => {
    console.log("Running match Function Tests...");

    tester(1, true, match("app", "apple", false).score > 0, "="); // Should return a positive score
    tester(2, true, match("app", "APPLE", false).score > 0, "="); // Should return a positive score (case insensitive)
    tester(3, 0, match("app", "berry", false).score, "="); // Should return a score of 0
    tester(4, true, match("banana", "ban", false).score > 0, "="); // Should return a positive score with a length penalty
    tester(5, true, match("a", "alphabet", false).score > 0, "="); // Should return a positive score with bonuses for consecutive matches
    tester(6, true, match("apple", "apple", false).score > 0, "="); // Should return a high score (perfect match)
    tester(7, true, match("berry", "strawberry", true).score > 0, "="); // Should return a positive score (case sensitive)
    tester(8, true, match("berry", "strawberry", false).score > 0, "="); // Should return a positive score (case insensitive)
};

// Test cases for the findWord function
const testFindWordFunction = () => {
    console.log("Running findWord Function Tests...");

    const list = ["apple", "banana", "orange", "grape", "pineapple"];

    tester(1, "apple", findWord("app", list, false), "=");
    tester(2, "pineapple", findWord("pine", list, false), "=");
    tester(3, "orange", findWord("orange", list, true), "="); 
    tester(4, "grape", findWord("grapefruit", list, false), "="); 
    tester(5, "banana", findWord("branch", list, false), "="); 
};

// Test cases for the findList function
const testFindListFunction = () => {
    console.log("Running findList Function Tests...");

    const list = ["apple", "banana", "orange", "grape", "pineapple", "apricot", "pear"];

    tester(1, ["apple", "grape", "apricot"], findList("ap", list, 3, false)?.map((item)=>item.word), "="); // Should return top 3 matches
    tester(2, ["pear", "grape"], findList("pe", list, 2, false)?.map((item) => item.word), "="); // Should return top 2 matches
    tester(3, ["pear", "apple"], findList("berry", list, 2, false)?.map((item) => item.word), "=");
    tester(4, ["apricot", "grape", "pear", "orange", "apple"], findList("fruit", list, 5, false)?.map((item) => item.word), "=");// Should return empty array, no matches
    tester(5, ["apple", "grape", "apricot", "pineapple", "pear", "banana", "orange"], findList("ap", list, 10, false)?.map((item) => item.word), "=");
};

// Function to run all tests
const runAllFinderTests = () => {
    testMatchFunction();
    testFindWordFunction();
    testFindListFunction();
};

// Run all tests
runAllFinderTests();

export default runAllFinderTests;
