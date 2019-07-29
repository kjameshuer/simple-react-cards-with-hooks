import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import moxios from 'moxios';

beforeEach(()=>{
  moxios.install();
  moxios.stubRequest('https://randomuser.me/api/?results=10',{
    status: 200,
    response: [
        {
        gender: "female",
        name: {
        title: "ms",
        first: "anna",
        last: "vicente"
        },
        location: {
        street: "4683 ronda de toledo",
        city: "alcobendas",
        state: "castilla la mancha",
        postcode: 55756,
        coordinates: {
        latitude: "-17.1027",
        longitude: "19.6978"
        },
        timezone: {
        offset: "-3:30",
        description: "Newfoundland"
        }
        },
        email: "anna.vicente@example.com",
        login: {
        uuid: "1fc57f04-8cae-4f96-b691-6002e6288b2c",
        username: "biggoose143",
        password: "moondog",
        salt: "WP38KA0x",
        md5: "7fc7b890c5f3180dc21c479d4e3e3919",
        sha1: "d3e5f26a4975a44f6377fba017e752d009f0faaa",
        sha256: "42a90296b0cf3e3c25e205d8316f613a65de24cb696dc43cda711e2738cb9e1c"
        },
        dob: {
        date: "1947-02-08T10:57:56Z",
        age: 72
        },
        registered: {
        date: "2004-07-22T23:04:14Z",
        age: 15
        },
        phone: "941-556-170",
        cell: "640-146-066",
        id: {
        name: "DNI",
        value: "48331568-F"
        },
        picture: {
        large: "https://randomuser.me/api/portraits/women/85.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg"
        },
        nat: "ES"
        },
        {
        gender: "male",
        name: {
        title: "mr",
        first: "محمدعلی",
        last: "جعفری"
        },
        location: {
        street: "5691 15 خرداد",
        city: "ساری",
        state: "فارس",
        postcode: 18724,
        coordinates: {
        latitude: "-87.0565",
        longitude: "-12.8628"
        },
        timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima"
        }
        },
        email: "محمدعلی.جعفری@example.com",
        login: {
        uuid: "126a1a97-d562-48ac-ba0c-1390781cfb82",
        username: "beautifulrabbit744",
        password: "raymond",
        salt: "V9RFkDCQ",
        md5: "5f8fefeb851d9f2c9bb3a31765323d39",
        sha1: "af2ab9c9750d2aa7a03864b5d77a01253a8b5f12",
        sha256: "e2eeede9804600e947b238187c46a7b6939cb10b9a0bc0ff5d523772f6f34b68"
        },
        dob: {
        date: "1959-08-15T17:43:11Z",
        age: 59
        },
        registered: {
        date: "2010-09-25T05:46:29Z",
        age: 8
        },
        phone: "015-89609294",
        cell: "0916-263-9823",
        id: {
        name: "",
        value: null
        },
        picture: {
        large: "https://randomuser.me/api/portraits/men/53.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/53.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/53.jpg"
        },
        nat: "IR"
        },
        {
        gender: "female",
        name: {
        title: "ms",
        first: "kayla",
        last: "zhang"
        },
        location: {
        street: "8099 hugh watt drive",
        city: "gisborne",
        state: "southland",
        postcode: 10303,
        coordinates: {
        latitude: "-3.0806",
        longitude: "-17.1306"
        },
        timezone: {
        offset: "-3:30",
        description: "Newfoundland"
        }
        },
        email: "kayla.zhang@example.com",
        login: {
        uuid: "ab1cb488-18de-4a0f-bf63-9495ed45d88f",
        username: "angryelephant305",
        password: "lamont",
        salt: "CRWaTHaW",
        md5: "5a730f7e24f3c9627be4b21147e74994",
        sha1: "d6ccecfba096672efa1a46ceb7de97f32aca748f",
        sha256: "fbeb1540399471289bf9cf3fe1e939ecf5681f99fdaaeffe0f456ffb63a5a2e8"
        },
        dob: {
        date: "1993-11-13T14:48:30Z",
        age: 25
        },
        registered: {
        date: "2006-09-19T06:22:34Z",
        age: 12
        },
        phone: "(110)-973-1360",
        cell: "(475)-956-5414",
        id: {
        name: "",
        value: null
        },
        picture: {
        large: "https://randomuser.me/api/portraits/women/34.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/34.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/34.jpg"
        },
        nat: "NZ"
        },
        {
        gender: "male",
        name: {
        title: "mr",
        first: "paul",
        last: "bråten"
        },
        location: {
        street: "freidigveien 6606",
        city: "kjøpsvik",
        state: "vestfold",
        postcode: "6006",
        coordinates: {
        latitude: "66.2966",
        longitude: "-71.3809"
        },
        timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca"
        }
        },
        email: "paul.bråten@example.com",
        login: {
        uuid: "c62a07bc-0b80-4c80-b3e4-5220fb625b17",
        username: "ticklishmeercat926",
        password: "firefigh",
        salt: "aWUxS3ji",
        md5: "5a52c0aa60eaea474a5e61d190f94238",
        sha1: "9f5c88b3be2577401949f359beb24cf1dd846263",
        sha256: "c417cc79de91e1bba6a172b50169f3725a33b5b204c64800745ce35607c068c0"
        },
        dob: {
        date: "1954-12-29T21:38:14Z",
        age: 64
        },
        registered: {
        date: "2016-02-08T19:03:36Z",
        age: 3
        },
        phone: "67817676",
        cell: "49718169",
        id: {
        name: "FN",
        value: "29125404896"
        },
        picture: {
        large: "https://randomuser.me/api/portraits/men/92.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg"
        },
        nat: "NO"
        },
        {
        gender: "male",
        name: {
        title: "mr",
        first: "aitor",
        last: "fernandes"
        },
        location: {
        street: "9195 rua dezessete ",
        city: "belford roxo",
        state: "pernambuco",
        postcode: 35614,
        coordinates: {
        latitude: "49.6119",
        longitude: "12.2548"
        },
        timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
        },
        email: "aitor.fernandes@example.com",
        login: {
        uuid: "f8a8716c-0b17-4236-bc0c-c6be225d9e3d",
        username: "ticklishswan544",
        password: "broncos",
        salt: "sLAH5U23",
        md5: "e43859a8cd8aea7e580ab2e5d5bac406",
        sha1: "6e1c7d40a4a929d92cf35ae18514e3523deba562",
        sha256: "68ba4f46327455dcf77ea00d72708f3d1d0e8e8735fc4121837b49fdc42243b0"
        },
        dob: {
        date: "1963-02-02T12:58:02Z",
        age: 56
        },
        registered: {
        date: "2005-12-10T05:56:50Z",
        age: 13
        },
        phone: "(96) 5443-7874",
        cell: "(29) 5525-4770",
        id: {
        name: "",
        value: null
        },
        picture: {
        large: "https://randomuser.me/api/portraits/men/17.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg"
        },
        nat: "BR"
        },
        {
        gender: "female",
        name: {
        title: "ms",
        first: "diva",
        last: "caldeira"
        },
        location: {
        street: "7500 rua dezenove de outubro",
        city: "ibirité",
        state: "alagoas",
        postcode: 89346,
        coordinates: {
        latitude: "76.3571",
        longitude: "5.3217"
        },
        timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City"
        }
        },
        email: "diva.caldeira@example.com",
        login: {
        uuid: "ce2caca6-fb1d-42af-aaa1-706ae4194496",
        username: "browncat776",
        password: "2727",
        salt: "dsvsJuIs",
        md5: "d54452dbdc0bf5fc1463c8a6bf50db4b",
        sha1: "44edf25bb4346581908daf047fc475ff37a1de63",
        sha256: "65c0f1d39a82357c465a2166d1e55e45c5c16dab4c96d4974edcf2074072cd29"
        },
        dob: {
        date: "1951-07-22T07:57:38Z",
        age: 68
        },
        registered: {
        date: "2015-01-02T23:34:52Z",
        age: 4
        },
        phone: "(97) 1194-2856",
        cell: "(53) 3054-1606",
        id: {
        name: "",
        value: null
        },
        picture: {
        large: "https://randomuser.me/api/portraits/women/42.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/42.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/42.jpg"
        },
        nat: "BR"
        },
        {
        gender: "female",
        name: {
        title: "miss",
        first: "cida",
        last: "melo"
        },
        location: {
        street: "7477 rua principal",
        city: "diadema",
        state: "paraná",
        postcode: 52043,
        coordinates: {
        latitude: "8.5261",
        longitude: "147.7467"
        },
        timezone: {
        offset: "-10:00",
        description: "Hawaii"
        }
        },
        email: "cida.melo@example.com",
        login: {
        uuid: "bde2de75-32fb-4977-8cdc-63f89386bb01",
        username: "tinyrabbit979",
        password: "1023",
        salt: "wQ5s1mRc",
        md5: "4059a0a3c2641b214a81406db118a46b",
        sha1: "d392a84a833c709f86ea10076682a828537e72ae",
        sha256: "ea10d13d19e8717e7830cc08053b6614a8d06f3a5cbb4b065c1cdbebee43625d"
        },
        dob: {
        date: "1966-05-17T22:12:35Z",
        age: 53
        },
        registered: {
        date: "2018-04-03T23:55:43Z",
        age: 1
        },
        phone: "(39) 3219-2086",
        cell: "(38) 6885-4847",
        id: {
        name: "",
        value: null
        },
        picture: {
        large: "https://randomuser.me/api/portraits/women/21.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg"
        },
        nat: "BR"
        },
        {
        gender: "female",
        name: {
        title: "mademoiselle",
        first: "naomi",
        last: "fernandez"
        },
        location: {
        street: "5895 avenue du fort-caire",
        city: "tschappina",
        state: "nidwalden",
        postcode: 8062,
        coordinates: {
        latitude: "89.7400",
        longitude: "-93.6140"
        },
        timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca"
        }
        },
        email: "naomi.fernandez@example.com",
        login: {
        uuid: "1a3b350e-0454-4958-8042-c2c7fb21e73d",
        username: "happyfish800",
        password: "stanton",
        salt: "P3o5yhA8",
        md5: "ee82b90bdec7ad195bef898813fc38b3",
        sha1: "052bd6dd01eef0888252a18fc81a852aea75cb3f",
        sha256: "f53efa4186f95309d65154fd9d5ec825ede18e6ada31c165f5c074a43e1c10f2"
        },
        dob: {
        date: "1960-11-19T12:58:38Z",
        age: 58
        },
        registered: {
        date: "2005-06-26T01:13:29Z",
        age: 14
        },
        phone: "(153)-758-1480",
        cell: "(629)-437-1657",
        id: {
        name: "AVS",
        value: "756.8932.4897.39"
        },
        picture: {
        large: "https://randomuser.me/api/portraits/women/92.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/92.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/92.jpg"
        },
        nat: "CH"
        },
        {
        gender: "female",
        name: {
        title: "mrs",
        first: "matilda",
        last: "cooper"
        },
        location: {
        street: "4628 east tamaki road",
        city: "porirua",
        state: "taranaki",
        postcode: 86742,
        coordinates: {
        latitude: "8.7838",
        longitude: "56.9355"
        },
        timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City"
        }
        },
        email: "matilda.cooper@example.com",
        login: {
        uuid: "8660872b-0a1f-4291-9b84-775ae4d3b00e",
        username: "yellowleopard483",
        password: "travis",
        salt: "7mByMlev",
        md5: "0ba28abde0b635aa149ebbe9a7739133",
        sha1: "c0c8e290a049ff7980260e6a8979100e0b34833b",
        sha256: "74aa03171696253a44c744e26af32a98672bd0196ba838824f5a241ca1038a57"
        },
        dob: {
        date: "1983-01-26T10:32:11Z",
        age: 36
        },
        registered: {
        date: "2010-12-14T22:25:08Z",
        age: 8
        },
        phone: "(031)-354-4143",
        cell: "(778)-616-5660",
        id: {
        name: "",
        value: null
        },
        picture: {
        large: "https://randomuser.me/api/portraits/women/9.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/9.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/9.jpg"
        },
        nat: "NZ"
        },
        {
        gender: "male",
        name: {
        title: "mr",
        first: "paul",
        last: "stanley"
        },
        location: {
        street: "3895 karen dr",
        city: "toowoomba",
        state: "south australia",
        postcode: 2704,
        coordinates: {
        latitude: "52.3085",
        longitude: "171.9689"
        },
        timezone: {
        offset: "+4:30",
        description: "Kabul"
        }
        },
        email: "paul.stanley@example.com",
        login: {
        uuid: "6f35e432-f41e-4a6d-ace8-7d6c2db46791",
        username: "silverpeacock409",
        password: "124038",
        salt: "l34Hwdzj",
        md5: "efff2d0ff3fb572ab624e2677506298c",
        sha1: "5c9b6d525d5dfc98d69e77b559f2be5e5e58ed8a",
        sha256: "bb401a5810f7afc9eb7bf70dc4b34ba8236764c272138bfed5fe76315c2de7d7"
        },
        dob: {
        date: "1995-03-27T01:57:01Z",
        age: 24
        },
        registered: {
        date: "2008-07-01T09:12:24Z",
        age: 11
        },
        phone: "06-3329-3470",
        cell: "0425-752-677",
        id: {
        name: "TFN",
        value: "885743524"
        },
        picture: {
        large: "https://randomuser.me/api/portraits/men/26.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/26.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/26.jpg"
        },
        nat: "AU"
        }
        ],
        info: {
        seed: "736f636f7aa982d5",
        results: 10,
        page: 1,
        version: "1.2"
        }
        }
    ]
    
  )
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
