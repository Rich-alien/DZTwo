const  employees = [{
    "name": "Alex",
    "surname": "Yavkin",
    "position": "sr. engineer",
    "department": "DB",
    "gender": "male",
    "birthday": "7/16/1991",
    "hireDate": "11/5/2016",
    "salary": 34500
}, {
    "name": "Liza",
    "surname": "Rechkina",
    "position": "lead QA engineer",
    "department": "DevOps",
    "gender": "female",
    "birthday": "10/26/1986",
    "hireDate": "11/10/2015",
    "salary": 34500
}, {
    "name": "Camilia",
    "surname": "Kukushkina",
    "position": "jr. QA engineer",
    "department": "UX",
    "gender": "female",
    "birthday": "2/3/1992",
    "hireDate": "5/19/2014",
    "salary": 16400
}, {
    "name": "Vasiliy",
    "surname": "Penkov",
    "position": "jr. engineer",
    "department": "DB",
    "gender": "male",
    "birthday": "1/24/1981",
    "hireDate": "6/21/2016",
    "salary": 29400
}, {
    "name": "Violeta",
    "surname": "Zhlobova",
    "position": "sr. engineer",
    "department": "DevOps",
    "gender": "female",
    "birthday": "6/20/1981",
    "hireDate": "7/27/2011",
    "salary": 33100
}, {
    "name": "Daria",
    "surname": "Sonina",
    "position": "sr. engineer",
    "department": "DevOps",
    "gender": "female",
    "birthday": "3/8/1981",
    "hireDate": "9/25/2014",
    "salary": 32500
}, {
    "name": "Victoria",
    "surname": "Savenkova",
    "position": "QA engineer",
    "department": "SD",
    "gender": "female",
    "birthday": "4/21/1981",
    "hireDate": "6/23/2013",
    "salary": 12600
}, {
    "name": "Felix",
    "surname": "Kozin",
    "position": "sr. engineer",
    "department": "DevOps",
    "gender": "male",
    "birthday": "2/5/1990",
    "hireDate": "5/4/2016",
    "salary": 33900
}, {
    "name": "Maria",
    "surname": "Sidorova",
    "position": "sr. QA engineer",
    "department": "GUI",
    "gender": "female",
    "birthday": "9/15/1983",
    "hireDate": "11/13/2013",
    "salary": 23400
}, {
    "name": "Polina",
    "surname": "Kaporina",
    "position": "sr. engineer",
    "department": "SD",
    "gender": "female",
    "birthday": "3/16/1985",
    "hireDate": "5/15/2015",
    "salary": 15400
}, {
    "name": "Nikolay",
    "surname": "Pahov",
    "position": "engineer",
    "department": "GUI",
    "gender": "male",
    "birthday": "5/4/1983",
    "hireDate": "10/21/2011",
    "salary": 14800
}, {
    "name": "Lika",
    "surname": "Bukina",
    "position": "lead engineer",
    "department": "GUI",
    "gender": "female",
    "birthday": "10/3/1990",
    "hireDate": "2/21/2012",
    "salary": 12200
}, {
    "name": "Govard",
    "surname": "Vnukov",
    "position": "lead QA engineer",
    "department": "GUI",
    "gender": "male",
    "birthday": "11/23/1989",
    "hireDate": "4/17/2018",
    "salary": 16300
}, {
    "name": "Margo",
    "surname": "Kulachkova",
    "position": "lead engineer",
    "department": "SD",
    "gender": "female",
    "birthday": "8/26/1988",
    "hireDate": "5/11/2015",
    "salary": 30800
}, {
    "name": "Felix",
    "surname": "Latishev",
    "position": "sr. engineer",
    "department": "DevOps",
    "gender": "male",
    "birthday": "12/14/1990",
    "hireDate": "6/20/2016",
    "salary": 10200
}, {
    "name": "John",
    "surname": "Savenkov",
    "position": "sr. engineer",
    "department": "SD",
    "gender": "male",
    "birthday": "5/27/1988",
    "hireDate": "1/20/2015",
    "salary": 29100
}, {
    "name": "Irina",
    "surname": "Simpsona",
    "position": "jr. QA engineer",
    "department": "Perf",
    "gender": "female",
    "birthday": "1/15/1983",
    "hireDate": "7/23/2012",
    "salary": 33300
}, {
    "name": "Vlad",
    "surname": "Zhvachkin",
    "position": "jr. engineer",
    "department": "Perf",
    "gender": "male",
    "birthday": "11/24/1985",
    "hireDate": "9/28/2017",
    "salary": 20500
}, {
    "name": "Anastasia",
    "surname": "Bambukova",
    "position": "jr. QA engineer",
    "department": "DevOps",
    "gender": "female",
    "birthday": "12/28/1981",
    "hireDate": "2/11/2018",
    "salary": 28500
}, {
    "name": "Julia",
    "surname": "Zhlobova",
    "position": "engineer",
    "department": "UX",
    "gender": "female",
    "birthday": "11/20/1982",
    "hireDate": "1/15/2018",
    "salary": 26800
}, {
    "name": "Nikolay",
    "surname": "Puzikov",
    "position": "QA engineer",
    "department": "UX",
    "gender": "male",
    "birthday": "3/16/1989",
    "hireDate": "12/18/2014",
    "salary": 25400
}, {
    "name": "Tom",
    "surname": "Mandarinov",
    "position": "jr. engineer",
    "department": "GUI",
    "gender": "male",
    "birthday": "2/14/1986",
    "hireDate": "9/27/2015",
    "salary": 21100
}, {
    "name": "Inna",
    "surname": "Zhukova",
    "position": "sr. engineer",
    "department": "UX",
    "gender": "female",
    "birthday": "4/20/1990",
    "hireDate": "7/16/2017",
    "salary": 18000
}, {
    "name": "Roman",
    "surname": "Petrov",
    "position": "lead engineer",
    "department": "Perf",
    "gender": "male",
    "birthday": "5/8/1984",
    "hireDate": "4/12/2015",
    "salary": 28800
}, {
    "name": "Inna",
    "surname": "Shvagereva",
    "position": "lead QA engineer",
    "department": "UX",
    "gender": "female",
    "birthday": "6/25/1987",
    "hireDate": "8/8/2013",
    "salary": 31600
}, {
    "name": "Adam",
    "surname": "Petrov",
    "position": "engineer",
    "department": "Perf",
    "gender": "male",
    "birthday": "8/19/1988",
    "hireDate": "2/12/2011",
    "salary": 10300
}, {
    "name": "Roman",
    "surname": "Kurkin",
    "position": "lead QA engineer",
    "department": "DB",
    "gender": "male",
    "birthday": "10/20/1985",
    "hireDate": "5/30/2017",
    "salary": 25600
}, {
    "name": "Darina",
    "surname": "Kruzhilnikova",
    "position": "lead engineer",
    "department": "DevOps",
    "gender": "female",
    "birthday": "5/18/1988",
    "hireDate": "2/28/2018",
    "salary": 30400
}, {
    "name": "Violeta",
    "surname": "Latinceva",
    "position": "sr. QA engineer",
    "department": "SD",
    "gender": "female",
    "birthday": "6/27/1982",
    "hireDate": "3/8/2017",
    "salary": 11100
}, {
    "name": "Brad",
    "surname": "Pivovarov",
    "position": "sr. engineer",
    "department": "DB",
    "gender": "male",
    "birthday": "11/26/1989",
    "hireDate": "12/30/2017",
    "salary": 22100
}, {
    "name": "Felix",
    "surname": "Kruzhilnikov",
    "position": "lead QA engineer",
    "department": "Perf",
    "gender": "male",
    "birthday": "5/11/1987",
    "hireDate": "3/24/2012",
    "salary": 17900
}, {
    "name": "Donald",
    "surname": "Kukushkin",
    "position": "engineer",
    "department": "SD",
    "gender": "male",
    "birthday": "11/25/1981",
    "hireDate": "7/23/2013",
    "salary": 23000
}, {
    "name": "Inna",
    "surname": "Pereletova",
    "position": "QA engineer",
    "department": "DB",
    "gender": "female",
    "birthday": "8/25/1987",
    "hireDate": "2/20/2011",
    "salary": 23100
}, {
    "name": "Margo",
    "surname": "Mesheryakova",
    "position": "lead QA engineer",
    "department": "DB",
    "gender": "female",
    "birthday": "10/21/1991",
    "hireDate": "8/31/2017",
    "salary": 25200
}, {
    "name": "Margo",
    "surname": "Noskova",
    "position": "sr. QA engineer",
    "department": "DB",
    "gender": "female",
    "birthday": "4/22/1988",
    "hireDate": "8/28/2013",
    "salary": 17500
}, {
    "name": "Polina",
    "surname": "Ionova",
    "position": "jr. QA engineer",
    "department": "SD",
    "gender": "female",
    "birthday": "11/9/1985",
    "hireDate": "1/28/2015",
    "salary": 10900
}, {
    "name": "Tom",
    "surname": "Kruzhilnikov",
    "position": "lead engineer",
    "department": "DevOps",
    "gender": "male",
    "birthday": "8/9/1989",
    "hireDate": "4/28/2015",
    "salary": 25400
}, {
    "name": "John",
    "surname": "Savenkov",
    "position": "jr. QA engineer",
    "department": "DevOps",
    "gender": "male",
    "birthday": "5/21/1990",
    "hireDate": "9/2/2014",
    "salary": 28800
}, {
    "name": "Alessa",
    "surname": "Harikova",
    "position": "jr. engineer",
    "department": "Perf",
    "gender": "female",
    "birthday": "5/18/1984",
    "hireDate": "3/11/2012",
    "salary": 28600
}, {
    "name": "Elena",
    "surname": "Rechkina",
    "position": "lead QA engineer",
    "department": "GUI",
    "gender": "female",
    "birthday": "7/22/1991",
    "hireDate": "6/12/2016",
    "salary": 21200
}, {
    "name": "Darina",
    "surname": "Epifanceva",
    "position": "lead engineer",
    "department": "DB",
    "gender": "female",
    "birthday": "6/12/1987",
    "hireDate": "3/5/2016",
    "salary": 10400
}, {
    "name": "Darina",
    "surname": "Shutova",
    "position": "sr. QA engineer",
    "department": "SD",
    "gender": "female",
    "birthday": "8/14/1991",
    "hireDate": "5/8/2016",
    "salary": 25000
}, {
    "name": "Vlad",
    "surname": "Andreev",
    "position": "engineer",
    "department": "DevOps",
    "gender": "male",
    "birthday": "2/7/1991",
    "hireDate": "8/23/2011",
    "salary": 32000
}, {
    "name": "Camilia",
    "surname": "Moiseeva",
    "position": "jr. engineer",
    "department": "GUI",
    "gender": "female",
    "birthday": "12/28/1991",
    "hireDate": "5/9/2011",
    "salary": 13800
}, {
    "name": "Oleg",
    "surname": "Pyatachkov",
    "position": "lead engineer",
    "department": "DB",
    "gender": "male",
    "birthday": "6/18/1984",
    "hireDate": "11/27/2015",
    "salary": 26400
}, {
    "name": "Artem",
    "surname": "Kuchkov",
    "position": "lead QA engineer",
    "department": "DB",
    "gender": "male",
    "birthday": "8/4/1983",
    "hireDate": "8/11/2012",
    "salary": 29000
}, {
    "name": "Vasiliy",
    "surname": "Stolov",
    "position": "engineer",
    "department": "DevOps",
    "gender": "male",
    "birthday": "5/1/1988",
    "hireDate": "9/11/2018",
    "salary": 23800
}, {
    "name": "Dmitry",
    "surname": "Latishev",
    "position": "jr. QA engineer",
    "department": "DB",
    "gender": "male",
    "birthday": "10/31/1988",
    "hireDate": "2/4/2012",
    "salary": 16500
}, {
    "name": "Liza",
    "surname": "Hohlova",
    "position": "sr. engineer",
    "department": "DevOps",
    "gender": "female",
    "birthday": "11/11/1983",
    "hireDate": "4/27/2015",
    "salary": 23500
}, {
    "name": "Daria",
    "surname": "Abramova",
    "position": "jr. QA engineer",
    "department": "GUI",
    "gender": "female",
    "birthday": "9/4/1991",
    "hireDate": "4/18/2018",
    "salary": 17600
}];
module.exports = employees;