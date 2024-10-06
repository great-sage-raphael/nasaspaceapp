const apiKey = 'AIzaSyC-o2HLyqvRA2wo4B-4kes_Z7fegWxlCsUY';
const searchEngineId = 'https://cse.google.com/cse.js?cx=405f6c94c3a7d4a52';
const query = issueID.replace('-', ' ');

async function fetchGoogleInfo() {
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
        const firstResult = data.items[0];
        return `
            <h3>${firstResult.title}</h3>
            <p>${firstResult.snippet}</p>
            <a href="${firstResult.link}" target="_blank">Read more</a>
        `;
    } else {
        return '<p>No results found.</p>';
    }
}
