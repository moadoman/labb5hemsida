export function getWather()
{
    return fetch("https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json")
        .then(function (response)
        {
            return response.json();
        }).then(function (parse)
        {

            //skapar lista med lista med de tre senaste timeSeries
            let list = [parse.timeSeries[0], parse.timeSeries[1], parse.timeSeries[2]];

            return list
        }).then(function (data)
        {
            // skappa mit egna "json" med tid och temperatur
            let dict = [{
                time: data[0].validTime.substr(11, 5),
                temp: data[0].parameters[10].values[0].toString()
            },
            {
                time: data[1].validTime.substr(11, 5),
                temp: data[1].parameters[10].values[0].toString()
            },
            {
                time: data[2].validTime.substr(11, 5),
                temp: data[2].parameters[10].values[0].toString()
            }
            ]

            return dict;
        })
}