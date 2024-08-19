# keyword-spell-checker

## How to use

For spell checking finder and levenshtein are recommended

Fuzzy can be used for use cases such as auto complete (can find incomplete words but not good at finding words with spelling errors)

### finder

```javascript
import {findWord, findList} from 'keyword-spell-checker'

const list = ["apple", "orange", "banana","pineapple"];
const query = "app"

/*
arg1=>query: word to find
arg2=>list: list of all words (examples are in data/english.txt)
arg3=>caseSenstive: boolean

output=> string
*/
console.log(findWord(query, list, false)) 
/*
arg1=>query: word to find
arg2=>list: list of all words (examples are in data/english.txt)
arg3=>limit: number (number of words that should be returned)
arg4=>caseSenstive: boolean

output=> [{word:"someword",score:2},...]
*/
console.log(findList(query, list, 2, false))
```

### levenshtein

```javascript
import {findClosestWord} from 'keyword-spell-checker' // adjust this based on your folder structure

const list = ["apple", "orange", "banana","pineapple"];
const missspelledword = "app"

/*
arg1=>missspelledword: word to find
arg2=>dictionary: list of all words (examples are in data/english.txt)
arg3=>caseSenstive: boolean

output=> string
*/
console.log(findClosestWord(missspelledword, dictionary, false))
```

### fuzzy

```javascript
import {filter, simpleFilter} from 'keyword-spell-checker'

const array = ["apple", "orange", "banana","pineapple"];
const query = "app"
const opts = {
	pre:"",
	post:"",
	caseSenstive:true
}
/*
arg1=>query: word to find
arg2=>array: list of all words (examples are in data/english.txt)

output=> string
*/
console.log(simpleFilter(query, array))

/*
arg1=>query: word to find
arg2=>array: list of all words (examples are in data/english.txt)
arg3=>opts: options (pre and post can be used when rendering for example pre="<p>", post="</p>")
output=> [{rendered:"", score:number},...]
*/
console.log(filter(query, array, opts))
```
