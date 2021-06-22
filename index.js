const axios = require("axios");
const fs = require("fs");

const textProfile = `
## Hi there, I'm Khanh - aka HKhansh 👋

- 🔭 I’m currently studying at Ho Chi Minh City University of Technology (HUTECH) not HCMUT 😢.
- 🌱 I’m currently learning new languages and technologies is what i am passionate about.
<!-- - 👯 I’m looking to collaborate on ... -->
- 🤔 I’m looking for help with study group.
<!-- - 💬 Ask me about ... -->
- 📫 How to reach me: [<img alt="hkhansh27 | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]&nbsp; [<img alt="hkhansh27 | Facebook" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg" />][facebook] &nbsp;[<img alt="email | Email" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg" />][gmail]
<!-- - 😄 Pronouns: -->
- ⚡ Fun fact: I am a cheerful and cute boy 🥲

[linkedin]: https://linkedin.com/in/hkhansh27
[facebook]: https://www.facebook.com/hkhansh27
[gmail]: mailto:khanh201011@gmail.com

<br />
<br />

![Khanh Huu Huynh's GitHub starts(https://github-readme-stats.vercel.app/api?username=hkhansh27&show_icons=true&theme=cobalt)]
`;

const getQuote = async () => {
  try {
    const { data } = await axios.get("https://quotes.rest/qod?language=en");
    const quote = data.contents.quotes[0].quote;
    const author = data.contents.quotes[0].author;

    console.log("new quote", `"${quote}"`);

    return {
      quote,
      author,
    };
  } catch (err) {
    console.error(err.message);
    return {};
  }
};

const generate = async () => {
  const { quote, author } = await getQuote();

  if (!quote) return;

  fs.writeFileSync("README.md", `> ${quote} \n\n*${author}* ${textProfile}`);
};

generate();
