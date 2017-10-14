#!/usr/bin/env node

const fs = require('fs');
const parser = require('parse-rss');
const get = require('lodash/get');
const sortBy = require('lodash/sortBy');
const reverse = require('lodash/reverse');
const cities = require('./src/cities');

Object.keys(cities).forEach(city => {
  console.log('🚜 >', `Let's shovel some dirt in ${cities[city]}! 🚨 🌎 🆓`);
  // Parse RSS feed to JSON
  parser(
    `https://${city}.craigslist.org/search/zip?format=rss&query=Dirt`,
    function(err, res) {
      if (err) throw err;

      let dirts = [];
      // Take response and create a new object for each listing with all the data we will need
      res.forEach(item => {
        const listing = {
          title:
            get(item, 'title') && get(item, 'title').split(/\(([^)]+)\)/)[0],
          location:
            (get(item, 'title') &&
              get(item, 'title').split(/\(([^)]+)\)/)[1]) ||
            '---',
          description: get(item, 'description'),
          date: get(item, 'date'),
          link: get(item, 'link'),
          image:
            (get(item, ['enc:enclosure', '@', 'resource']) &&
              get(item, ['enc:enclosure', '@', 'resource']).replace(
                '300x300.jpg',
                '600x450.jpg'
              )) ||
            'https://freedirtalert.com/images/no-dirt.png',
        };
        dirts.push(listing);
      });

      // Sort by date then reverse order so newest are on top
      dirts = sortBy(dirts, listing => {
        return new Date(listing.date);
      });
      dirts = reverse(dirts);

      const jsonResults = {
        city,
        date: Date.now(),
        data: dirts,
      };

      // Save json file to disk in data directory
      fs.writeFile(
        `./public/data/${city}.json`,
        JSON.stringify(jsonResults),
        'utf8',
        function(err) {
          if (err) throw err;

          console.log(
            '🚜 >',
            `🆓 🌎 🚨  All the dirt in ${cities[
              city
            ]} has been shoveled! 🚨 🌎 🆓`
          );
        }
      );
    }
  );
});
