module.exports = ({ env }) => (
  {
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "bookshelf",
      "settings": {
        "client": "postgres",
        "host": "ec2-52-22-216-69.compute-1.amazonaws.com",
        "port": 5432,
        "username": "axlyjrhzmyrllt",
        "password": "307f720c4e73b826294a675dce6f93e14aa2a2157e66c03e8389a3efc5ccb939",
        "database": "d4h8lctmnlikt4",
        "schema": "public"
      },
      "options": {
        "debug": true
      }
    }
  }
}
  );
