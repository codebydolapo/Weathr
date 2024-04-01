import countries from "../countries";

const filterCountries = (text) => {
    // Convert text to lowercase for case-insensitive matching
    const lowercaseText = text.toLowerCase();

    return countries.filter((country) => {
        // Check if the text matches the beginning of the country name (autocomplete)
        const nameMatch = country.name.toLowerCase().startsWith(lowercaseText);
        // Check if the text matches any part of the location (more flexible search)
        const locationMatch = country.location.toLowerCase().includes(lowercaseText);

        // Return countries that match either name or location
        return nameMatch || locationMatch;
    });
};

export default filterCountries