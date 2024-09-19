# Bete Liq Education Platform

> The Bete Liq Education Platform is a comprehensive web application designed to provide spiritual education and resources to members of the Ethiopian Orthodox Tewahdo Church. The platform features a blog section for
> teachers to post spiritual content, a course section for students to access audio and video courses, a book library, a calendar for accessing information about holy day ceremonies, and a chat feature to connect with
> fellow Christians.

![Logo](./public/assets/images/home/for_teachers.png)

## Features

- Blog section for teachers to post spiritual content
- Course section for students to access audio and video courses
- Book library with large database of books
- Calendar for accessing information about holy day ceremonies
- Chat feature to connect with fellow Christians
- Modern web technologies, including React and Next.js
- Scalable, performant, and secure system architecture
- Comprehensive user guide and developer guide
- Integration and interoperability with other systems and technologies

## CONTRIBUTING

### Translation

- The platform is currently available in English. Only the some parts of the home page are translated to Amharic and Afaan Oromo.

- You can contribute to the translation of the platform by translating the content in the `src/locales` directory.

- To Add Translation to current languages, you can go to the language file `src/locales/[language].js` and change the values from english to the desired [language].

For example, to add translation to Amharic, you can go to the `src/locales/am.js` file and change the values from english to Amharic.

Change this:

```javascript
// src/locales/am.js
{
    Book: "Book",
    Course: "Course",
}
```

To this:

```javascript
// src/locales/am.js
{
    Book: "መጽሐፍ",
    Course: "ትምህርት",
}
```

- The platform uses i18n for translation. You can add a new language by creating a new file as [language].js in the `public/locales` directory and adding the translation content in the `config-lang.js` and `i18n.js` files. You can copy the english file and change the values to the desired language.

## Installation

Clone the repository:

```bash
git clone https://github.com/BisRyy/bet.git
```

### USING YARN (Recommend)

- yarn install
- yarn dev

### USING NPM

- npm i OR npm i --legacy-peer-deps
- npm run dev

### PRODUCTION

- yarn build
- yarn start

## Author

[Bisrat Kebere](https://bisry.me)
