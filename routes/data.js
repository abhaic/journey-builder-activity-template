const columns = ["firstName", "lastName", "emailAddress", "phoneNumber"];

const data = [
  ["HACK201910301", "Rashi", "Kapil", "rakapil@us.imshealth.com", "7329100468"],
  ["HACK201910302", "Rashi", "Kapil", "Rashi.kapil@outlook.com", "9736154533"],
  ["HACK201910303", "Richa", "Gor", "rgor@us.imshealth.com", "7325939478"],
  [
    "HACK201910304",
    "Matthew",
    "Berry",
    "berrym@us.imshealth.com",
    "5703507242"
  ],
  [
    "HACK201910305",
    "Shelly",
    "Dehaven",
    "dehavens@us.imshealth.com",
    "5702362949"
  ],
  [
    "HACK201910306",
    "Harish",
    "Lakshmi",
    "hlakshmi@us.imshealth.com",
    "9086352722"
  ],
  [
    "HACK201910307",
    "Senthil",
    "Namasivayam",
    "snamasivayam@us.imshealth.com",
    "9082855054"
  ],
  ["HACK201910308", "Ray", "Madara", "rmadara@us.imshealth.com", "7325404278"],
  ["HACK201910309", "Ray", "Madara", "raymadara@gmail.com", "7327547498"]
];

exports.json = data.reduce((map, r) => {
  const [key, ...rest] = r;
  const values = rest.reduce((map, v, i) => {
    return { ...map, [columns[i]]: v };
  }, {});
  return { ...map, [key]: rest };
}, {});
