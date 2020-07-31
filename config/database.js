let newregex = /[:@/]/g;
let regex = new RegExp(newregex);
let url = process.env.DATABASE_URL;
let text = url.split(regex)



module.exports = ({ env }) => (


{
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: String(text[5]),
        port: String(text[6]),
        database: String(text[7]),
        username: String(text[3]),
        password: String(text[4]),
        schema: 'public',
      },
      options: {},
    },
  },
});

