<div id="top"></div>


<h1 align="center">Welcome || Bienvenido || Salut || Huānyíng || Khush Amdeed</h1>


# shallow-same

Stand alone JavaScript utility to compare numbers, strings, arrays, and objects.
<br/><br/>

<!-- TABLE OF CONTENTS -->
## Table of Contents
<details>
  <summary>Click to view</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
<br/><br/>


<!-- ABOUT THE PROJECT -->
## About The Project

Comparing data values is a part of almost every development process. For example, in the case of back-end development, we want to compare:
- response status codes
- authentication tokens
- meta objects
- user history
- data validations
etc

While in the case of front-end development, we want to compare:
- previous and next state objects
- classes for conditional styling
- enums and constants
- data validations
etc

Till now, we have been using the strict equality operator (===) to compare the values, but isn't it annoying if we get to see these operators once in every 2-3 lines of code? (assuming we are validating the form values submitted by the user, and doing the same kind of validation in server side as well before sending it to the database)?

The package 'shallow-same' is a great replacement for the strict equality operator (===) to increase developer's productivity and engagement to the problem solution.

### Comparing Objects Is A Great Challenge

One of the amazing features of this tool is that it compares the two objects "shallowly" which means it will compare every key-value pair between the two objects. Which means it is going to compare the two object irrespective of their members order.

### Last But Not Least

This library is very **light-weight** (till dated 6/27/2022) compared to all the comparison libraries out there. I will be making sure I keep on reducing the size of this library in the later releases.


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- INSTALLATION -->
## Installation

```sh
$ yarn add shallow-same
# npm v5+
$ npm install shallow-same
# before npm v5
$ npm install --save shallow-same
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

```js
const ss = require('shallow-same');
 
// Dummy Data
const number1 = 1;
const number2 = -1;
const number3 = 1;

const string1 = "shoaib amin";
const string2 = "john doe";
const string3 = "shoaib amin";

const array1 = [1, "hello", 'world', {}];
const array2 = ['hello', {}, 1, "world"];
const array3 = [1, "hello", 'world', {}];

const object1 = { hello: 'world', shoaib: 'amin' };
const object2 = { amin: 'shoaib', world: 'hello' };
const object3 = { shoaib: 'amin', hello: 'world' };

ss(number1, number2);
// → false
ss(number1, number3);
// → true

ss(string1, string2);
// → false
ss(string1, string3);
// → true

ss(array1, array2);
// → false
ss(array1, array3);
// → true

ss(object1, object2);
// → false
ss(object1, object3);
// → true
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AwesomeFeature`)
3. Commit your Changes (`git commit -m 'Add some AwesomeFeature'`)
4. Push to the Branch (`git push origin feature/AwesomeFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

My LinkedIn Profile - [Shoaib Amin](https://www.linkedin.com/in/shoaib-sivany-a5a431126/)

My Email - <a href="mailto:shoaibsivany@hotmail.com">shoaibsivany@hotmail.com</a>

Project Link: [https://github.com/shoaibamin-dev/shallow-same-npm-package](https://github.com/shoaibamin-dev/shallow-same-npm-package)

<p align="right">(<a href="#top">back to top</a>)</p>
