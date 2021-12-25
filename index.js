const googleInput = document.querySelector('.google-input')

const searchFunc = (e) => {
    if (e.key === 'Enter') {
        const input = googleInput.value;
        const splitedWords = input.split(' ');
        const transformedInput = splitedWords.join('+');
        console.log(transformedInput);
       window.location = `https://www.google.com/search?q=${transformedInput}&oq=&aqs=chrome.0.35i39i362l3j46i39i362j35i39i362l4.938295770j0j15&sourceid=chrome&ie=UTF-8`
        googleInput.value = '';
    }
};

googleInput.addEventListener('keypress', searchFunc);