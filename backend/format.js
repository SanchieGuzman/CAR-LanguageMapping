export function format(databaseResults) {
    // database results are already sorted
    const top5 = databaseResults.languages.slice(0, 5);
    const other_langauges = databaseResults.languages
        .slice(5, databaseResults.languages.length)
        .map((langauge) => langauge.language_name);

    const top5Total = top5
        .reduce((sum, language) => sum+ Number(language.count), 0);

    const languages = top5
        .map((language) => ({
            language_name: language.language_name,
            percent: compute_percentage(language.count, top5Total)
        }));

    const finalJson = {
        "municipality_name" : databaseResults.municipality_name,
        "municipality_image" : databaseResults.municipality_image,
        "municipality_description" : databaseResults.municipality_information,
        "information_source" : databaseResults.information_source,
        "languages" : languages,
        "other_langauges" : other_langauges
    }

    return finalJson;
}

function compute_percentage(count, total){
    return ((count/total) * 100).toFixed(2);
}