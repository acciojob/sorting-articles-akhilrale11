const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

// Function to strip unwanted words from the beginning of the article name
function stripArticle(name) {
    return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands array
const sortedBands = bands.sort((a, b) => {
    const strippedA = stripArticle(a);
    const strippedB = stripArticle(b);
    return strippedA.localeCompare(strippedB);
});

// Add sorted bands to the HTML
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
